export function detectPlatform() {
  const ua = navigator.userAgent || '';
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(ua);
  const safari = ios && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  const secure = Boolean(window.isSecureContext);
  let system = 'none';
  if (ios) system = 'quicklook';
  else if (android) system = 'webxr';
  return {
    ios,
    android,
    desktop: !ios && !android,
    safari,
    secure,
    system,
    label: ios ? 'iOS' : android ? 'Android' : 'Desktop'
  };
}
