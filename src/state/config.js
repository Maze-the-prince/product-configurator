export const RALS = {
  ral7021: { label: 'RAL 7021', name: 'Black grey', color: 0x2f3234, code: '7021', hex: '#2f3234' },
  ral5005: { label: 'RAL 5005', name: 'Signal blue', color: 0x154889, code: '5005', hex: '#154889' },
  ral3020: { label: 'RAL 3020', name: 'Traffic red', color: 0xc1121c, code: '3020', hex: '#c1121c' },
  ral8017: { label: 'RAL 8017', name: 'Chocolate brown', color: 0x44322d, code: '8017', hex: '#44322d' },
  ral2004: { label: 'RAL 2004', name: 'Pure orange', color: 0xe25303, code: '2004', hex: '#e25303' },
  ral6029: { label: 'RAL 6029', name: 'Mint green', color: 0x007243, code: '6029', hex: '#007243' },
  ral1026: { label: 'RAL 1026', name: 'Luminous yellow', color: 0xf5d000, code: '1026', hex: '#f5d000' },
  ral9004: { label: 'RAL 9004', name: 'Signal black', color: 0x1a1a1a, code: '9004', hex: '#1a1a1a' }
};

export const RAL_ORDER = Object.keys(RALS);

export const CONTACT_EMAIL = 'mazenbanat@outlook.com';
export const CONTACT_PHONE = '+961 81931045';
export const PRODUCT_NAME = '240L Waste Bin';
export const AD_LINE = 'Transform your 3D models into configurable views for your clients';

export const SCALE_MIN = 50;
export const SCALE_MAX = 200;
export const SCALE_DEFAULT = 100;

export function clampScale(value) {
  const n = Math.round(Number(value) || SCALE_DEFAULT);
  return Math.min(SCALE_MAX, Math.max(SCALE_MIN, n));
}

export const initialConfig = {
  body: 'ral7021',
  lid: 'ral9004',
  scale: SCALE_DEFAULT
};

export function skuFor(config, prefix = 'WB240') {
  const body = RALS[config.body] || RALS.ral7021;
  const lid = RALS[config.lid] || RALS.ral9004;
  return `${prefix}-B${body.code}-L${lid.code}`;
}

export function configReducer(state, action) {
  switch (action.type) {
    case 'setBody':
      return { ...state, body: RALS[action.value] ? action.value : state.body };
    case 'setLid':
      return { ...state, lid: RALS[action.value] ? action.value : state.lid };
    case 'setScale':
      return { ...state, scale: clampScale(action.value) };
    case 'load':
      return {
        body: RALS[action.config?.body] ? action.config.body : state.body,
        lid: RALS[action.config?.lid] ? action.config.lid : state.lid,
        scale: clampScale(action.config?.scale ?? state.scale)
      };
    default:
      return state;
  }
}

export function configViewUrl(config) {
  const url = new URL(location.origin + location.pathname.replace(/index\.html$/i, ''));
  const body = RALS[config.body] || RALS.ral7021;
  const lid = RALS[config.lid] || RALS.ral9004;
  url.searchParams.set('c', `${body.code}-${lid.code}`);
  return url.toString();
}

export function readConfigFromUrl() {
  const params = new URL(location.href).searchParams;
  const next = { ...initialConfig };
  const compact = String(params.get('c') || '');
  const [bodyCode, lidCode] = compact.split('-');
  const bodyKey = RAL_ORDER.find((key) => RALS[key].code === bodyCode);
  const lidKey = RAL_ORDER.find((key) => RALS[key].code === lidCode);
  if (bodyKey) next.body = bodyKey;
  if (lidKey) next.lid = lidKey;
  if (RALS[params.get('body')]) next.body = params.get('body');
  if (RALS[params.get('lid')]) next.lid = params.get('lid');
  if (params.get('scale')) next.scale = clampScale(params.get('scale'));
  return next;
}
