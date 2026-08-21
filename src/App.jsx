import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { Viewer } from './components/Viewer.jsx';
import { AR_STATES, detectPlatform } from './ar/detect.js';
import {
  IconAndroid,
  IconDesktop,
  IconIos,
  IconQuickLook,
  IconScale,
  IconWebXR,
  stateIcon
} from './ar/icons.jsx';
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
  const sceneRef = useRef(null);
  const overlayRef = useRef(null);
  const quickLookRef = useRef(null);
  const usdzUrlRef = useRef('');
  const sku = useMemo(() => skuFor(config), [config]);
  const arMeta = AR_STATES[arMode] || AR_STATES.idle;
  const StateIcon = stateIcon(arMeta.id);

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
    setArActive(mode !== 'idle');
  }, []);

  const onReady = useCallback((scene) => {
    sceneRef.current = scene;
    scene.setColors(config);
    scene.setScalePercent(config.scale);
    setSceneReady(true);
  }, [config]);

  useEffect(() => {
    if (!PLATFORM.ios || !sceneReady || !sceneRef.current) return undefined;
    let cancelled = false;
    const scene = sceneRef.current;
    setArMode((mode) => (mode === 'idle' ? 'exporting' : mode));
    scene.exportUSDZ().then((bytes) => {
      if (cancelled) return;
      if (usdzUrlRef.current) URL.revokeObjectURL(usdzUrlRef.current);
      const blob = new Blob([bytes], { type: 'model/vnd.usdz+zip' });
      const url = URL.createObjectURL(blob);
      usdzUrlRef.current = url;
      if (quickLookRef.current) {
        quickLookRef.current.href = url;
        quickLookRef.current.dataset.ready = '1';
      }
      setArMode((mode) => (mode === 'exporting' ? 'idle' : mode));
    }).catch(() => {
      if (!cancelled) setArMode((mode) => (mode === 'exporting' ? 'idle' : mode));
    });
    return () => { cancelled = true; };
  }, [sceneReady, config.body, config.lid, config.scale]);

  async function launchQuickLook() {
    if (!PLATFORM.safari) {
      setArHelp('On iPhone, open this page in Safari. AR uses Apple Quick Look, which Chrome and in-app browsers cannot start.');
      return;
    }
    const link = quickLookRef.current;
    if (link?.dataset.ready === '1') {
      setArMode('launching');
      link.click();
      return;
    }
    try {
      setArMode('exporting');
      const bytes = await sceneRef.current.exportUSDZ();
      if (usdzUrlRef.current) URL.revokeObjectURL(usdzUrlRef.current);
      const blob = new Blob([bytes], { type: 'model/vnd.usdz+zip' });
      const url = URL.createObjectURL(blob);
      usdzUrlRef.current = url;
      link.href = url;
      link.dataset.ready = '1';
      setArMode('launching');
      link.click();
    } catch (err) {
      setArMode('idle');
      setArHelp(err?.message || 'Could not build the Quick Look file.');
    }
  }

  async function startAR(event) {
    event?.preventDefault?.();
    if (!sceneRef.current) {
      setArHelp('Wait for the 3D view to load, then tap View in AR again.');
      return;
    }
    if (PLATFORM.ios) return launchQuickLook();
    if (!PLATFORM.android) {
      setArHelp('Open this HTTPS page in Safari on iPhone (Quick Look) or Chrome on Android (place, move, and scale).');
      return;
    }
    try {
      setArActive(true);
      setArMode('launching');
      await sceneRef.current.enterAR({ overlay: overlayRef.current });
    } catch (err) {
      setArMode('idle');
      setArActive(false);
      setArHelp(err?.message || 'Open this HTTPS page in Chrome on Android to place, move, and rescale in AR.');
    }
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
    list.unshift({ id: `CFG-${Date.now()}`, name: `${sku} · ${config.scale}% · ${new Date().toLocaleString()}`, config });
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
      `Scale: ${config.scale}%`,
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
  const arLabel = PLATFORM.ios ? 'View in AR · Quick Look' : PLATFORM.android ? 'View in AR · Place & move' : 'View in AR';

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
              scalePercent={config.scale}
              onReady={onReady}
              onError={() => setViewerError(true)}
              onArState={onArState}
            />
            {orbitHint && <p className="orbit-caption">Drag to rotate · 360°</p>}
            {viewerError && <p className="viewer-error">3D view could not start. Open this page in Chrome or Safari.</p>}
          </div>

          <div className="ar-dock">
            <div className="ar-chips" aria-label="AR platform and state">
              <span className={`ar-chip${PLATFORM.ios ? ' is-live' : ''}`}>
                <IconIos /> iOS · Quick Look
              </span>
              <span className={`ar-chip${PLATFORM.android ? ' is-live' : ''}`}>
                <IconAndroid /> Android · WebXR
              </span>
              <span className={`ar-chip${PLATFORM.desktop ? ' is-live' : ''}`}>
                <IconDesktop /> Desktop · preview
              </span>
            </div>
            <div className="ar-chips ar-chips-state">
              <span className="ar-chip is-state">
                <StateIcon /> {PLATFORM.label} · {PLATFORM.ios ? 'Quick Look' : PLATFORM.android ? 'WebXR' : 'No AR'} · {arMeta.label}
              </span>
              <span className="ar-chip">
                <IconScale /> {config.scale}%
              </span>
            </div>
            <button className="ar-link" type="button" onClick={startAR}>
              {PLATFORM.ios ? <IconQuickLook /> : PLATFORM.android ? <IconWebXR /> : <IconDesktop />}
              {arLabel}
            </button>
            <p className="ar-system-hint">{arMeta.hint}</p>
          </div>

          <p className="shop-ad">Let clients change <strong>colour</strong>, <strong>size</strong>, <strong>shape</strong>, and product <strong>variations</strong> in a live 3D view — then share, view in AR, print, and request an offer.</p>
        </section>

        <aside className="shop-options">
          <section className="config-section">
            <h3 className="option-label">Scale {config.scale}%</h3>
            <input
              className="scale-slider"
              type="range"
              min={SCALE_MIN}
              max={SCALE_MAX}
              step={5}
              value={config.scale}
              onChange={(e) => dispatch({ type: 'setScale', value: e.target.value })}
            />
            <div className="scale-ticks">
              <span>50%</span>
              <span>100% · 1:1 in AR</span>
              <span>200%</span>
            </div>
          </section>
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

      <div id="arOverlay" ref={overlayRef} className={`ar-overlay${arActive && PLATFORM.android ? ' is-active' : ''}`}>
        <p className="ar-banner">
          <StateIcon /> {arMeta.label} · {config.scale}%
        </p>
        <p className="ar-banner ar-banner-sub">{arMeta.hint}</p>
        <label className="ar-scale-control">
          <IconScale />
          <input
            type="range"
            min={SCALE_MIN}
            max={SCALE_MAX}
            step={5}
            value={config.scale}
            onChange={(e) => dispatch({ type: 'setScale', value: e.target.value })}
          />
          <strong>{config.scale}%</strong>
        </label>
        <button className="btn btn-dark" type="button" onClick={() => sceneRef.current?.exitAR()}>Exit AR</button>
      </div>

      <a ref={quickLookRef} className="ar-quicklook" rel="ar" href="#quicklook">
        <img alt="" src={`${import.meta.env.BASE_URL}assets/sample-logo.svg`} />
      </a>

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
          <div className="ar-chips" style={{ marginBottom: 14 }}>
            <span className="ar-chip"><IconIos /> iOS · Quick Look</span>
            <span className="ar-chip"><IconAndroid /> Android · WebXR</span>
          </div>
          <p style={{ lineHeight: 1.6, color: '#475569', marginTop: 0 }}>{arHelp}</p>
          <div className="codebox">{location.href}</div>
          <div className="modal-actions">
            <button className="btn" type="button" onClick={() => navigator.clipboard?.writeText(location.href)}>Copy link</button>
            <button className="btn btn-primary" type="button" onClick={() => { setArHelp(''); startAR(); }}>Try AR again</button>
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
