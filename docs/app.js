import { onStart, NeedleXRSession, WebXR, addComponent } from '@needle-tools/engine';
import { Color } from 'three';

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

const AD_LINE = 'Transform your 3D models into configurable views for your clients';
const CONTACT_EMAIL = 'mazenbanat@outlook.com';
const CONTACT_PHONE = '+961 81931045';
const MODEL_URL = new URL('./assets/model.glb?v=2', import.meta.url).href;

let product = {
  manufacturer: 'Innovio Solutions', productName: '240 L waste bin', skuPrefix: 'CL240',
  basePrice: 185, currency: 'USD', width: 580, depth: 735, height: 1070, accent: '#c1121c',
  familyName: 'CityLine_240_WasteBin', familyCategory: 'Specialty Equipment', omniClass: '23.27.19.14',
  masterFormat: '32 33 00', assemblyCode: 'G2040', ifcClass: 'IfcFurniture', keynote: '32 33 00.A',
  productUrl: 'https://example.com/cityline-240', lod: '350', hostMethod: 'Level'
};
let config = { body: 'ral7021', lid: 'ral9004', label: 'YOUR BRAND', logoData: null };
let needleCtx = null;
let moneyFmt;

onStart((ctx) => {
  needleCtx = ctx;
  try { ctx.menu?.setVisible(false); } catch {}
  setupNeedleXR(ctx);
  applyColors(ctx.scene);
  hideOrbitHint();
});

async function init() {
  try {
    const res = await fetch('/api/product');
    if (res.ok) product = { ...product, ...(await res.json()) };
  } catch {}

  document.documentElement.style.setProperty('--accent', product.accent || '#c1121c');
  restoreSharedConfig();
  await restoreCodeConfig();
  bindUI();
  const viewer = $('#needleViewer');
  if (viewer) {
    viewer.setAttribute('src', MODEL_URL);
    viewer.addEventListener('loadfinished', () => {
      needleCtx = viewer.context || needleCtx;
      if (needleCtx) applyColors(needleCtx.scene);
      $('#viewerError')?.classList.add('hidden');
    });
    viewer.addEventListener('loadstart', (evt) => {
      try { evt.preventDefault?.(); } catch {}
    });
  }
  updateAll();
  track('view', { product: product.productName });
}

function setupNeedleXR(ctx) {
  if (!ctx?.scene || ctx.scene.userData.equipxrXr) return;
  ctx.scene.userData.equipxrXr = true;
  const opts = {
    createARButton: false,
    createVRButton: false,
    createQRCode: false,
    createSendToQuestButton: false,
    autoPlace: false,
    usePlacementReticle: true,
    usePlacementAdjustment: true,
    useQuicklookExport: true,
    arScale: 1
  };
  if (typeof ctx.scene.addComponent === 'function') ctx.scene.addComponent(WebXR, opts);
  else addComponent(ctx.scene, WebXR, opts);
}

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

function applyColors(root) {
  if (!root) return;
  const bodyHex = RALS[config.body]?.color ?? 0x2f3234;
  const lidHex = RALS[config.lid]?.color ?? 0x1a1a1a;
  root.traverse((obj) => {
    if (!obj.isMesh || !obj.material) return;
    const role = meshRole(obj);
    const hex = role === 'lid' ? lidHex : role === 'hardware' ? 0x1a1c1e : bodyHex;
    if (!obj.userData.shopMat) {
      const src = Array.isArray(obj.material) ? obj.material[0] : obj.material;
      obj.userData.shopMat = src.clone();
      obj.material = obj.userData.shopMat;
    }
    const mat = obj.userData.shopMat;
    if (mat.color) mat.color.setHex(hex);
    if ('metalness' in mat) mat.metalness = role === 'hardware' ? 0.15 : 0.04;
    if ('roughness' in mat) mat.roughness = role === 'hardware' ? 0.72 : 0.42;
    mat.needsUpdate = true;
  });
}

function normalizeConfig() {
  if (!RALS[config.body]) config.body = 'ral7021';
  if (!RALS[config.lid]) config.lid = 'ral9004';
}

function paintSwatches(host, selected) {
  if (!host) return;
  host.querySelectorAll('.swatch').forEach((b) => b.classList.toggle('active', b.dataset.ral === selected));
}

function money(v) {
  const currency = product.currency || 'USD';
  if (!moneyFmt || moneyFmt.resolvedOptions().currency !== currency) {
    moneyFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 });
  }
  return moneyFmt.format(v);
}

function updateAll() {
  normalizeConfig();
  applyColors(needleCtx?.scene);
  paintSwatches($('#bodyOptions'), config.body);
  paintSwatches($('#lidOptions'), config.lid);
  const sku = `${product.skuPrefix}-B${RALS[config.body].code}-L${RALS[config.lid].code}`;
  const dims = `${product.width} × ${product.depth} × ${product.height} mm`;
  const price = Number(product.basePrice) || 0;
  config.computed = { price, sku, volumeL: 240, weightKG: 14, dimensions: dims, heightMm: product.height };
  setText('#priceLabel', money(price));
  setText('#skuLabel', sku);
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
  $('#orbitHint')?.addEventListener('click', hideOrbitHint);
  $('#arBtn')?.addEventListener('click', (e) => { e.preventDefault(); startAR(); });
  $('#arRetryBtn')?.addEventListener('click', () => { closeModal('#arHelpModal'); startAR(); });
  $('#arHelpClose')?.addEventListener('click', () => closeModal('#arHelpModal'));
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

async function startAR() {
  track('ar_launch', { sku: config.computed?.sku });
  applyColors(needleCtx?.scene);
  if (!window.isSecureContext) {
    showARHelp('AR needs HTTPS. Open the GitHub Pages link in Chrome (Android) or Safari (iPhone).');
    return;
  }
  try {
    await NeedleXRSession.start('ar');
  } catch (err) {
    console.error(err);
    showARHelp('Could not start AR. Open this HTTPS page in Chrome on Android, or Safari on iPhone, then tap View in AR again.');
  }
}

function showARHelp(message) {
  setText('#arHelpCopy', message);
  setText('#arLinkBox', location.href);
  openModal('#arHelpModal');
}

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
      familyName: product.familyName
    },
    configuration: { ...config, logoData: null },
    generatedAt: new Date().toISOString()
  };
}

function slug(value) {
  return String(value || 'family').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '');
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
  for (let i = 0; i < 6; i++) code += alphabet[alphabet.length * Math.random() | 0];
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
  const ctx = needleCtx || $('#needleViewer')?.context;
  if (!ctx?.renderer || !ctx.scene || !ctx.mainCamera) throw new Error('3D view is not ready');
  const renderer = ctx.renderer;
  const prev = ctx.scene.background;
  ctx.scene.background = new Color(0xffffff);
  renderer.setClearColor(0xffffff, 1);
  renderer.render(ctx.scene, ctx.mainCamera);
  let data = renderer.domElement.toDataURL('image/jpeg', 0.92);
  if (!data || !data.startsWith('data:image')) data = renderer.domElement.toDataURL('image/png');
  ctx.scene.background = prev;
  renderer.setClearColor(0x000000, 0);
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

function openModal(sel) { $(sel)?.classList.remove('hidden'); }
function closeModal(sel) { $(sel)?.classList.add('hidden'); }
function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2400);
}
function escapeHTML(s) {
  return String(s).replace(/[&<>'"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}
function track(type, payload = {}) {
  fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, payload }) }).catch(() => {});
}

init().catch((err) => {
  console.error(err);
  $('#viewerError')?.classList.remove('hidden');
});
