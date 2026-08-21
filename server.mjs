import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'docs');
const PUBLIC_ROOT = PUBLIC_DIR.endsWith(path.sep) ? PUBLIC_DIR : PUBLIC_DIR + path.sep;
const DB_FILE = path.join(__dirname, 'data', 'database.json');
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || '0.0.0.0';
const MAX_BODY_BYTES = 256 * 1024;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream'
};

let dbChain = Promise.resolve();

function readDB() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function mutateDB(fn) {
  const job = dbChain.then(() => {
    const db = readDB();
    const result = fn(db);
    writeDB(db);
    return result;
  });
  dbChain = job.catch((err) => {
    console.error(err);
  });
  return job;
}

function sendJSON(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  });
  res.end(JSON.stringify(payload));
}

class PayloadTooLargeError extends Error {
  constructor() {
    super('Payload too large');
    this.status = 413;
  }
}

async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      req.destroy();
      throw new PayloadTooLargeError();
    }
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

function sanitizeText(value, max = 300) {
  return String(value ?? '').replace(/[<>]/g, '').trim().slice(0, max);
}

function sanitizeAccent(value, fallback) {
  const s = String(value ?? '').trim();
  return /^#[0-9A-Fa-f]{6}$/.test(s) ? s : fallback;
}

function sanitizePayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return {};
  const out = {};
  for (const [rawKey, value] of Object.entries(payload).slice(0, 16)) {
    const key = sanitizeText(rawKey, 40);
    if (!key) continue;
    if (typeof value === 'string') out[key] = sanitizeText(value, 200);
    else if (typeof value === 'number' && Number.isFinite(value)) out[key] = value;
    else if (typeof value === 'boolean') out[key] = value;
  }
  return out;
}

function slimConfiguration(cfg) {
  try {
    const clone = JSON.parse(JSON.stringify(cfg || {}));
    if (clone.configuration && typeof clone.configuration === 'object') {
      clone.configuration.logoData = null;
    }
    if ('logoData' in clone) clone.logoData = null;
    const encoded = JSON.stringify(clone);
    if (encoded.length > 16000) return { omitted: true };
    return clone;
  } catch {
    return {};
  }
}

function nextQuoteId(quotes) {
  let max = 0;
  for (const quote of quotes) {
    const n = Number(String(quote.id || '').replace(/^Q-/i, ''));
    if (Number.isFinite(n) && n > max) max = n;
  }
  return `Q-${String(max + 1).padStart(4, '0')}`;
}

function handleReadError(res, err) {
  if (err instanceof PayloadTooLargeError || err.status === 413) {
    return sendJSON(res, 413, { error: 'Payload too large' });
  }
  console.error(err);
  return sendJSON(res, 400, { error: 'Invalid request' });
}

function apiHandler(req, res, url) {
  if (url.pathname.startsWith('/frontendapi/')) {
    url.pathname = url.pathname.replace('/frontendapi/', '/api/');
  }
  if (req.method === 'OPTIONS') return sendJSON(res, 204, {});

  if (req.method === 'GET' && url.pathname === '/api/health') {
    return sendJSON(res, 200, { ok: true, service: 'EquipXR Demo API', now: new Date().toISOString() });
  }

  if (req.method === 'GET' && url.pathname === '/api/product') {
    const db = readDB();
    return sendJSON(res, 200, db.product);
  }

  if (req.method === 'GET' && url.pathname === '/api/quotes') {
    const db = readDB();
    return sendJSON(res, 200, db.quotes.slice().reverse());
  }

  if (req.method === 'GET' && url.pathname === '/api/analytics') {
    const db = readDB();
    const counts = db.events.reduce((acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    }, {});
    return sendJSON(res, 200, {
      totalEvents: db.events.length,
      views: counts.view || 0,
      arLaunches: counts.ar_launch || 0,
      shares: counts.share || 0,
      specDownloads: counts.spec_download || 0,
      bimDownloads: counts.bim_download || 0,
      quotes: db.quotes.length,
      events: db.events.slice(-50).reverse()
    });
  }

  if (req.method === 'POST' && url.pathname === '/api/product') {
    return readBody(req).then((body) => mutateDB((db) => {
      const p = body || {};
      db.product = {
        ...db.product,
        manufacturer: sanitizeText(p.manufacturer ?? db.product.manufacturer, 80),
        productName: sanitizeText(p.productName ?? db.product.productName, 120),
        skuPrefix: sanitizeText(p.skuPrefix ?? db.product.skuPrefix, 24).toUpperCase(),
        basePrice: Math.max(0, Number(p.basePrice ?? db.product.basePrice) || 0),
        currency: sanitizeText(p.currency ?? db.product.currency, 6).toUpperCase(),
        width: Math.max(300, Number(p.width ?? db.product.width) || db.product.width),
        depth: Math.max(300, Number(p.depth ?? db.product.depth) || db.product.depth),
        height: Math.max(500, Number(p.height ?? db.product.height) || db.product.height),
        contactEmail: sanitizeText(p.contactEmail ?? db.product.contactEmail, 120),
        accent: sanitizeAccent(p.accent, db.product.accent || '#d7472f'),
        familyName: sanitizeText(p.familyName ?? db.product.familyName, 80),
        familyCategory: sanitizeText(p.familyCategory ?? db.product.familyCategory, 60),
        omniClass: sanitizeText(p.omniClass ?? db.product.omniClass, 40),
        masterFormat: sanitizeText(p.masterFormat ?? db.product.masterFormat, 40),
        assemblyCode: sanitizeText(p.assemblyCode ?? db.product.assemblyCode, 40),
        ifcClass: sanitizeText(p.ifcClass ?? db.product.ifcClass, 60),
        keynote: sanitizeText(p.keynote ?? db.product.keynote, 40),
        productUrl: sanitizeText(p.productUrl ?? db.product.productUrl, 200),
        lod: sanitizeText(p.lod ?? db.product.lod, 8),
        hostMethod: sanitizeText(p.hostMethod ?? db.product.hostMethod, 24),
        updatedAt: new Date().toISOString()
      };
      return db.product;
    })).then((product) => sendJSON(res, 200, product)).catch((err) => handleReadError(res, err));
  }

  if (req.method === 'POST' && url.pathname === '/api/quotes') {
    return readBody(req).then((body) => mutateDB((db) => {
      const quote = {
        id: nextQuoteId(db.quotes),
        createdAt: new Date().toISOString(),
        name: sanitizeText(body.name, 100),
        company: sanitizeText(body.company, 120),
        email: sanitizeText(body.email, 140),
        phone: sanitizeText(body.phone, 60),
        notes: sanitizeText(body.notes, 700),
        revitVersion: sanitizeText(body.revitVersion, 12),
        projectName: sanitizeText(body.projectName, 160),
        configuration: slimConfiguration(body.configuration),
        status: 'New'
      };
      db.quotes.push(quote);
      return quote;
    })).then((quote) => sendJSON(res, 201, quote)).catch((err) => handleReadError(res, err));
  }

  if (req.method === 'POST' && url.pathname === '/api/events') {
    return readBody(req).then((body) => mutateDB((db) => {
      db.events.push({
        id: `E-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 7)}`,
        createdAt: new Date().toISOString(),
        type: sanitizeText(body.type || 'event', 40),
        payload: sanitizePayload(body.payload)
      });
      if (db.events.length > 1000) db.events = db.events.slice(-1000);
      return { ok: true };
    })).then((payload) => sendJSON(res, 201, payload)).catch((err) => handleReadError(res, err));
  }

  if (req.method === 'POST' && url.pathname === '/api/codes') {
    return readBody(req).then((body) => mutateDB((db) => {
      if (!db.codes || typeof db.codes !== 'object' || Array.isArray(db.codes)) db.codes = {};
      const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let code = '';
      do {
        code = '';
        for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
      } while (db.codes[code]);
      const record = {
        body: sanitizeText(body.body, 16),
        lid: sanitizeText(body.lid, 16),
        createdAt: new Date().toISOString()
      };
      db.codes[code] = record;
      const keys = Object.keys(db.codes);
      if (keys.length > 400) delete db.codes[keys[0]];
      return { code, body: record.body, lid: record.lid };
    })).then((payload) => {
      const host = req.headers.host || 'localhost:8080';
      const proto = host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'http';
      payload.url = `${proto}://${host}/?cfg=${payload.code}`;
      return sendJSON(res, 201, payload);
    }).catch((err) => handleReadError(res, err));
  }

  const codeGet = url.pathname.match(/^\/api\/codes\/([A-Za-z0-9]{4,8})$/);
  if (req.method === 'GET' && codeGet) {
    const db = readDB();
    const record = db.codes?.[codeGet[1].toUpperCase()];
    if (!record) return sendJSON(res, 404, { error: 'Unknown configuration code' });
    return sendJSON(res, 200, record);
  }

  return sendJSON(res, 404, { error: 'API route not found' });
}

function serveStatic(req, res, url) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }
  if (pathname.includes('\0')) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  if (pathname === '/admin') pathname = '/admin.html';
  if (pathname === '/embed') pathname = '/index.html';

  const safePath = path.normalize(path.join(PUBLIC_DIR, pathname));
  if (safePath !== PUBLIC_DIR && !safePath.startsWith(PUBLIC_ROOT)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.stat(safePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(safePath).toLowerCase();
    const noStore = ext === '.html' || ext === '.glb' || ext === '.gltf' || ext === '.js' || ext === '.mjs' || ext === '.css';
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': noStore ? 'no-cache' : 'public, max-age=3600'
    });
    fs.createReadStream(safePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/frontendapi/')) return apiHandler(req, res, url);
  return serveStatic(req, res, url);
});

server.listen(PORT, HOST, () => {
  console.log(`\nEquipXR client demo running at http://localhost:${PORT}`);
  console.log(`Configurator: http://localhost:${PORT}/`);
  console.log(`Admin:        http://localhost:${PORT}/admin`);
  console.log(`Embed demo:   http://localhost:${PORT}/embed\n`);
});
