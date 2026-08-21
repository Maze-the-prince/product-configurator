const $ = (s) => document.querySelector(s);
const PRODUCT_FIELDS = [
  'manufacturer', 'productName', 'skuPrefix', 'basePrice', 'currency', 'width', 'depth', 'height',
  'contactEmail', 'accent', 'familyName', 'familyCategory', 'omniClass', 'masterFormat',
  'assemblyCode', 'ifcClass', 'keynote', 'productUrl', 'lod', 'hostMethod'
];

function quoteConfig(q) {
  const root = q?.configuration || {};
  if (root.configuration && typeof root.configuration === 'object') return root.configuration;
  return root;
}

async function load() {
  const [productRes, analyticsRes, quotesRes] = await Promise.all([
    fetch('/api/product'),
    fetch('/api/analytics'),
    fetch('/api/quotes')
  ]);
  const product = await productRes.json();
  for (const k of PRODUCT_FIELDS) if ($(`#${k}`)) $(`#${k}`).value = product[k] ?? '';
  const a = await analyticsRes.json();
  $('#mViews').textContent = a.views;
  $('#mBim').textContent = a.bimDownloads ?? 0;
  $('#mQuotes').textContent = a.quotes;
  $('#mAR').textContent = a.arLaunches;
  renderQuotes(await quotesRes.json());
  const origin = location.origin;
  $('#embedCode').textContent = `<iframe\n  src="${origin}/?embed=1"\n  title="${product.productName} Revit family configurator"\n  width="100%" height="800"\n  style="border:0;border-radius:16px"\n  allow="xr-spatial-tracking; fullscreen; camera"\n></iframe>`;
}

function renderQuotes(quotes) {
  const host = $('#quoteRows');
  host.innerHTML = '';
  quotes.slice(0, 8).forEach((q) => {
    const c = quoteConfig(q);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${esc(q.id)}</strong><br><small>${new Date(q.createdAt).toLocaleDateString()}</small></td><td>${esc(q.company)}</td><td>${esc(q.name)}<br><small>${esc(q.email)}</small></td><td><strong>${esc(c.computed?.sku || '—')}</strong><br><small>Revit ${esc(q.revitVersion || '—')} · ${esc(c.body || '')} / ${esc(c.lid || '')}</small></td><td><span class="status">${esc(q.status)}</span></td>`;
    host.appendChild(tr);
  });
  if (!quotes.length) host.innerHTML = '<tr><td colspan="5">No family requests yet.</td></tr>';
}

$('#saveProduct').addEventListener('click', async () => {
  const body = {};
  for (const k of PRODUCT_FIELDS) body[k] = $(`#${k}`).value;
  const r = await fetch('/api/product', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (r.ok) { toast('Family settings saved'); load(); }
  else toast('Save failed');
});
$('#copyEmbed').addEventListener('click', async () => {
  await navigator.clipboard?.writeText($('#embedCode').textContent);
  toast('Embed code copied');
});
function toast(m) {
  const t = $('#toast');
  t.textContent = m;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2200);
}
function esc(s) {
  return String(s ?? '').replace(/[&<>'"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}
load();
