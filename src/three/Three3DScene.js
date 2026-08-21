import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';
import { RALS } from '../state/config.js';

const BIN_HEIGHT_M = 1.07;
const _hitPos = new THREE.Vector3();

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
  constructor(canvas, { modelUrl, bakedShadows = true, onArState, onArScale } = {}) {
    this.canvas = canvas;
    this.modelUrl = modelUrl;
    this.bakedShadows = bakedShadows;
    this.onArState = onArState || (() => {});
    this.onArScale = onArScale || (() => {});
    this.model = null;
    this.orbit = { theta: -0.55, phi: 1.12, radius: 2.35 };
    this.target = { ...this.orbit };
    this.lookAt = new THREE.Vector3(0, 0.52, 0);
    this.pointers = new Map();
    this.pinchStart = 0;
    this.dirty = true;
    this.xrSession = null;
    this.hitTestSource = null;
    this.arPlaced = false;
    this.arMoving = false;
    this.arHitStable = 0;
    this.arLastHitY = null;
    this.arPointers = new Map();
    this.arPinchStart = 0;
    this.arPinchScale0 = 100;
    this.arTwistStart = 0;
    this.arTwistYaw0 = 0;
    this.scalePercent = 100;
    this.fitScale = 1;
    this.worldScale = 1;
    this.nativeHeight = 1;
    this.studioEnv = null;
    this.xrLight = null;
    this.overlay = null;
    this._arMode = 'idle';

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
    this.renderer.xr.setReferenceSpaceType('local');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.05, 100);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.studioEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.studioEnv;
    pmrem.dispose();

    const hemi = new THREE.HemisphereLight(0xffffff, 0xb8c0c8, 1.35);
    this.hemi = hemi;
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

    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.07, 0.09, 36).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.92, transparent: true })
    );
    this.reticle.matrixAutoUpdate = false;
    this.reticle.visible = false;
    this.scene.add(this.reticle);

    this.contactShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 36),
      new THREE.MeshBasicMaterial({ color: 0x111111, opacity: 0.28, transparent: true, depthWrite: false })
    );
    this.contactShadow.rotation.x = -Math.PI / 2;
    this.contactShadow.position.y = 0.002;
    this.contactShadow.visible = false;
    this.root.add(this.contactShadow);

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onARPointerDown = this.onARPointerDown.bind(this);
    this.onARPointerMove = this.onARPointerMove.bind(this);
    this.onARPointerUp = this.onARPointerUp.bind(this);
    canvas.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.applyOrbit(true);
    this.renderer.setAnimationLoop((time, frame) => this.tick(time, frame));
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
    model.scale.set(1, 1, 1);
    model.position.set(0, 0, 0);
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    this.nativeHeight = Math.max(0.001, size.y);
    model.position.y -= box.min.y;
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    this.fitScale = 1.05 / maxDim;
    this.worldScale = BIN_HEIGHT_M / this.nativeHeight;
    this.applyCurrentScale();
  }

  applyCurrentScale() {
    const factor = (this.xrSession ? this.worldScale : this.fitScale) * (this.scalePercent / 100);
    this.root.scale.setScalar(factor);
    this.dirty = true;
  }

  setScalePercent(percent) {
    this.scalePercent = percent;
    this.applyCurrentScale();
    if (this.xrSession && this.arPlaced) this.onArScale(percent);
  }

  setArMode(mode) {
    if (this._arMode === mode) return;
    this._arMode = mode;
    this.onArState(mode);
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

  tick(_time, frame) {
    if (this.xrSession) {
      this.updateAR(frame);
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

  updateAR(frame) {
    if (!frame || !this.hitTestSource) return;
    const space = this.renderer.xr.getReferenceSpace();
    if (!space) return;
    const hits = frame.getHitTestResults(this.hitTestSource);
    if (!hits.length) {
      this.arHitStable = 0;
      if (!this.arPlaced) {
        this.reticle.visible = false;
        this.setArMode('scanning');
      }
      return;
    }
    const pose = hits[0].getPose(space);
    if (!pose) return;
    const y = pose.transform.position.y;
    if (this.arLastHitY != null && Math.abs(y - this.arLastHitY) < 0.025) this.arHitStable += 1;
    else this.arHitStable = 1;
    this.arLastHitY = y;
    const stable = this.arHitStable >= 8;
    this.reticle.matrix.fromArray(pose.transform.matrix);
    this.reticle.visible = !this.arPlaced && stable;
    if (!this.arPlaced && stable) this.setArMode('placing');
  }

  placeAtReticle() {
    if (!this.reticle.visible) return;
    _hitPos.setFromMatrixPosition(this.reticle.matrix);
    this.root.position.copy(_hitPos);
    this.root.rotation.set(0, this.root.rotation.y, 0);
    this.root.visible = true;
    this.contactShadow.visible = true;
    this.arPlaced = true;
    this.reticle.visible = false;
  }

  nudgeOnFloor(dx, dy) {
    const cam = this.renderer.xr.getCamera();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(cam.quaternion);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    right.y = 0;
    fwd.y = 0;
    if (right.lengthSq() < 1e-6 || fwd.lengthSq() < 1e-6) return;
    right.normalize();
    fwd.normalize();
    const s = 0.0016;
    this.root.position.addScaledVector(right, dx * s);
    this.root.position.addScaledVector(fwd, -dy * s);
  }

  onARPointerDown(e) {
    if (!this.xrSession || e.target.closest('button, input, label')) return;
    e.preventDefault();
    this.overlay?.setPointerCapture?.(e.pointerId);
    this.arPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.arPointers.size === 2) {
      const pts = [...this.arPointers.values()];
      this.arPinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      this.arPinchScale0 = this.scalePercent;
      this.arTwistStart = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
      this.arTwistYaw0 = this.root.rotation.y;
      this.arMoving = false;
    } else if (this.arPlaced) {
      this.arMoving = true;
      this.setArMode('moving');
    }
  }

  onARPointerMove(e) {
    if (!this.xrSession || !this.arPointers.has(e.pointerId)) return;
    const prev = this.arPointers.get(e.pointerId);
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    this.arPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.arPointers.size === 2 && this.arPlaced) {
      const pts = [...this.arPointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const twist = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
      if (this.arPinchStart > 8) {
        const next = THREE.MathUtils.clamp(Math.round(this.arPinchScale0 * (dist / this.arPinchStart)), 50, 200);
        this.setScalePercent(next);
        this.setArMode('scaling');
      }
      this.root.rotation.y = this.arTwistYaw0 + (twist - this.arTwistStart);
      return;
    }
    if (this.arPlaced && this.arMoving) this.nudgeOnFloor(dx, dy);
  }

  onARPointerUp(e) {
    if (!this.xrSession) return;
    const wasOne = this.arPointers.size === 1;
    this.arPointers.delete(e.pointerId);
    if (wasOne && !this.arPlaced && this.reticle.visible) {
      this.placeAtReticle();
      this.setArMode('placed');
    } else if (this.arPlaced && this.arPointers.size === 0) {
      this.arMoving = false;
      this.reticle.visible = false;
      this.setArMode('placed');
    }
    this.arPinchStart = 0;
  }

  onResize() {
    if (this.xrSession) return;
    const rect = this.canvas.parentElement?.getBoundingClientRect() || this.canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.dirty = true;
  }

  onPointerDown(e) {
    if (this.xrSession) return;
    this.canvas.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      this.pinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  }

  onPointerMove(e) {
    if (this.xrSession || !this.pointers.has(e.pointerId)) return;
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
    if (this.xrSession) return;
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

  async exportUSDZ() {
    if (!this.model) throw new Error('3D model is still loading');
    const wrapper = new THREE.Group();
    const clone = this.model.clone(true);
    clone.traverse((obj) => {
      if (obj.isMesh && obj.material) obj.material = obj.material.clone();
    });
    wrapper.add(clone);
    wrapper.scale.setScalar(this.worldScale * (this.scalePercent / 100));
    const exporter = new USDZExporter();
    return exporter.parseAsync(wrapper, { quickLookCompatible: true, maxTextureSize: 1024 });
  }

  async enterAR({ overlay } = {}) {
    if (!navigator.xr) throw new Error('WebXR is not available in this browser');
    this.overlay = overlay || null;
    const options = {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay', 'local-floor', 'light-estimation'],
      ...(overlay ? { domOverlay: { root: overlay } } : {})
    };
    this.setArMode('launching');
    try {
      this.xrSession = await navigator.xr.requestSession('immersive-ar', options);
    } catch {
      this.xrSession = await navigator.xr.requestSession('immersive-ar', {
        optionalFeatures: ['hit-test', 'dom-overlay', 'local-floor', 'light-estimation'],
        ...(overlay ? { domOverlay: { root: overlay } } : {})
      });
    }
    this.renderer.setPixelRatio(1);
    await this.renderer.xr.setSession(this.xrSession);
    this.arPlaced = false;
    this.arMoving = false;
    this.arHitStable = 0;
    this.arLastHitY = null;
    this.arPointers.clear();
    this.root.rotation.set(0, 0, 0);
    this.root.visible = false;
    this.ground.visible = false;
    this.contactShadow.visible = false;
    this.reticle.visible = false;
    this.applyCurrentScale();
    document.body.classList.add('is-ar');
    this.setArMode('scanning');

    try {
      this.xrLight = new XREstimatedLight(this.renderer);
      this.xrLight.addEventListener('estimationstart', () => {
        this.scene.add(this.xrLight);
        if (this.xrLight.environment) this.scene.environment = this.xrLight.environment;
        this.keyLight.visible = false;
        this.hemi.visible = false;
      });
      this.xrLight.addEventListener('estimationend', () => {
        this.scene.remove(this.xrLight);
        this.scene.environment = this.studioEnv;
        this.keyLight.visible = true;
        this.hemi.visible = true;
      });
    } catch {
      this.xrLight = null;
    }

    try {
      const viewerSpace = await this.xrSession.requestReferenceSpace('viewer');
      this.hitTestSource = await this.xrSession.requestHitTestSource({ space: viewerSpace });
    } catch {
      this.hitTestSource = null;
    }
    this.xrSession.addEventListener('end', () => this.onAREnd());
    if (this.overlay) {
      this.overlay.addEventListener('pointerdown', this.onARPointerDown);
      this.overlay.addEventListener('pointermove', this.onARPointerMove);
      this.overlay.addEventListener('pointerup', this.onARPointerUp);
      this.overlay.addEventListener('pointercancel', this.onARPointerUp);
    }
  }

  async exitAR() {
    if (this.xrSession) {
      try { await this.xrSession.end(); } catch { /* already ending */ }
    }
  }

  onAREnd() {
    if (this.overlay) {
      this.overlay.removeEventListener('pointerdown', this.onARPointerDown);
      this.overlay.removeEventListener('pointermove', this.onARPointerMove);
      this.overlay.removeEventListener('pointerup', this.onARPointerUp);
      this.overlay.removeEventListener('pointercancel', this.onARPointerUp);
    }
    this.xrSession = null;
    this.hitTestSource = null;
    this.arPlaced = false;
    this.arMoving = false;
    this.arPointers.clear();
    this.reticle.visible = false;
    this.contactShadow.visible = false;
    this.root.visible = true;
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, 0, 0);
    this.ground.visible = true;
    this.keyLight.visible = true;
    this.hemi.visible = true;
    this.scene.environment = this.studioEnv;
    if (this.xrLight) this.scene.remove(this.xrLight);
    document.body.classList.remove('is-ar');
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
    this.applyCurrentScale();
    this.onResize();
    this.setArMode('idle');
    this.dirty = true;
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
