export function IconScan({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlace({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconMove({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 7L12 3l4 4M8 17l4 4 4-4M7 8L3 12l4 4M17 8l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconScale({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlaced({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12.5l2.6 2.6L16.5 9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconIos({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconAndroid({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 10.5h8v8.2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8.2Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 7.2 7.4 4.6M15 7.2l1.6-2.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="10" cy="13.2" r="0.9" fill="currentColor" />
      <circle cx="14" cy="13.2" r="0.9" fill="currentColor" />
      <path d="M8 12.5H6.2a1 1 0 0 0-1 1V17M16 12.5h1.8a1 1 0 0 1 1 1V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconDesktop({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconQuickLook({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 12 20 7.5M12 12 4 7.5M12 12v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconWebXR({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="7" width="19" height="10" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="8.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function stateIcon(id) {
  if (id === 'scanning') return IconScan;
  if (id === 'placing') return IconPlace;
  if (id === 'moving') return IconMove;
  if (id === 'scaling' || id === 'exporting') return IconScale;
  if (id === 'placed' || id === 'launching') return IconPlaced;
  return IconPlace;
}
