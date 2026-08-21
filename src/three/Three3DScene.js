import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RALS } from '../state/config.js';

function isWheelName(name) {
  return /WHEEL|TYRE|TIRE|AXLE|BEARING|BLADE|HUB|RIM|CASTER|CASTOR/.test(String(name || '').toUpperCase());
}
function isLidName(name) {
  return /LID|COVER|HOOD/.test(String(name || '').toUpperCase());
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

export class Three3DScene {
  constructor(canvas, { modelUrl, bakedShadows = true } = {}) {
    this.canvas = canvas;
    this.modelUrl = modelUrl;
    this.bakedShadows = bakedShadows;
    this.model = null;
    this.orbit = { theta: -0.55, phi: 1.12, radius: 2.35 };
    this.target = { ...this.orbit };
    this.lookAt = new THREE.Vector3(0, 0.52, 0);
    this.pointers = new Map();
    this.pinchStart = 0;
    this.dirty = true;
    this.xrSession = null;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = !bakedShadows;
    this.renderer.xr.enabled = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.05, 100);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    const hemi = new THREE.HemisphereLight(0xffffff, 0xb8c0c8, 1.35);
    this.scene.add(hemi);
    this.keyLight = new THREE.DirectionalLight(0xffffff, 1.45);
    this.keyLight.position.set(2.4, 4.2, 2.8);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    this.keyLight.shadow.camera.near = 0.5;
    this.keyLight.shadow.camera.far = 12;
    this.keyLight.shadow.camera.left = -2.5;
    this.keyLight.shadow.camera.right = 2.5;
    this.keyLight.shadow.camera.top = 2.5;
    this.keyLight.shadow.camera.bottom = -2.5;
    this.scene.add(this.keyLight);

    this.ground = new THREE.Mesh(
      new THREE.CircleGeometry(2.4, 48),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onResize = this.onResize.bind(this);
    canvas.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.applyOrbit(true);
    this.renderer.setAnimationLoop(() => this.tick());
  }

  async load() {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(this.modelUrl);
    if (this.model) this.root.remove(this.model);
    this.model = gltf.scene;
    this.model.traverse((obj) => {
      if (!obj.isMesh) return;
      obj.castShadow = true;
      obj.receiveShadow = false;
      const src = Array.isArray(obj.material) ? obj.material[0] : obj.material;
      obj.userData.shopMat = src.clone();
      obj.material = obj.userData.shopMat;
    });
    this.sitOnGround(this.model);
    this.root.add(this.model);
    this.renderer.shadowMap.needsUpdate = true;
    this.dirty = true;
  }

  sitOnGround(model) {
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.05 / maxDim;
    model.scale.multiplyScalar(scale);
    model.updateMatrixWorld(true);
    const box2 = new THREE.Box3().setFromObject(model);
    model.position.y -= box2.min.y;
  }

  setColors(config) {
    if (!this.model) return;
    const bodyHex = RALS[config.body]?.color ?? 0x2f3234;
    const lidHex = RALS[config.lid]?.color ?? 0x1a1a1a;
    this.model.traverse((obj) => {
      if (!obj.isMesh || !obj.userData.shopMat) return;
      const role = meshRole(obj);
      const hex = role === 'lid' ? lidHex : role === 'hardware' ? 0x1a1c1e : bodyHex;
      obj.userData.shopMat.color.setHex(hex);
      if ('roughness' in obj.userData.shopMat) obj.userData.shopMat.roughness = role === 'hardware' ? 0.72 : 0.42;
      if ('metalness' in obj.userData.shopMat) obj.userData.shopMat.metalness = role === 'hardware' ? 0.12 : 0.04;
      obj.userData.shopMat.needsUpdate = true;
    });
    this.dirty = true;
  }

  applyOrbit(immediate = false) {
    const { theta, phi, radius } = immediate ? this.target : this.orbit;
    const sinPhi = Math.sin(phi);
    this.camera.position.set(
      this.lookAt.x + radius * sinPhi * Math.sin(theta),
      this.lookAt.y + radius * Math.cos(phi),
      this.lookAt.z + radius * sinPhi * Math.cos(theta)
    );
    this.camera.lookAt(this.lookAt);
  }

  tick() {
    if (this.xrSession) {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    const d = Math.abs(this.target.theta - this.orbit.theta) + Math.abs(this.target.phi - this.orbit.phi) + Math.abs(this.target.radius - this.orbit.radius);
    const moving = d > 0.0004;
    if (moving) {
      this.orbit.theta += (this.target.theta - this.orbit.theta) * 0.12;
      this.orbit.phi += (this.target.phi - this.orbit.phi) * 0.12;
      this.orbit.radius += (this.target.radius - this.orbit.radius) * 0.12;
      this.applyOrbit();
    }
    if (this.dirty || moving) {
      this.renderer.render(this.scene, this.camera);
      this.dirty = false;
    }
  }

  onResize() {
    const rect = this.canvas.parentElement?.getBoundingClientRect() || this.canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.dirty = true;
  }

  onPointerDown(e) {
    this.canvas.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      this.pinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  }

  onPointerMove(e) {
    if (!this.pointers.has(e.pointerId)) return;
    const prev = this.pointers.get(e.pointerId);
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (this.pinchStart) this.target.radius = THREE.MathUtils.clamp(this.target.radius * (this.pinchStart / dist), 1.4, 4.2);
      this.pinchStart = dist;
      return;
    }
    this.target.theta -= dx * 0.006;
    this.target.phi = THREE.MathUtils.clamp(this.target.phi - dy * 0.006, 0.2, 1.45);
  }

  onPointerUp(e) {
    this.pointers.delete(e.pointerId);
    this.pinchStart = 0;
  }

  onWheel(e) {
    e.preventDefault();
    this.target.radius = THREE.MathUtils.clamp(this.target.radius + e.deltaY * 0.002, 1.4, 4.2);
  }

  captureJpeg() {
    const prev = this.scene.background;
    this.scene.background = new THREE.Color(0xffffff);
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.render(this.scene, this.camera);
    const data = this.renderer.domElement.toDataURL('image/jpeg', 0.92);
    this.scene.background = prev;
    this.renderer.setClearColor(0x000000, 0);
    this.dirty = true;
    return data;
  }

  async enterAR() {
    if (!navigator.xr || !window.isSecureContext) throw new Error('AR needs HTTPS in Chrome or Safari');
    const supported = await navigator.xr.isSessionSupported('immersive-ar');
    if (!supported) throw new Error('This browser does not support WebXR AR');
    this.xrSession = await navigator.xr.requestSession('immersive-ar', {
      optionalFeatures: ['hit-test', 'local-floor']
    });
    await this.renderer.xr.setSession(this.xrSession);
    this.ground.visible = false;
    document.body.classList.add('is-ar');
    this.xrSession.addEventListener('end', () => {
      this.xrSession = null;
      this.ground.visible = true;
      document.body.classList.remove('is-ar');
      this.dirty = true;
    });
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    this.canvas.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }
}
