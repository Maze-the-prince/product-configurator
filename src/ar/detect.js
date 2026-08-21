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

export const AR_STATES = {
  idle: { id: 'idle', label: 'Ready', hint: 'Tap View in AR to check this device path.' },
  exporting: { id: 'exporting', label: 'Preparing', hint: 'Building a Quick Look file with live colours.' },
  launching: { id: 'launching', label: 'Opening', hint: 'Starting the native AR viewer.' },
  scanning: { id: 'scanning', label: 'Scan floor', hint: 'Move the phone until the target locks on the floor.' },
  placing: { id: 'placing', label: 'Place', hint: 'Tap the target to place the bin.' },
  placed: { id: 'placed', label: 'Placed', hint: 'Tap a new spot to move. Use the slider to rescale.' },
  moving: { id: 'moving', label: 'Move', hint: 'Hold and drag to a new floor position.' },
  scaling: { id: 'scaling', label: 'Scale', hint: 'Size is applied as a percentage of real 1:1.' }
};
