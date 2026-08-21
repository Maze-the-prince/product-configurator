import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './vendor/addons/loaders/GLTFLoader.js';
import { XREstimatedLight } from './vendor/addons/webxr/XREstimatedLight.js';

const $ = (sel) => document.querySelector(sel);
function setText(sel, value) {
  const el = $(sel);
  if (el) el.textContent = value;
}
function hideOrbitHint() {
  $('#orbitHint')?.classList.add('hidden');
}

const RALS = {
  ral7021: { label: 'RAL 7021', name: 'Black grey', color: 0x2f3234, code: '7021' },
  ral5005: { label: 'RAL 5005', name: 'Signal blue', color: 0x154889, code: '5005' },
  ral3020: { label: 'RAL 3020', name: 'Traffic red', color: 0xc1121c, code: '3020' },
  ral8017: { label: 'RAL 8017', name: 'Chocolate brown', color: 0x44322d, code: '8017' },
  ral2004: { label: 'RAL 2004', name: 'Pure orange', color: 0xe25303, code: '2004' },
  ral6029: { label: 'RAL 6029', name: 'Mint green', color: 0x007243, code: '6029' },
  ral1026: { label: 'RAL 1026', name: 'Luminous yellow', color: 0xf5d000, code: '1026' },
  ral9004: { label: 'RAL 9004', name: 'Signal black', color: 0x1a1a1a, code: '9004' }
};
const RAL_ORDER = Object.keys(RALS);
const SHARED_PARAMS = [
  ['6b2e0c11-8a74-4d3f-9c1a-0f5e7b8d2a10', 'EQX_SKU', 'TEXT', 'Configured manufacturer SKU'],
  ['c4d91a22-1b85-4e40-a7f2-91c3d8e6b701', 'EQX_BodyRAL', 'TEXT', 'Body RAL colour'],
  ['0e7f3b44-2c96-4f51-b8a3-a2d4e9f0c812', 'EQX_LidRAL', 'TEXT', 'Lid RAL colour'],
  ['6dfd91aa-825c-45b7-1e09-08dae5f6c478', 'EQX_Volume_L', 'NUMBER', 'Nominal volume litres'],
  ['18a84c55-3d07-4062-c9b4-b3e5f0a1d923', 'EQX_Weight_kg', 'NUMBER', 'Empty weight']
];
const MAX_LOGO_BYTES = 1.5 * 1024 * 1024;
const PHONE_GPU = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const DESKTOP_DPR = Math.min(devicePixelRatio || 1, 1.75);
const ASSET_VERSION = '2';
const DEFAULT_GLB_URL = new URL(`./assets/model.glb?v=${ASSET_VERSION}`, import.meta.url).href;
const AD_LINE = 'Transform your 3D models into configurable views for your clients';
const CONTACT_EMAIL = 'mazenbanat@outlook.com';
const CONTACT_PHONE = '+961 81931045';

let product = {
  manufacturer: 'Innovio Solutions', productName: '240 L waste bin', skuPrefix: 'CL240',
  basePrice: 185, currency: 'USD', width: 580, depth: 735, height: 1070, accent: '#c1121c',
  familyName: 'CityLine_240_WasteBin', familyCategory: 'Specialty Equipment', omniClass: '23.27.19.14',
  masterFormat: '32 33 00', assemblyCode: 'G2040', ifcClass: 'IfcFurniture', keynote: '32 33 00.A',
  productUrl: 'https://example.com/cityline-240', lod: '350', hostMethod: 'Level'
};
let config = { body: 'ral7021', lid: 'ral9004', label: 'YOUR BRAND', logoData: null };

let renderer, scene, camera, root, chassisGroup, lidGroup, floor, grid, reticle, dimensionGroup;
let glbGroup = null, glbLoaded = false;
let bodyMat, lidMat, darkMat;
let glbBodyMat, glbLidMat, glbHwMat;
let exploded = false;
let target = { theta: -0.55, phi: 1.12, radius: PHONE_GPU ? 2.05 : 2.35 };
let orbit = { ...target };
let dragging = false, dragX = 0, dragY = 0;
let pointers = new Map();
let pinchStart = 0;
let nativeArUrl = null;
let nativeArTimer = 0;
let xrSession = null, hitTestSource = null, hitTestSourceRequested = false, touchHitSource = null;
let arPlaced = false;
let arHitStable = 0;
let arLastHitY = null;
let studioEnv = null;
let hemiLight, keyLight, fillLight, ambLight;
let xrEstimatedLight = null;
let contactShadow = null;
let arTargetPos = new THREE.Vector3();
let arTargetYaw = 0;
let arController = null;
let dirty = true;
const lookAtCenter = new THREE.Vector3(0, .52, 0);
let moneyFmt;
let plaqueMesh, plaqueTex, plaqueCtx, plaqueCanvas;
let plaqueTimer = 0;

async function init() {
  try {
    const res = await fetch('/api/product');
    if (res.ok) product = { ...product, ...(await res.json()) };
  } catch {}

  document.documentElement.style.setProperty('--accent', product.accent || '#c1121c');
  setText('#manufacturerLabel', product.manufacturer);
  setText('#productTitle', product.productName);

  restoreSharedConfig();
  await restoreCodeConfig();
  bindUI();
  try {
    setupThree();
    updateAll();
    tryLoadPreviewGlb().then((ok) => { if (ok) updateAll(); scheduleNativeArFile(); }).catch((err) => console.error(err));
  } catch (err) {
    console.error('[EquipXR] 3D view failed', err);
    $('#viewerError')?.classList.remove('hidden');
  }

  track('view', { product: product.productName });
  navigator.serviceWorker?.getRegistrations?.().then((regs) => regs.forEach((reg) => reg.unregister())).catch(() => {});
}

function markDirty() { dirty = true; }

function pointerSpread() {
  const pts = [...pointers.values()];
  if (pts.length < 2) return 0;
  return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
}

function setupThree() {
  const canvas = $('#viewerCanvas');
  if (!canvas) throw new Error('Missing viewer canvas');
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: DESKTOP_DPR < 1.5,
    alpha: true,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(DESKTOP_DPR);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.xr.enabled = true;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, 1, 0.05, 100);
  studioEnv = makeStudioEnvironment();
  scene.environment = studioEnv;

  hemiLight = new THREE.HemisphereLight(0xffffff, 0xb8c0c8, 2.2);
  scene.add(hemiLight);
  keyLight = new THREE.DirectionalLight(0xffffff, 1.65);
  keyLight.position.set(2.2, 5.2, 2.4);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(PHONE_GPU ? 1024 : 2048, PHONE_GPU ? 1024 : 2048);
  keyLight.shadow.bias = -0.00015;
  keyLight.shadow.normalBias = 0.035;
  keyLight.shadow.camera.near = 1;
  keyLight.shadow.camera.far = 16;
  scene.add(keyLight);
  ambLight = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(ambLight);
  fillLight = new THREE.DirectionalLight(0xe8eef5, 0.55);
  fillLight.position.set(-3, 2.4, -2);
  scene.add(fillLight);

  floor = new THREE.Mesh(new THREE.CircleGeometry(2.4, 48), new THREE.ShadowMaterial({ opacity: .13 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  grid = new THREE.GridHelper(3.6, 18, 0xcfd6df, 0xe5e9ef);
  grid.material.opacity = .26; grid.material.transparent = true; grid.position.y = .003; scene.add(grid);

  bodyMat = makeGlossPlastic(RALS.ral7021.color);
  lidMat = makeGlossPlastic(RALS.ral9004.color);
  darkMat = makeMatteRubber(0x171b20);

  root = new THREE.Group();
  scene.add(root);
  buildEquipment();

  reticle = new THREE.Group();
  reticle.matrixAutoUpdate = false;
  reticle.visible = false;
  const reticleRing = new THREE.Mesh(
    new THREE.RingGeometry(.11, .135, 48).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .92, depthTest: false })
  );
  const reticleDisc = new THREE.Mesh(
    new THREE.CircleGeometry(.11, 48).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .16, depthTest: false })
  );
  reticle.add(reticleDisc, reticleRing);
  scene.add(reticle);

  contactShadow = makeContactShadow();
  contactShadow.visible = false;
  root.add(contactShadow);

  xrEstimatedLight = new XREstimatedLight(renderer, true);
  xrEstimatedLight.visible = false;
  scene.add(xrEstimatedLight);
  xrEstimatedLight.addEventListener('estimationstart', () => {
    if (!xrSession) return;
    xrEstimatedLight.visible = true;
    if (xrEstimatedLight.environment) scene.environment = xrEstimatedLight.environment;
    if (hemiLight) hemiLight.visible = false;
    if (keyLight) keyLight.visible = false;
    if (fillLight) fillLight.visible = false;
    if (ambLight) ambLight.visible = false;
  });
  xrEstimatedLight.addEventListener('estimationend', () => {
    xrEstimatedLight.visible = false;
  });

  canvas.addEventListener('pointerdown', e => {
    if (xrSession) return;
    hideOrbitHint();
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      dragging = true; dragX = e.clientX; dragY = e.clientY; canvas.setPointerCapture?.(e.pointerId);
    } else {
      dragging = false;
      pinchStart = pointerSpread();
    }
    markDirty();
  });
  canvas.addEventListener('pointermove', e => {
    if (xrSession || !pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size >= 2) {
      const spread = pointerSpread();
      if (pinchStart > 0 && spread > 0) {
        const factor = pinchStart / spread;
        target.radius = THREE.MathUtils.clamp(target.radius * factor, 1.45, 4.2);
        pinchStart = spread;
        markDirty();
      }
      return;
    }
    if (!dragging) return;
    const dx = e.clientX - dragX, dy = e.clientY - dragY; dragX = e.clientX; dragY = e.clientY;
    target.theta -= dx * .008; target.phi = THREE.MathUtils.clamp(target.phi + dy * .006, .35, 1.45);
    markDirty();
  });
  canvas.addEventListener('pointerup', e => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = 0;
    if (pointers.size === 0) dragging = false;
  });
  canvas.addEventListener('pointercancel', e => {
    pointers.delete(e.pointerId);
    pinchStart = 0;
    dragging = false;
  });
  canvas.addEventListener('wheel', e => {
    if (xrSession) return;
    e.preventDefault();
    target.radius = THREE.MathUtils.clamp(target.radius + e.deltaY * .0025, 1.45, 4.2);
    markDirty();
  }, { passive: false });

  window.addEventListener('resize', resize);
  document.addEventListener('fullscreenchange', resize);
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(() => resize()).observe($('#viewerCard'));
  }
  requestAnimationFrame(resize);
  renderer.setAnimationLoop(render);
}

function box(name, size, material, pos, parent, cast = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.name = name; mesh.position.set(...pos); mesh.castShadow = cast; mesh.receiveShadow = true; parent.add(mesh); return mesh;
}

function cyl(name, radius, height, material, pos, parent, segs = 20) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segs), material);
  mesh.name = name; mesh.position.set(...pos); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
}

function buildEquipment() {
  root.clear();
  root.position.set(0, 0, 0);
  root.rotation.set(0, 0, 0);
  root.scale.set(1, 1, 1);
  root.visible = true;

  chassisGroup = new THREE.Group();
  chassisGroup.name = 'BODY';
  root.add(chassisGroup);

  // EN 840-1 240 L two-wheel bin, metres, origin on floor.
  box('BODY', [.50, .78, .62], bodyMat, [0, .51, .02], chassisGroup);
  box('BODY_RIM', [.52, .045, .64], bodyMat, [0, .90, .02], chassisGroup);
  [-.16, 0, .16].forEach((x, i) => box(`BODY_RIB_${i}`, [.018, .62, .012], bodyMat, [x, .50, .335], chassisGroup));
  box('BODY_KICK', [.46, .08, .04], darkMat, [0, .18, .32], chassisGroup);

  const comb = new THREE.Mesh(new THREE.BoxGeometry(.42, .06, .16), darkMat);
  comb.name = 'COMB'; comb.position.set(0, .97, -.28); comb.castShadow = true; chassisGroup.add(comb);

  [[-.22, .10, -.22], [.22, .10, -.22]].forEach((p, i) => {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(.10, .028, 10, 20), darkMat);
    wheel.name = `WHEEL_${i}`;
    wheel.position.set(...p);
    wheel.rotation.y = Math.PI / 2;
    wheel.castShadow = true;
    chassisGroup.add(wheel);
    cyl(`AXLE_${i}`, .018, .04, darkMat, [p[0], p[1], p[2]], chassisGroup, 10).rotation.z = Math.PI / 2;
  });

  lidGroup = new THREE.Group();
  lidGroup.name = 'LID';
  lidGroup.position.set(0, .93, -.28);
  chassisGroup.add(lidGroup);
  box('LID', [.54, .055, .70], lidMat, [0, .04, .32], lidGroup);
  box('LID_LIP', [.50, .02, .08], lidMat, [0, .01, .64], lidGroup);
  cyl('LID_HANDLE', .016, .18, darkMat, [0, .08, .58], lidGroup, 12).rotation.z = Math.PI / 2;

  dimensionGroup = new THREE.Group();
  dimensionGroup.visible = false;
  chassisGroup.add(dimensionGroup);
  const dimMat = new THREE.LineBasicMaterial({ color: 0x475569, transparent: true, opacity: .5 });
  [[[-.25, .03, .38], [.25, .03, .38]], [[.30, .03, -.28], [.30, .03, .34]], [[-.30, .02, .34], [-.30, 1.07, .34]]].forEach((seg) => {
    dimensionGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(seg.map((v) => new THREE.Vector3(...v))), dimMat));
  });
}

function ensurePlaque() {
  if (plaqueMesh) return;
  plaqueCanvas = document.createElement('canvas');
  plaqueCanvas.width = 512;
  plaqueCanvas.height = 170;
  plaqueCtx = plaqueCanvas.getContext('2d');
  plaqueTex = new THREE.CanvasTexture(plaqueCanvas);
  plaqueTex.colorSpace = THREE.SRGBColorSpace;
  plaqueTex.minFilter = THREE.LinearFilter;
  plaqueMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(.28, .09),
    new THREE.MeshBasicMaterial({ map: plaqueTex, transparent: true })
  );
  plaqueMesh.name = 'LOGO_PLATE';
  plaqueMesh.position.set(0, .48, .335);
}

function drawLabelPlaque() {
  ensurePlaque();
  plaqueCtx.fillStyle = '#f8fafc';
  plaqueCtx.fillRect(0, 0, 512, 170);
  plaqueCtx.fillStyle = '#111827';
  plaqueCtx.font = '700 52px Arial';
  plaqueCtx.textAlign = 'center';
  plaqueCtx.textBaseline = 'middle';
  plaqueCtx.fillText(config.label || 'YOUR BRAND', 256, 85);
  plaqueTex.needsUpdate = true;
}

function addBrandPlaque() {
  drawLabelPlaque();
  chassisGroup.add(plaqueMesh);
}

function previewGlbUrl() {
  const param = new URLSearchParams(location.search).get('glb');
  if (!param) return DEFAULT_GLB_URL;
  const name = param.replace(/\\/g, '/').split('/').pop();
  if (!name || !/\.(glb|gltf)$/i.test(name)) return DEFAULT_GLB_URL;
  return new URL(`./assets/${encodeURIComponent(name)}?v=${ASSET_VERSION}`, import.meta.url).href;
}

function parseGltfBuffer(buffer, path) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.parse(buffer, path, resolve, reject);
  });
}

function sitModelOnGround(model) {
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model);
  if (box.isEmpty()) return box;
  const size = box.getSize(new THREE.Vector3());
  const maxSide = Math.max(size.x, size.y, size.z);
  if (maxSide > 10) {
    model.scale.multiplyScalar(0.001);
    model.updateMatrixWorld(true);
    box.setFromObject(model);
  }
  const grounded = box.getCenter(new THREE.Vector3());
  model.position.x -= grounded.x;
  model.position.z -= grounded.z;
  model.position.y -= box.min.y;
  model.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(model);
}

function makeStudioEnvironment() {
  const envScene = new THREE.Scene();
  envScene.add(new THREE.HemisphereLight(0xffffff, 0x8a93a0, 1.2));
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(12, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xf4f6f8, side: THREE.BackSide })
  );
  envScene.add(sky);
  const panel = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  panel.position.set(-2.5, 5, 4);
  panel.lookAt(0, 0, 0);
  envScene.add(panel);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(envScene, 0.06).texture;
  pmrem.dispose();
  return tex;
}

function makeGlossPlastic(hex) {
  return new THREE.MeshPhysicalMaterial({
    color: hex,
    metalness: 0,
    roughness: 0.42,
    clearcoat: 0.28,
    clearcoatRoughness: 0.38,
    reflectivity: 0.35,
    envMapIntensity: 0.45,
    flatShading: false,
    vertexColors: false,
    side: THREE.FrontSide
  });
}

function makeMatteRubber(hex) {
  return new THREE.MeshLambertMaterial({
    color: hex,
    flatShading: false,
    vertexColors: false,
    side: THREE.FrontSide
  });
}

function isWheelName(name) {
  return /WHEEL|TYRE|TIRE|AXLE|BEARING|BLADE|HUB|RIM|CASTER|CASTOR/.test(String(name || '').toUpperCase());
}

function isLidName(name) {
  return /LID|COVER|HOOD/.test(String(name || '').toUpperCase());
}

function preparePreviewMeshes(model) {
  glbBodyMat = makeGlossPlastic(RALS[config.body].color);
  glbLidMat = makeGlossPlastic(RALS[config.lid].color);
  glbHwMat = makeMatteRubber(0x1a1c1e);

  const wheelParts = new Set();
  model.traverse((obj) => {
    if (isWheelName(obj.name)) obj.traverse((child) => wheelParts.add(child));
  });

  model.traverse((obj) => {
    if (!obj.isMesh) return;
    obj.castShadow = true;
    obj.receiveShadow = false;
    if (wheelParts.has(obj)) obj.material = glbHwMat;
    else obj.material = meshRole(obj) === 'lid' ? glbLidMat : glbBodyMat;
  });
}

function meshRole(obj) {
  let node = obj;
  while (node) {
    if (isWheelName(node.name)) return 'hardware';
    if (isLidName(node.name)) return 'lid';
    const n = String(node.name || '').toUpperCase();
    if (/BODY|BIN|DRUM|SHELL/.test(n)) return 'body';
    node = node.parent;
  }
  return 'body';
}

function applyGlbFinish() {
  if (!glbGroup) return;
  const bodyHex = RALS[config.body]?.color;
  const lidHex = RALS[config.lid]?.color;
  if (glbBodyMat && bodyHex != null) glbBodyMat.color.setHex(bodyHex);
  if (glbLidMat && lidHex != null) glbLidMat.color.setHex(lidHex);
  scheduleNativeArFile();
}

function mountPreviewGlb(sceneObj, url) {
  if (glbGroup) root.remove(glbGroup);
  glbGroup = sceneObj;
  glbGroup.name = 'previewGlb';
  preparePreviewMeshes(glbGroup);
  const box = sitModelOnGround(glbGroup);
  root.add(glbGroup);
  glbLoaded = true;
  chassisGroup.visible = false;

  const size = box.getSize(new THREE.Vector3());
  let meshCount = 0;
  glbGroup.traverse((obj) => { if (obj.isMesh) meshCount += 1; });
  console.info(`[EquipXR] Loaded ${url}`, {
    sizeMeters: { x: +size.x.toFixed(3), y: +size.y.toFixed(3), z: +size.z.toFixed(3) },
    meshes: meshCount
  });
  toast(`Loaded ${url} (meters, 1:1)`);
  markDirty();
}

async function tryLoadPreviewGlb() {
  const url = previewGlbUrl();
  let res;
  try {
    res = await fetch(url);
  } catch {
    return false;
  }
  if (res.status === 404) return false;
  if (!res.ok) {
    console.error(`[EquipXR] ${url} failed: HTTP ${res.status}`);
    toast(`Could not load ${url}`);
    return false;
  }
  try {
    const buffer = await res.arrayBuffer();
    const path = url.slice(0, url.lastIndexOf('/') + 1);
    const gltf = await parseGltfBuffer(buffer, path);
    mountPreviewGlb(gltf.scene, url);
    return true;
  } catch (err) {
    console.error(`[EquipXR] Failed to parse ${url}`, err);
    toast(`Could not parse ${url} — see the console`);
    return false;
  }
}

function updateBrandPlaque() {
  ensurePlaque();
  if (!config.logoData) {
    drawLabelPlaque();
    markDirty();
    return;
  }
  const img = new Image();
  img.onload = () => {
    plaqueCtx.fillStyle = 'rgba(255,255,255,.94)';
    plaqueCtx.fillRect(0, 0, 512, 170);
    const ratio = Math.min(460 / img.width, 130 / img.height);
    const w = img.width * ratio, h = img.height * ratio;
    plaqueCtx.drawImage(img, (512 - w) / 2, (170 - h) / 2, w, h);
    plaqueTex.needsUpdate = true;
    markDirty();
  };
  img.src = config.logoData;
}

function schedulePlaqueUpdate() {
  clearTimeout(plaqueTimer);
  plaqueTimer = setTimeout(updateBrandPlaque, 80);
}

function normalizeConfig() {
  if (!RALS[config.body]) config.body = 'ral7021';
  if (!RALS[config.lid]) config.lid = 'ral9004';
  config.label = String(config.label || 'YOUR BRAND').slice(0, 24);
}

function paintSwatches(host, selected) {
  if (!host) return;
  host.querySelectorAll('.swatch').forEach((b) => b.classList.toggle('active', b.dataset.ral === selected));
}

function updateAll() {
  normalizeConfig();
  if (glbLoaded) {
    if (chassisGroup) chassisGroup.visible = false;
    applyGlbFinish();
  } else if (bodyMat && lidMat) {
    if (chassisGroup) chassisGroup.visible = true;
    bodyMat.color.setHex(RALS[config.body].color);
    lidMat.color.setHex(RALS[config.lid].color);
  }

  paintSwatches($('#bodyOptions'), config.body);
  paintSwatches($('#lidOptions'), config.lid);
  const labelInput = $('#labelInput');
  if (labelInput) labelInput.value = config.label;
  setText('#bodyText', RALS[config.body].label);
  setText('#lidText', RALS[config.lid].label);

  const sku = `${product.skuPrefix}-B${RALS[config.body].code}-L${RALS[config.lid].code}`;
  const dims = `${product.width} × ${product.depth} × ${product.height} mm`;
  const price = Number(product.basePrice) || 0;
  setText('#priceLabel', money(price));
  setText('#skuLabel', sku);
  config.computed = { price, sku, volumeL: 240, weightKG: 14, dimensions: dims, heightMm: product.height };
  markDirty();
}

function renderRalSwatches(hostId, key) {
  const host = $(hostId);
  if (!host) return;
  host.querySelectorAll('.swatch').forEach((b) => {
    b.addEventListener('click', () => { config[key] = b.dataset.ral; updateAll(); });
  });
}

function bindUI() {
  renderRalSwatches('#bodyOptions', 'body');
  renderRalSwatches('#lidOptions', 'lid');
  $('#labelInput')?.addEventListener('input', e => { config.label = e.target.value || 'YOUR BRAND'; schedulePlaqueUpdate(); });
  $('#logoBtn')?.addEventListener('click', () => $('#logoInput')?.click());
  $('#logoInput')?.addEventListener('change', e => {
    const file = e.target.files?.[0]; if (!file) return;
    if (file.size > MAX_LOGO_BYTES) { toast('Logo must be under 1.5 MB'); return; }
    const reader = new FileReader();
    reader.onload = () => { config.logoData = reader.result; updateBrandPlaque(); toast('Logo applied to the 3D model'); };
    reader.readAsDataURL(file);
  });

  $('#orbitHint')?.addEventListener('click', hideOrbitHint);
  $('#arBtn')?.addEventListener('click', startAR);
  $('#arRetryBtn')?.addEventListener('click', () => { closeModal('#arHelpModal'); startAR(); });
  $('#arHelpClose')?.addEventListener('click', () => closeModal('#arHelpModal'));
  $('#arExitBtn')?.addEventListener('click', () => xrSession?.end());
  $('#copyArLink')?.addEventListener('click', async () => { await navigator.clipboard?.writeText(location.href); toast('AR link copied'); });

  $('#saveBtn')?.addEventListener('click', saveConfiguration);
  $('#shareBtn')?.addEventListener('click', shareConfiguration);
  $('#pdfBtn')?.addEventListener('click', downloadConfigurationPdf);

  $('#quoteBtn')?.addEventListener('click', e => { e.preventDefault(); openModal('#quoteModal'); });
  $('#quoteClose')?.addEventListener('click', () => closeModal('#quoteModal'));
  $('#quoteCancel')?.addEventListener('click', () => closeModal('#quoteModal'));
  $('#quoteForm')?.addEventListener('submit', submitQuote);
  $('#savedClose')?.addEventListener('click', () => closeModal('#savedModal'));
}

function approachRot(obj, axis, goal, t) {
  const current = obj.rotation[axis];
  if (Math.abs(current - goal) < 0.0004) {
    if (current !== goal) obj.rotation[axis] = goal;
    return false;
  }
  obj.rotation[axis] = THREE.MathUtils.lerp(current, goal, t);
  return true;
}

function render(_time, frame) {
  const lidMoving = lidGroup ? approachRot(lidGroup, 'x', exploded ? -1.15 : 0, .08) : false;
  if (xrSession) {
    updateXRHitTest(frame);
    if (arPlaced) {
      root.position.lerp(arTargetPos, 0.22);
      root.rotation.y += (arTargetYaw - root.rotation.y) * 0.2;
    }
    renderer.render(scene, camera);
    return;
  }

  const orbitDelta = Math.abs(target.theta - orbit.theta) + Math.abs(target.phi - orbit.phi) + Math.abs(target.radius - orbit.radius);
  const orbiting = orbitDelta > 0.0004;
  if (orbiting) {
    orbit.theta += (target.theta - orbit.theta) * .08;
    orbit.phi += (target.phi - orbit.phi) * .08;
    orbit.radius += (target.radius - orbit.radius) * .08;
    const sinPhi = Math.sin(orbit.phi);
    camera.position.set(
      lookAtCenter.x + orbit.radius * sinPhi * Math.sin(orbit.theta),
      lookAtCenter.y + orbit.radius * Math.cos(orbit.phi),
      lookAtCenter.z + orbit.radius * sinPhi * Math.cos(orbit.theta)
    );
    camera.lookAt(lookAtCenter);
  }

  if (dirty || orbiting || lidMoving) {
    renderer.render(scene, camera);
    dirty = false;
  }
}

function resize() {
  const card = $('#viewerCard');
  if (!card || !renderer || !camera) return;
  const rect = card.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / rect.height;
  camera.updateProjectionMatrix();
  markDirty();
}
function resetView() {
  target = { theta: -.55, phi: 1.12, radius: PHONE_GPU ? 2.05 : 2.35 };
  exploded = false;
  markDirty();
}
function money(v) {
  const currency = product.currency || 'USD';
  if (!moneyFmt || moneyFmt.resolvedOptions().currency !== currency) {
    moneyFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 });
  }
  return moneyFmt.format(v);
}

async function startAR() {
  track('ar_launch', { sku: config.computed?.sku });
  if (isIOS()) {
    if (!isAppleSafari()) {
      showARHelp('On iPhone, open this page in Safari — AR uses Apple Quick Look, which Chrome and in-app browsers cannot start.');
      return;
    }
    return launchQuickLookAR();
  }
  if (await launchWebXR()) return;
  if (isAndroid()) return launchSceneViewer();
  showARHelp('Open this HTTPS page in Safari on iPhone, or Chrome on Android, then tap View in AR.');
}

function isIOS() {
  const ua = navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isAppleSafari() {
  const ua = navigator.userAgent || '';
  return isIOS() && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
}

async function launchWebXR() {
  if (!navigator.xr || !window.isSecureContext) return false;
  let supported = false;
  try { supported = await navigator.xr.isSessionSupported('immersive-ar'); } catch { return false; }
  if (!supported) return false;
  const overlay = $('#arOverlay');
  overlay?.classList.remove('hidden');
  const options = {
    optionalFeatures: ['hit-test', 'light-estimation', 'dom-overlay'],
    ...(overlay ? { domOverlay: { root: overlay } } : {})
  };
  try {
    xrSession = await navigator.xr.requestSession('immersive-ar', options);
    renderer.setPixelRatio(1);
    renderer.xr.setFramebufferScaleFactor(0.88);
    renderer.xr.setReferenceSpaceType('local');
    await renderer.xr.setSession(xrSession);
    document.body.classList.add('is-ar');
    arPlaced = false;
    arHitStable = 0;
    arLastHitY = null;
    setARPresentation(true);
    root.visible = false;
    reticle.visible = false;
    if (contactShadow) contactShadow.visible = false;
    setText('#arBanner', 'Scan the floor, then tap to place.');
    xrSession.addEventListener('select', onARSelect);
    xrSession.addEventListener('end', onAREnd);
    return true;
  } catch (err) {
    console.error(err);
    xrSession = null;
    overlay?.classList.add('hidden');
    document.body.classList.remove('is-ar');
    setARPresentation(false);
    renderer.setPixelRatio(DESKTOP_DPR);
    return false;
  }
}

function setARPresentation(on) {
  renderer.shadowMap.enabled = !on;
  if (!on) scene.environment = studioEnv;
  renderer.toneMapping = on ? THREE.LinearToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = on ? 1 : 1.12;
  if (hemiLight) { hemiLight.intensity = on ? 0.7 : 2.2; hemiLight.visible = true; }
  if (ambLight) { ambLight.intensity = on ? 0.18 : 0.55; ambLight.visible = true; }
  if (keyLight) {
    keyLight.intensity = on ? 0.35 : 1.65;
    keyLight.castShadow = !on;
    keyLight.visible = true;
  }
  if (fillLight) fillLight.visible = !on;
  if (floor) floor.visible = !on;
  if (grid) grid.visible = !on;
  if (dimensionGroup) dimensionGroup.visible = false;
  if (contactShadow) contactShadow.visible = on && arPlaced;
  if (xrEstimatedLight) xrEstimatedLight.visible = false;
  [bodyMat, lidMat, glbBodyMat, glbLidMat].forEach((mat) => {
    if (!mat) return;
    if ('clearcoat' in mat) mat.clearcoat = on ? 0 : 0.28;
    if ('envMapIntensity' in mat) mat.envMapIntensity = on ? 0.5 : 0.45;
    if ('roughness' in mat && on) mat.roughness = 0.46;
    if ('roughness' in mat && !on) mat.roughness = 0.42;
    mat.needsUpdate = true;
  });
  renderer.xr.setFramebufferScaleFactor(on ? 0.88 : 1);
}

function makeContactShadow() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 8, 64, 64, 60);
  gradient.addColorStop(0, 'rgba(0,0,0,0.42)');
  gradient.addColorStop(0.55, 'rgba(0,0,0,0.16)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const map = new THREE.CanvasTexture(canvas);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.78, 0.62),
    new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, opacity: 0.85 })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.004;
  mesh.renderOrder = -1;
  mesh.name = 'AR_CONTACT_SHADOW';
  return mesh;
}

function launchSceneViewer() {
  const file = DEFAULT_GLB_URL;
  const title = encodeURIComponent(product.productName || 'Product');
  const fallback = encodeURIComponent(location.href);
  toast('Opening AR… colours follow the 3D file if live WebXR is unavailable.');
  location.href = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(file)}&mode=ar_preferred&resizable=false&title=${title}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${fallback};end;`;
}

async function launchQuickLookAR() {
  const link = $('#arQuickLook');
  if (nativeArUrl && link) {
    openQuickLook(link, nativeArUrl);
    return;
  }
  toast('Preparing AR…');
  try {
    await prepareNativeArFile();
  } catch (err) {
    console.error(err);
    showARHelp('Could not build the iPhone AR file. Stay in Safari, wait for the 3D model, then try again.');
    return;
  }
  if (nativeArUrl && link) openQuickLook(link, nativeArUrl);
  else showARHelp('AR file is ready. Tap View in AR again to open Quick Look.');
}

function openQuickLook(link, url) {
  link.setAttribute('rel', 'ar');
  link.href = url;
  link.click();
}

function scheduleNativeArFile() {
  if (!isIOS()) return;
  clearTimeout(nativeArTimer);
  nativeArTimer = setTimeout(() => { prepareNativeArFile().catch((err) => console.warn(err)); }, 400);
}

async function prepareNativeArFile() {
  const source = (glbGroup && glbLoaded) ? glbGroup : chassisGroup;
  if (!source) return;
  const { USDZExporter } = await import('https://cdn.jsdelivr.net/npm/three@0.164.1/examples/jsm/exporters/USDZExporter.js');
  const exporter = new USDZExporter();
  const exportRoot = cloneForNativeAR(source);
  const data = await exporter.parseAsync(exportRoot, { quickLookCompatible: true });
  const blob = new Blob([data], { type: 'model/vnd.usdz+zip' });
  if (nativeArUrl) URL.revokeObjectURL(nativeArUrl);
  nativeArUrl = URL.createObjectURL(blob);
  const link = $('#arQuickLook');
  if (link) link.href = nativeArUrl;
}

function cloneForNativeAR(source) {
  const clone = source.clone(true);
  clone.traverse((obj) => {
    if (!obj.isMesh) return;
    const src = obj.material;
    const color = src?.color ? src.color.clone() : new THREE.Color(0x888888);
    obj.material = new THREE.MeshStandardMaterial({
      color,
      metalness: src.metalness ?? 0,
      roughness: src.roughness ?? 0.45,
      envMapIntensity: 0.35
    });
  });
  const wrap = new THREE.Group();
  wrap.add(clone);
  wrap.updateMatrixWorld(true);
  return wrap;
}

function onARSelect() {
  if (reticle.visible) commitARPlacement(reticle.matrix, true);
}

function commitARPlacement(matrix, fromTap) {
  if (!xrSession) return;
  const pos = new THREE.Vector3().setFromMatrixPosition(matrix);
  if (arLastHitY != null && Math.abs(pos.y - arLastHitY) > 0.45 && !fromTap) return;
  arLastHitY = pos.y;
  arTargetPos.copy(pos);
  const xrCam = renderer.xr.getCamera();
  const dx = xrCam.position.x - pos.x;
  const dz = xrCam.position.z - pos.z;
  arTargetYaw = (dx * dx + dz * dz > 0.0001) ? Math.atan2(dx, dz) : 0;
  if (!arPlaced) {
    root.position.copy(pos);
    root.quaternion.identity();
    root.rotation.y = arTargetYaw;
    root.visible = true;
  }
  arPlaced = true;
  if (contactShadow) contactShadow.visible = true;
  reticle.visible = !fromTap;
  setText('#arBanner', 'Tap the floor to move it.');
}

function updateXRHitTest(frame) {
  if (!frame || !xrSession) return;
  const referenceSpace = renderer.xr.getReferenceSpace();
  const session = renderer.xr.getSession();
  if (!referenceSpace || !session) return;
  if (!hitTestSourceRequested) {
    hitTestSourceRequested = true;
    session.requestReferenceSpace('viewer')
      .then((viewerSpace) => Promise.all([
        session.requestHitTestSource({ space: viewerSpace }),
        session.requestHitTestSourceForTransientInput ? session.requestHitTestSourceForTransientInput({ profile: 'generic-touchscreen' }) : null
      ]))
      .then(([viewerSource, touchSource]) => {
        hitTestSource = viewerSource;
        touchHitSource = touchSource;
      })
      .catch(() => { hitTestSourceRequested = false; });
  }

  let usedTouch = false;
  if (touchHitSource && frame.getHitTestResultsForTransientInput) {
    const transients = frame.getHitTestResultsForTransientInput(touchHitSource);
    for (let i = 0; i < transients.length; i++) {
      const hit = transients[i].results?.[0];
      if (!hit) continue;
      const pose = hit.getPose(referenceSpace);
      if (!pose) continue;
      reticle.matrix.fromArray(pose.transform.matrix);
      reticle.visible = true;
      commitARPlacement(reticle.matrix, true);
      usedTouch = true;
      break;
    }
  }

  if (hitTestSource) {
    const hits = frame.getHitTestResults(hitTestSource);
    if (hits.length) {
      const pose = hits[0].getPose(referenceSpace);
      if (pose) {
        if (!usedTouch) {
          reticle.matrix.fromArray(pose.transform.matrix);
          reticle.visible = !arPlaced;
        }
        const y = pose.transform.position.y;
        if (arLastHitY == null || Math.abs(y - arLastHitY) < 0.08) arHitStable += 1;
        else arHitStable = 0;
        arLastHitY = y;
        if (!arPlaced && arHitStable >= 10) commitARPlacement(reticle.matrix, false);
      }
    } else if (!arPlaced) {
      reticle.visible = false;
      arHitStable = 0;
    }
  }
}
function onAREnd() {
  xrSession = null; hitTestSource = null; touchHitSource = null; hitTestSourceRequested = false;
  reticle.visible = false;
  arPlaced = false;
  arHitStable = 0;
  arLastHitY = null;
  setARPresentation(false);
  if (contactShadow) contactShadow.visible = false;
  if (hemiLight) hemiLight.visible = true;
  if (keyLight) keyLight.visible = true;
  if (fillLight) fillLight.visible = true;
  if (ambLight) ambLight.visible = true;
  scene.environment = studioEnv;
  root.visible = true; root.position.set(0, 0, 0); root.rotation.set(0, 0, 0); root.quaternion.identity();
  renderer.setPixelRatio(DESKTOP_DPR);
  document.body.classList.remove('is-ar');
  $('#arOverlay')?.classList.add('hidden');
  resize();
}
function showARHelp(message) { setText('#arLinkBox', `${message}\n\n${location.href}`); openModal('#arHelpModal'); }

function encodeShare(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}
function decodeShare(encoded) {
  let s = encoded.replaceAll('-', '+').replaceAll('_', '/');
  while (s.length % 4) s += '=';
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

function exportConfig() {
  return {
    product: {
      manufacturer: product.manufacturer,
      name: product.productName,
      familyName: bimIdentity().familyName,
      familyCategory: bimIdentity().familyCategory
    },
    configuration: { ...config, logoData: config.logoData ? '[embedded image omitted from export]' : null },
    bim: familySpec(),
    generatedAt: new Date().toISOString()
  };
}

function slug(value) {
  return String(value || 'family').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function bimIdentity() {
  const sku = config.computed?.sku || `${product.skuPrefix}-B7021-L9004`;
  return {
    familyName: product.familyName || `${slug(product.manufacturer)}_${slug(product.productName)}`,
    familyCategory: product.familyCategory || 'Specialty Equipment',
    typeName: sku,
    omniClass: product.omniClass || '23.27.19.14',
    masterFormat: product.masterFormat || '32 33 00',
    assemblyCode: product.assemblyCode || 'G2040',
    ifcClass: product.ifcClass || 'IfcFurniture',
    keynote: product.keynote || '32 33 00.A',
    productUrl: product.productUrl || '',
    lod: product.lod || '350',
    hostMethod: product.hostMethod || 'Level'
  };
}

function familySpec() {
  const bim = bimIdentity();
  return {
    schema: 'equipxr-revit-family-v1',
    family: {
      name: bim.familyName,
      category: bim.familyCategory,
      host: bim.hostMethod,
      template: 'Metric Generic Model.rft',
      sharedParameterFile: `${bim.familyName}_SharedParams.txt`,
      typeCatalog: `${bim.familyName}.txt`
    },
    type: {
      name: bim.typeName,
      manufacturer: product.manufacturer,
      model: product.productName,
      url: bim.productUrl,
      omniClass: bim.omniClass,
      masterFormat: bim.masterFormat,
      assemblyCode: bim.assemblyCode,
      keynote: bim.keynote,
      ifcExportAs: bim.ifcClass,
      lod: bim.lod,
      parameters: {
        Width_mm: product.width,
        Depth_mm: product.depth,
        Height_mm: product.height,
        Volume_L: 240,
        EQX_SKU: bim.typeName,
        EQX_BodyRAL: RALS[config.body].label,
        EQX_LidRAL: RALS[config.lid].label,
        EQX_Weight_kg: 14
      }
    },
    connectors: [],
    geometry: {
      units: 'meters',
      source: glbLoaded ? 'glb' : 'procedural-240L-bin',
      namedMeshes: ['BODY', 'LID', 'LOGO_PLATE'],
      productionSource: 'glb named meshes mapped to family solids'
    }
  };
}

function catalogCell(value) {
  return String(value ?? '').replaceAll('\t', ' ').replaceAll('\n', ' ');
}

function downloadTypeCatalog() {
  const bim = bimIdentity();
  const header = [
    '',
    'Manufacturer##OTHER##',
    'Model##OTHER##',
    'Type Mark##OTHER##',
    'URL##OTHER##',
    'Description##OTHER##',
    'OmniClass Number##OTHER##',
    'Assembly Code##OTHER##',
    'Keynote##OTHER##',
    'Width##LENGTH##MILLIMETERS',
    'Depth##LENGTH##MILLIMETERS',
    'Height##LENGTH##MILLIMETERS',
    'EQX_SKU##OTHER##',
    'EQX_BodyRAL##OTHER##',
    'EQX_LidRAL##OTHER##',
    'EQX_Volume_L##NUMBER##',
    'EQX_Weight_kg##NUMBER##'
  ].join('\t');
  const row = [
    bim.typeName,
    product.manufacturer,
    product.productName,
    bim.typeName,
    bim.productUrl,
    `240 L EN 840 waste bin ${RALS[config.body].label} body / ${RALS[config.lid].label} lid`,
    bim.omniClass,
    bim.assemblyCode,
    bim.keynote,
    product.width,
    product.depth,
    product.height,
    bim.typeName,
    RALS[config.body].label,
    RALS[config.lid].label,
    240,
    14
  ].map(catalogCell).join('\t');
  downloadBlob(`${header}\n${row}\n`, `${bim.familyName}.txt`, 'text/plain;charset=utf-8');
  track('bim_download', { format: 'type_catalog', sku: bim.typeName });
  toast('Revit type catalog downloaded');
}

function downloadSharedParameters() {
  const bim = bimIdentity();
  const lines = [
    '# This is a Revit shared parameter file.',
    '# Do not edit manually.',
    '*META\tVERSION\tMINVERSION',
    'META\t2\t1',
    '*GROUP\tID\tNAME',
    'GROUP\t1\tIdentity Data',
    'GROUP\t2\tEquipXR Manufacturer',
    '*PARAM\tGUID\tNAME\tDATATYPE\tDATACATEGORY\tGROUP\tVISIBLE\tDESCRIPTION\tUSERMODIFIABLE',
    ...SHARED_PARAMS.map((p) => `PARAM\t${p[0]}\t${p[1]}\t${p[2]}\t\t2\t1\t${p[3]}\t1`)
  ];
  downloadBlob(lines.join('\n') + '\n', `${bim.familyName}_SharedParams.txt`, 'text/plain;charset=utf-8');
  track('bim_download', { format: 'shared_parameters', sku: bim.typeName });
  toast('Shared parameter file downloaded');
}
function saveConfiguration() {
  const list = JSON.parse(localStorage.getItem('equipxr-saved') || '[]');
  const saved = { id: `CFG-${Date.now()}`, name: `${config.computed.sku} · ${new Date().toLocaleString()}`, config: { ...config, logoData: null } };
  list.unshift(saved);
  localStorage.setItem('equipxr-saved', JSON.stringify(list.slice(0, 12)));
  toast('Configuration saved locally');
  renderSavedList();
  openModal('#savedModal');
}
function renderSavedList() {
  const list = JSON.parse(localStorage.getItem('equipxr-saved') || '[]');
  const host = $('#savedList');
  if (!host) return;
  host.innerHTML = list.length ? '' : '<p style="color:#64748b">No saved configurations yet.</p>';
  list.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'option-row';
    row.innerHTML = `<div><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.id)}</small></div><button class="btn">Load</button>`;
    row.querySelector('button').onclick = () => {
      config = { ...config, ...item.config };
      updateBrandPlaque();
      updateAll();
      closeModal('#savedModal');
      toast('Configuration loaded');
    };
    host.appendChild(row);
  });
}
async function shareConfiguration() {
  const payload = { ...config, logoData: null, computed: undefined };
  const url = new URL(location.href);
  url.searchParams.set('c', encodeShare(payload));
  url.hash = '';
  const shareData = { title: `${product.productName} configuration`, text: `Configured ${config.computed.sku}`, url: url.toString() };
  try {
    if (navigator.share) await navigator.share(shareData);
    else { await navigator.clipboard.writeText(url.toString()); toast('Share link copied'); }
    track('share', { sku: config.computed.sku });
  } catch {}
}
function restoreSharedConfig() {
  const params = new URL(location.href).searchParams;
  const body = params.get('body');
  const lid = params.get('lid');
  if (body && RALS[body]) config.body = body;
  if (lid && RALS[lid]) config.lid = lid;
  const encoded = params.get('c');
  if (!encoded) return;
  try { config = { ...config, ...decodeShare(encoded) }; } catch {}
}

function configViewUrl() {
  const url = new URL(location.origin + location.pathname);
  url.search = '';
  url.searchParams.set('body', config.body);
  url.searchParams.set('lid', config.lid);
  return url.toString();
}

function localConfigCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return code;
}

async function saveConfigCode() {
  const viewUrl = configViewUrl();
  try {
    const res = await fetch('/api/codes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: config.body, lid: config.lid })
    });
    if (res.ok) {
      const saved = await res.json();
      return { code: saved.code || localConfigCode(), url: saved.url || viewUrl };
    }
  } catch {}
  return { code: localConfigCode(), url: viewUrl };
}

async function restoreCodeConfig() {
  const code = new URL(location.href).searchParams.get('cfg');
  if (!code) return;
  try {
    const res = await fetch(`/api/codes/${encodeURIComponent(code)}`, { cache: 'no-store' });
    if (!res.ok) return;
    const saved = await res.json();
    if (saved?.body) config.body = saved.body;
    if (saved?.lid) config.lid = saved.lid;
  } catch {}
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function composePdfPage(code, viewUrl, shotUrl) {
  const W = 1240, H = 1754;
  const page = document.createElement('canvas');
  page.width = W;
  page.height = H;
  const ctx = page.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = product.accent || '#c1121c';
  ctx.fillRect(0, 0, W, 10);

  const date = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  ctx.fillStyle = '#111';
  ctx.font = '600 18px Inter, Arial, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(date, W - 64, 52);
  ctx.fillText(CONTACT_EMAIL, W - 64, 76);
  ctx.fillText(CONTACT_PHONE, W - 64, 100);

  ctx.textAlign = 'left';
  ctx.font = '800 48px Inter, Arial, sans-serif';
  ctx.fillText(product.productName || '240 L waste bin', 64, 78);
  ctx.font = '600 18px Inter, Arial, sans-serif';
  ctx.fillStyle = '#c1121c';
  ctx.fillText(AD_LINE, 64, 112);
  ctx.fillStyle = '#111';

  const shot = await loadImage(shotUrl);
  const maxW = 980, maxH = 980;
  const scale = Math.min(maxW / shot.width, maxH / shot.height);
  const dw = shot.width * scale, dh = shot.height * scale;
  ctx.drawImage(shot, (W - dw) / 2, 180, dw, dh);

  const body = RALS[config.body] || RALS.ral7021;
  const lid = RALS[config.lid] || RALS.ral9004;
  const infoY = 180 + dh + 48;
  ctx.fillStyle = `#${body.color.toString(16).padStart(6, '0')}`;
  ctx.fillRect(64, infoY, 36, 36);
  ctx.strokeStyle = '#111';
  ctx.strokeRect(64.5, infoY + 0.5, 35, 35);
  ctx.fillStyle = '#111';
  ctx.font = '600 22px Inter, Arial, sans-serif';
  ctx.fillText(`Bodycolor ${body.label}`, 116, infoY + 26);
  ctx.fillStyle = `#${lid.color.toString(16).padStart(6, '0')}`;
  ctx.fillRect(420, infoY, 36, 36);
  ctx.strokeRect(420.5, infoY + 0.5, 35, 35);
  ctx.fillStyle = '#111';
  ctx.fillText(`Lid colour ${lid.label}`, 472, infoY + 26);

  ctx.fillStyle = '#eef1f4';
  ctx.fillRect(0, H - 320, W, 320);
  try {
    const { drawQr } = await import(new URL('./vendor/qr-matrix.js', import.meta.url).href);
    drawQr(ctx, viewUrl, 64, H - 292, 196);
  } catch (err) {
    console.warn('[EquipXR] QR failed', err);
    ctx.fillStyle = '#fff';
    ctx.fillRect(64, H - 292, 196, 196);
    ctx.strokeStyle = '#111';
    ctx.strokeRect(64.5, H - 291.5, 195, 195);
    ctx.fillStyle = '#111';
    ctx.font = '700 18px Inter, Arial, sans-serif';
    ctx.fillText(code, 84, H - 190);
  }
  ctx.fillStyle = '#111';
  ctx.font = '800 28px Inter, Arial, sans-serif';
  ctx.fillText(`Configuration Code: ${code}`, 292, H - 210);
  ctx.font = '500 16px Inter, Arial, sans-serif';
  ctx.fillStyle = '#334155';
  wrapText(ctx, viewUrl, 292, H - 172, W - 360, 22);
  ctx.fillStyle = '#64748b';
  ctx.font = '600 14px Inter, Arial, sans-serif';
  ctx.fillText('Scan the code to open this configuration again', 292, H - 110);
  ctx.fillText('Innovio Solutions', 64, H - 36);
  ctx.textAlign = 'right';
  ctx.fillText('Page 1', W - 64, H - 36);
  ctx.textAlign = 'left';

  return page;
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  const words = String(text).split('');
  let line = '';
  let yy = y;
  for (const ch of words) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxW) {
      ctx.fillText(line, x, yy);
      line = ch;
      yy += lineH;
    } else line = test;
  }
  if (line) ctx.fillText(line, x, yy);
}

function jpegToPdf(jpeg, imgW, imgH) {
  const pageW = 595.28, pageH = 841.89;
  const encoder = new TextEncoder();
  const parts = [];
  let offset = 0;
  const offsets = [0];
  const add = (data) => {
    const bytes = typeof data === 'string' ? encoder.encode(data) : data;
    parts.push(bytes);
    offset += bytes.length;
  };
  add('%PDF-1.4\n');
  const obj = (n, body, stream) => {
    offsets[n] = offset;
    add(`${n} 0 obj\n${body}`);
    if (stream) {
      add('stream\n');
      add(stream);
      add('endstream\n');
    }
    add('endobj\n');
  };
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>\n');
  obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n');
  obj(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\n`);
  obj(4, `<< /Type /XObject /Subtype /Image /Width ${imgW} /Height ${imgH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\n`, jpeg);
  const content = `q ${pageW} 0 0 ${pageH} 0 0 cm /Im0 Do Q`;
  obj(5, `<< /Length ${content.length} >>\n`, encoder.encode(content));
  const xrefPos = offset;
  add(`xref\n0 6\n0000000000 65535 f \n`);
  for (let i = 1; i <= 5; i++) add(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  add(`trailer << /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`);
  const total = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(total);
  let p = 0;
  parts.forEach((chunk) => { out.set(chunk, p); p += chunk.length; });
  return out;
}

function captureViewerJpeg() {
  hideOrbitHint();
  if (!renderer) throw new Error('3D view is not ready');
  const prevBg = scene.background;
  const gridWas = grid?.visible;
  scene.background = new THREE.Color(0xffffff);
  renderer.setClearColor(0xffffff, 1);
  if (grid) grid.visible = false;
  renderer.render(scene, camera);
  let data = renderer.domElement.toDataURL('image/jpeg', 0.92);
  if (!data || !data.startsWith('data:image')) data = renderer.domElement.toDataURL('image/png');
  scene.background = prevBg;
  renderer.setClearColor(0x000000, 0);
  if (grid) grid.visible = gridWas;
  markDirty();
  if (!data || data.length < 100) throw new Error('Could not capture the 3D view');
  return data;
}

async function canvasToJpeg(page) {
  const blob = await new Promise((resolve) => page.toBlob(resolve, 'image/jpeg', 0.9));
  if (blob) return new Uint8Array(await blob.arrayBuffer());
  const dataUrl = page.toDataURL('image/jpeg', 0.9);
  const binary = atob(dataUrl.split(',')[1] || '');
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

async function downloadConfigurationPdf() {
  try {
    toast('Preparing PDF…');
    const saved = await saveConfigCode();
    const viewUrl = configViewUrl();
    const shot = captureViewerJpeg();
    const page = await composePdfPage(saved.code, viewUrl, shot);
    const jpeg = await canvasToJpeg(page);
    const pdf = jpegToPdf(jpeg, page.width, page.height);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    a.download = `${slug(product.productName)}_${saved.code}.pdf`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    toast(`PDF saved · code ${saved.code}`);
    track('pdf_download', { sku: config.computed?.sku, code: saved.code });
  } catch (err) {
    console.error(err);
    toast(err?.message || 'Could not create the PDF');
  }
}
async function submitQuote(e) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const body = Object.fromEntries(fd.entries());
  body.configuration = exportConfig();
  const bodyRal = RALS[config.body] || RALS.ral7021;
  const lidRal = RALS[config.lid] || RALS.ral9004;
  const sku = config.computed?.sku || '';
  const subject = `Offer request: ${product.productName} ${sku}`;
  const mailText = [
    `New configuration request`,
    ``,
    `Name: ${body.name || ''}`,
    `Company: ${body.company || ''}`,
    `Email: ${body.email || ''}`,
    `Phone: ${body.phone || ''}`,
    ``,
    `Product: ${product.productName}`,
    `SKU: ${sku}`,
    `Body colour: ${bodyRal.label}`,
    `Lid colour: ${lidRal.label}`,
    `Link: ${configViewUrl()}`,
    ``,
    `Notes:`,
    body.notes || '(none)'
  ].join('\n');
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailText)}`;
  try {
    const res = await fetch('/api/quotes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!res.ok) throw new Error('Failed');
    const quote = await res.json();
    closeModal('#quoteModal');
    e.currentTarget.reset();
    window.location.href = mailto;
    toast(`Offer request ${quote.id} — opening email to ${CONTACT_EMAIL}`);
    track('quote_submit', { quoteId: quote.id, sku: config.computed.sku });
  } catch {
    window.location.href = mailto;
    toast(`Opening email to ${CONTACT_EMAIL}`);
  }
}
function downloadCSV() {
  const bim = bimIdentity();
  const rows = [
    ['Field', 'Value'],
    ['Family', bim.familyName],
    ['Category', bim.familyCategory],
    ['Type', bim.typeName],
    ['Volume L', 240],
    ['Width mm', product.width],
    ['Depth mm', product.depth],
    ['Height mm', product.height],
    ['Body', RALS[config.body].label],
    ['Lid', RALS[config.lid].label],
    ['Weight kg', 14],
    ['Price', config.computed.price]
  ];
  downloadBlob(rows.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n'), `${bim.typeName}-schedule.csv`, 'text/csv');
  track('bim_download', { format: 'csv', sku: bim.typeName });
}
function downloadDXF() {
  const w = product.width, d = product.depth;
  const dxf = `0\nSECTION\n2\nHEADER\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n${line(0, 0, w, 0)}${line(w, 0, w, d)}${line(w, d, 0, d)}${line(0, d, 0, 0)}0\nTEXT\n8\nEQUIPMENT\n10\n${w / 2}\n20\n${d / 2}\n40\n40\n1\n${config.computed.sku}\n0\nENDSEC\n0\nEOF\n`;
  downloadBlob(dxf, `${config.computed.sku}-footprint.dxf`, 'application/dxf');
  track('spec_download', { format: 'dxf' });
}
function line(x1, y1, x2, y2) { return `0\nLINE\n8\nEQUIPMENT\n10\n${x1}\n20\n${y1}\n11\n${x2}\n21\n${y2}\n`; }
function downloadBlob(content, name, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function openModal(sel) { $(sel)?.classList.remove('hidden'); }
function closeModal(sel) { $(sel)?.classList.add('hidden'); }
function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.add('hidden'), 2300);
}
function escapeHTML(s) {
  return String(s).replace(/[&<>'"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}
function track(type, payload = {}) {
  fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, payload }) }).catch(() => {});
}

init();
