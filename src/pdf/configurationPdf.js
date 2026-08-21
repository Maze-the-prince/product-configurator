import { AD_LINE, CONTACT_EMAIL, CONTACT_PHONE, PRODUCT_NAME, RALS } from '../state/config.js';
import { drawQr } from '../../public/vendor/qr-matrix.js';

function slug(value) {
  return String(value || 'product').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function localConfigCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += alphabet[alphabet.length * Math.random() | 0];
  return code;
}

async function saveConfigCode(config, viewUrl) {
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

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
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

async function composePdfPage(code, viewUrl, shotUrl, config) {
  const W = 1240;
  const H = 1754;
  const page = document.createElement('canvas');
  page.width = W;
  page.height = H;
  const ctx = page.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#c1121c';
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
  ctx.fillText(PRODUCT_NAME, 64, 78);
  ctx.font = '600 18px Inter, Arial, sans-serif';
  ctx.fillStyle = '#c1121c';
  ctx.fillText(AD_LINE, 64, 112);
  ctx.fillStyle = '#111';

  const shot = await loadImage(shotUrl);
  const maxW = 980;
  const maxH = 980;
  const scale = Math.min(maxW / shot.width, maxH / shot.height);
  const dw = shot.width * scale;
  const dh = shot.height * scale;
  ctx.drawImage(shot, (W - dw) / 2, 180, dw, dh);

  const body = RALS[config.body] || RALS.ral7021;
  const lid = RALS[config.lid] || RALS.ral9004;
  const infoY = 180 + dh + 48;
  ctx.fillStyle = body.hex;
  ctx.fillRect(64, infoY, 36, 36);
  ctx.strokeStyle = '#111';
  ctx.strokeRect(64.5, infoY + 0.5, 35, 35);
  ctx.fillStyle = '#111';
  ctx.font = '600 22px Inter, Arial, sans-serif';
  ctx.fillText(`Bodycolor ${body.label}`, 116, infoY + 26);
  ctx.fillStyle = lid.hex;
  ctx.fillRect(420, infoY, 36, 36);
  ctx.strokeRect(420.5, infoY + 0.5, 35, 35);
  ctx.fillStyle = '#111';
  ctx.fillText(`Lid colour ${lid.label}`, 472, infoY + 26);

  ctx.fillStyle = '#eef1f4';
  ctx.fillRect(0, H - 320, W, 320);
  try {
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

function jpegToPdf(jpeg, imgW, imgH) {
  const pageW = 595.28;
  const pageH = 841.89;
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

async function canvasToJpeg(page) {
  const blob = await new Promise((resolve) => page.toBlob(resolve, 'image/jpeg', 0.9));
  if (blob) return new Uint8Array(await blob.arrayBuffer());
  const dataUrl = page.toDataURL('image/jpeg', 0.9);
  const binary = atob(dataUrl.split(',')[1] || '');
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

export async function downloadConfigurationPdf({ config, viewUrl, captureJpeg, sku }) {
  const saved = await saveConfigCode(config, viewUrl);
  const shot = captureJpeg();
  const page = await composePdfPage(saved.code, viewUrl, shot, config);
  const jpeg = await canvasToJpeg(page);
  const pdf = jpegToPdf(jpeg, page.width, page.height);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  a.download = `${slug(PRODUCT_NAME)}_${saved.code}.pdf`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
  return { code: saved.code, sku };
}
