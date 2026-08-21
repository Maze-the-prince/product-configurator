import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { Viewer } from './components/Viewer.jsx';
import { detectPlatform } from './ar/detect.js';
import {
  AD_LINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  RAL_ORDER,
  RALS,
  SCALE_MAX,
  SCALE_MIN,
  configReducer,
  configViewUrl,
  readConfigFromUrl,
  skuFor
} from './state/config.js';

const EMBED = new URL(location.href).searchParams.get('embed') === '1';
const SAVE_KEY = 'equipxr-saved';
const PLATFORM = detectPlatform();

function postToHost(payload) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ source: 'innovio-configurator', ...payload }, '*');
  }
}

export function App() {
  const [config, dispatch] = useReducer(configReducer, null, readConfigFromUrl);
  const [toast, setToast] = useState('');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [arHelp, setArHelp] = useState('');
  const [arMode, setArMode] = useState('idle');
  const [viewerError, setViewerError] = useState(false);
  const [orbitHint, setOrbitHint] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);
  const [arScale, setArScale] = useState(100);
  const sceneRef = useRef(null);
  const overlayRef = useRef(null);
  const quickLookRef = useRef(null);
  const usdzUrlRef = useRef('');
  const sku = useMemo(() => skuFor(config), [config]);
  const inAndroidAR = PLATFORM.android && arMode !== 'idle';

  const flash = (msg) => {
    setToast(msg);
    window.clearTimeout(flash._t);
    flash._t = window.setTimeout(() => setToast(''), 2400);
  };

  useEffect(() => {
    postToHost({ type: 'ready', configuration: config, sku });
    const onMessage = (event) => {
      const data = event.data;
      if (!data || data.source === 'innovio-configurator') return;
      if (data.type === 'setConfiguration' && data.configuration) {
        dispatch({ type: 'load', config: data.configuration });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    postToHost({ type: 'configurationChanged', configuration: config, sku });
  }, [config, sku]);

  const onArState = useCallback((mode) => {
    setArMode(mode);
    if (mode === 'idle') {
      setArScale(100);
      sceneRef.current?.setScalePercent(100);
    }
  }, []);

  const onReady = useCallback((scene) => {
    sceneRef.current = scene;
    scene.setColors(config);
    scene.setScalePercent(100);
    setSceneReady(true);
  }, [config]);

  useEffect(() => {
    if (!PLATFORM.ios || !sceneReady || !sceneRef.current) return undefined;
    let cancelled = false;
    sceneRef.current.exportUSDZ().then((bytes) => {
      if (cancelled) return;
      if (usdzUrlRef.current) URL.revokeObjectURL(usdzUrlRef.current);
      const blob = new Blob([bytes], { type: 'model/vnd.usdz+zip' });
      const url = URL.createObjectURL(blob);
      usdzUrlRef.current = url;
      if (quickLookRef.current) {
        quickLookRef.current.href = url;
        quickLookRef.current.dataset.ready = '1';
      }
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [sceneReady, config.body, config.lid]);

  async function startAR() {
    if (!sceneRef.current) {
      setArHelp('Wait for the 3D view to load, then tap View in AR again.');
      return;
    }
    try {
      setArScale(100);
      sceneRef.current.setScalePercent(100);
      setArMode('launching');
      await sceneRef.current.enterAR({ overlay: overlayRef.current });
    } catch (err) {
      setArMode('idle');
      setArHelp(err?.message || 'Open this HTTPS page in Chrome on Android to place, move, and rescale in AR.');
    }
  }

  function changeArScale(value) {
    setArScale(value);
    sceneRef.current?.setScalePercent(value);
  }

  async function share() {
    const url = configViewUrl(config);
    try {
      if (navigator.share) await navigator.share({ title: '240 L waste bin', url });
      else {
        await navigator.clipboard.writeText(url);
        flash('Share link copied');
      }
    } catch {}
  }

  function save() {
    const list = JSON.parse(localStorage.getItem(SAVE_KEY) || '[]');
    list.unshift({ id: `CFG-${Date.now()}`, name: `${sku} · ${new Date().toLocaleString()}`, config });
    localStorage.setItem(SAVE_KEY, JSON.stringify(list.slice(0, 12)));
    setSavedOpen(true);
    flash('Configuration saved locally');
  }

  function printView() {
    window.print();
  }

  async function requestOffer(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const bodyRal = RALS[config.body];
    const lidRal = RALS[config.lid];
    const subject = `Offer request: 240 L waste bin ${sku}`;
    const mailText = [
      'New configuration request',
      '',
      `Name: ${body.name || ''}`,
      `Company: ${body.company || ''}`,
      `Email: ${body.email || ''}`,
      `Phone: ${body.phone || ''}`,
      '',
      `SKU: ${sku}`,
      `Body colour: ${bodyRal.label}`,
      `Lid colour: ${lidRal.label}`,
      `Link: ${configViewUrl(config)}`,
      '',
      'Notes:',
      body.notes || '(none)'
    ].join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailText)}`;
    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, configuration: config })
      });
    } catch {}
    window.location.href = mailto;
  }

  const saved = savedOpen ? JSON.parse(localStorage.getItem(SAVE_KEY) || '[]') : [];
  const arHint = arMode === 'scanning' || arMode === 'launching'
    ? 'Scan the floor, then tap to place'
    : arMode === 'placing'
      ? 'Tap to place'
      : arMode === 'moving'
        ? 'Release to set the new position'
        : 'Tap to move · drag the slider to rescale';

  return (
    <main className={`shop${EMBED ? ' is-embed' : ''}`}>
      <header className="shop-head">
        <div>
          <p className="shop-kicker">3D configurator</p>
          <p className="shop-tagline">{AD_LINE}</p>
        </div>
        <div className="shop-tools">
          <button className="tool-btn" type="button" title="Share" onClick={share}>✉</button>
          <button className="tool-btn" type="button" title="Save" onClick={save}>💾</button>
          <button className="tool-btn" type="button" title="Print" onClick={printView}>⎙</button>
        </div>
      </header>

      <div className="shop-body">
        <section className="shop-stage">
          <div className="viewer-card" id="viewerCard" onPointerDown={() => setOrbitHint(false)}>
            <Viewer
              config={config}
              scalePercent={100}
              onReady={onReady}
              onError={() => setViewerError(true)}
              onArState={onArState}
            />
            {orbitHint && <p className="orbit-caption">Drag to rotate · 360°</p>}
            {viewerError && <p className="viewer-error">3D view could not start. Open this page in Chrome or Safari.</p>}
          </div>

          {PLATFORM.android && (
            <button className="ar-link" type="button" onClick={startAR}>View in AR</button>
          )}
          {PLATFORM.ios && (
            <a ref={quickLookRef} className="ar-link" rel="ar" href="#quicklook">
              <img className="ar-icon" alt="" src={`${import.meta.env.BASE_URL}assets/sample-logo.svg`} />
              View in AR
            </a>
          )}

          <p className="shop-ad">Let clients change <strong>colour</strong>, <strong>size</strong>, <strong>shape</strong>, and product <strong>variations</strong> in a live 3D view — then share, view in AR, print, and request an offer.</p>
        </section>

        <aside className="shop-options">
          <SwatchSection title="Bodycolor" value={config.body} onPick={(value) => dispatch({ type: 'setBody', value })} />
          <SwatchSection title="Lid colour" value={config.lid} onPick={(value) => dispatch({ type: 'setLid', value })} />
        </aside>
      </div>

      <footer className="shop-foot">
        <div className="shop-foot-actions">
          <button className="btn" type="button" onClick={printView}>Print</button>
          <button className="btn btn-primary request-btn" type="button" onClick={() => setQuoteOpen(true)}>Request offer →</button>
        </div>
      </footer>

      <div id="arOverlay" ref={overlayRef} className={`ar-overlay${inAndroidAR ? ' is-active' : ''}`}>
        <p className="ar-banner">{arHint}</p>
        <label className="ar-scale-control">
          <span>Scale</span>
          <input
            type="range"
            min={SCALE_MIN}
            max={SCALE_MAX}
            step={5}
            value={arScale}
            onChange={(e) => changeArScale(Number(e.target.value))}
          />
          <strong>{arScale}%</strong>
        </label>
        <button className="btn btn-dark" type="button" onClick={() => sceneRef.current?.exitAR()}>Exit AR</button>
      </div>

      {quoteOpen && (
        <Modal title="Request offer" onClose={() => setQuoteOpen(false)}>
          <form onSubmit={requestOffer}>
            <div className="form-grid">
              <Field name="name" label="Name" required />
              <Field name="company" label="Company" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" />
              <div className="full">
                <label className="label">Notes</label>
                <textarea className="textarea" name="notes" rows={4} placeholder="Colours, quantity, delivery..." />
              </div>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn" onClick={() => setQuoteOpen(false)}>Cancel</button>
              <button className="btn btn-primary" type="submit">Send request</button>
            </div>
          </form>
        </Modal>
      )}

      {savedOpen && (
        <Modal title="Saved configurations" onClose={() => setSavedOpen(false)}>
          {saved.length === 0 && <p style={{ color: '#64748b' }}>No saved configurations yet.</p>}
          {saved.map((item) => (
            <div className="option-row" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <small>{item.id}</small>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  dispatch({ type: 'load', config: item.config });
                  setSavedOpen(false);
                  flash('Configuration loaded');
                }}
              >
                Load
              </button>
            </div>
          ))}
        </Modal>
      )}

      {arHelp && (
        <Modal title="View in AR" onClose={() => setArHelp('')}>
          <p style={{ lineHeight: 1.6, color: '#475569', marginTop: 0 }}>{arHelp}</p>
          <div className="modal-actions">
            <button className="btn btn-primary" type="button" onClick={() => setArHelp('')}>OK</button>
          </div>
        </Modal>
      )}

      {toast && <div className="toast">{toast}</div>}
      <span className="hidden">{CONTACT_PHONE}</span>
    </main>
  );
}

function SwatchSection({ title, value, onPick }) {
  return (
    <section className="config-section">
      <h3 className="option-label">{title}</h3>
      <div className="swatches swatches-ral">
        {RAL_ORDER.map((key) => (
          <div className="swatch-wrap" key={key}>
            <button
              className={`swatch${value === key ? ' active' : ''}`}
              type="button"
              title={RALS[key].label}
              style={{ background: RALS[key].hex }}
              onClick={() => onPick(key)}
            />
            <span className="swatch-code">{RALS[key].label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="icon-btn" type="button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

function Field({ name, label, type = 'text', required }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="text-input" name={name} type={type} required={required} />
    </div>
  );
}
