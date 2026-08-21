/** Byte-mode QR, ECC M, versions 2–4 (enough for a short ?cfg= URL). */

const EXP = new Uint8Array(256);
const LOG = new Uint8Array(256);
(function initGf() {
  for (let i = 0, x = 1; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  EXP[255] = EXP[0];
})();

function gfMul(a, b) {
  return a && b ? EXP[(LOG[a] + LOG[b]) % 255] : 0;
}

function rsGenerator(ec) {
  let poly = [1];
  for (let i = 0; i < ec; i++) {
    const term = [1, EXP[i]];
    const next = new Array(poly.length + 1).fill(0);
    for (let j = 0; j < poly.length; j++) {
      next[j] ^= poly[j];
      next[j + 1] ^= gfMul(poly[j], term[1]);
    }
    poly = next;
  }
  return poly;
}

function rsEncode(data, ec) {
  const gen = rsGenerator(ec);
  const buf = data.concat(new Array(ec).fill(0));
  for (let i = 0; i < data.length; i++) {
    const coef = buf[i];
    if (!coef) continue;
    for (let j = 0; j < gen.length; j++) buf[i + j] ^= gfMul(gen[j], coef);
  }
  return buf.slice(data.length);
}

const VERSIONS = {
  2: { size: 25, data: 28, ec: 16, blocks: 1, align: [6, 18] },
  3: { size: 29, data: 44, ec: 26, blocks: 1, align: [6, 22] },
  4: { size: 33, data: 64, ec: 18, blocks: 2, align: [6, 26] },
  5: { size: 37, data: 86, ec: 24, blocks: 2, align: [6, 30] },
  6: { size: 41, data: 108, ec: 16, blocks: 4, align: [6, 34] },
  7: { size: 45, data: 124, ec: 18, blocks: 4, align: [6, 22, 38] }
};

const FORMAT_M = [0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0];

function pickVersion(n) {
  if (n + 2 <= 28) return 2;
  if (n + 2 <= 44) return 3;
  if (n + 2 <= 64) return 4;
  if (n + 2 <= 86) return 5;
  if (n + 2 <= 108) return 6;
  if (n + 2 <= 124) return 7;
  throw new Error('QR payload too long');
}

function setFinder(mod, reserved, x, y) {
  for (let r = -1; r <= 7; r++) {
    for (let c = -1; c <= 7; c++) {
      const rr = y + r, cc = x + c;
      if (rr < 0 || cc < 0 || rr >= mod.length || cc >= mod.length) continue;
      const on = (r >= 0 && r <= 6 && c >= 0 && c <= 6) &&
        (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
      if (r >= 0 && r <= 6 && c >= 0 && c <= 6) mod[rr][cc] = on;
      reserved[rr][cc] = true;
    }
  }
}

function setAlign(mod, reserved, cx, cy) {
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      const rr = cy + r, cc = cx + c;
      if (reserved[rr][cc]) return;
    }
  }
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      const rr = cy + r, cc = cx + c;
      mod[rr][cc] = Math.max(Math.abs(r), Math.abs(c)) !== 1;
      reserved[rr][cc] = true;
    }
  }
}

function placeFormat(mod, reserved, bits) {
  const n = mod.length;
  for (let i = 0; i < 15; i++) {
    const on = ((bits >> i) & 1) === 1;
    if (i < 6) { mod[i][8] = on; mod[8][n - 1 - i] = on; }
    else if (i === 6) { mod[7][8] = on; mod[8][n - 7] = on; }
    else if (i === 7) { mod[8][8] = on; mod[8][n - 8] = on; }
    else if (i === 8) { mod[8][7] = on; mod[n - 7][8] = on; }
    else { mod[8][14 - i] = on; mod[n - 15 + i][8] = on; }
    reserved[i < 8 ? Math.min(i, 7) : 8][8] = true;
  }
  for (let i = 0; i < n; i++) reserved[8][i] = true, reserved[i][8] = true;
  mod[n - 8][8] = true;
  reserved[n - 8][8] = true;
}

function maskBit(mask, r, c) {
  if (mask === 0) return (r + c) % 2 === 0;
  if (mask === 1) return r % 2 === 0;
  return (r + c) % 3 === 0;
}

export function qrModules(text) {
  const bytes = Array.from(new TextEncoder().encode(String(text)));
  const version = pickVersion(bytes.length);
  const spec = VERSIONS[version];
  const bits = [];
  const push = (val, len) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
  };
  push(0b0100, 4);
  push(bytes.length, 8);
  bytes.forEach((b) => push(b, 8));
  push(0, Math.min(4, spec.data * 8 - bits.length));
  while (bits.length % 8) bits.push(0);
  const data = [];
  for (let i = 0; i < bits.length; i += 8) {
    let v = 0;
    for (let j = 0; j < 8; j++) v = (v << 1) | bits[i + j];
    data.push(v);
  }
  const pads = [0xec, 0x11];
  while (data.length < spec.data) data.push(pads[(data.length - bytes.length) & 1]);
  data.length = spec.data;

  const blockLen = spec.data / spec.blocks;
  const blocks = [];
  for (let i = 0; i < spec.blocks; i++) {
    const slice = data.slice(i * blockLen, (i + 1) * blockLen);
    blocks.push({ data: slice, ec: rsEncode(slice, spec.ec) });
  }
  const interleaved = [];
  for (let i = 0; i < blockLen; i++) blocks.forEach((b) => interleaved.push(b.data[i]));
  for (let i = 0; i < spec.ec; i++) blocks.forEach((b) => interleaved.push(b.ec[i]));

  const stream = [];
  interleaved.forEach((b) => {
    for (let i = 7; i >= 0; i--) stream.push((b >> i) & 1);
  });

  const n = spec.size;
  const mod = Array.from({ length: n }, () => Array(n).fill(false));
  const reserved = Array.from({ length: n }, () => Array(n).fill(false));
  setFinder(mod, reserved, 0, 0);
  setFinder(mod, reserved, n - 7, 0);
  setFinder(mod, reserved, 0, n - 7);
  spec.align.forEach((x) => spec.align.forEach((y) => setAlign(mod, reserved, x, y)));
  for (let i = 8; i < n - 8; i++) {
    mod[6][i] = i % 2 === 0;
    mod[i][6] = i % 2 === 0;
    reserved[6][i] = reserved[i][6] = true;
  }
  const mask = 0;
  placeFormat(mod, reserved, FORMAT_M[mask]);

  let bit = 0;
  let dir = -1;
  let col = n - 1;
  while (col > 0) {
    if (col === 6) col -= 1;
    for (let i = 0; i < n; i++) {
      const row = dir < 0 ? n - 1 - i : i;
      for (let k = 0; k < 2; k++) {
        const c = col - k;
        if (reserved[row][c]) continue;
        let v = bit < stream.length ? stream[bit++] === 1 : false;
        if (maskBit(mask, row, c)) v = !v;
        mod[row][c] = v;
      }
    }
    dir = -dir;
    col -= 2;
  }
  return mod;
}

export function drawQr(ctx, text, x, y, size, color = '#111') {
  const mod = qrModules(text);
  const n = mod.length;
  const quiet = 4;
  const dim = n + quiet * 2;
  const cell = size / dim;
  ctx.fillStyle = '#fff';
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = color;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (mod[r][c]) ctx.fillRect(x + (c + quiet) * cell, y + (r + quiet) * cell, cell + 0.4, cell + 0.4);
    }
  }
}
