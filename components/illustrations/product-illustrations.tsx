import { type ReactNode } from 'react';

type ProductIllustrationProps = {
  title: string;
  variant:
    | 'scanning'
    | 'inventory'
    | 'quality'
    | 'environment'
    | 'rfid'
    | 'qr'
    | 'attendance';
};

type GraphicConfig = {
  ringA: string;
  ringB: string;
  nodeA: string;
  nodeB: string;
  line: string;
  glyph: ReactNode;
};

const CONFIG: Record<ProductIllustrationProps['variant'], GraphicConfig> = {
  scanning: {
    ringA: 'rgba(52,211,153,0.28)',
    ringB: 'rgba(148,163,184,0.24)',
    nodeA: '#6ee7b7',
    nodeB: '#cbd5e1',
    line: 'rgba(148,163,184,0.58)',
    glyph: (
      <>
        <rect x="296" y="114" width="128" height="40" rx="10" fill="rgba(6,78,59,0.36)" />
        <rect x="312" y="128" width="24" height="12" rx="3" fill="#a7f3d0" />
        <rect x="348" y="128" width="60" height="12" rx="3" fill="rgba(255,255,255,0.7)" />
      </>
    ),
  },
  inventory: {
    ringA: 'rgba(16,185,129,0.26)',
    ringB: 'rgba(71,85,105,0.35)',
    nodeA: '#34d399',
    nodeB: '#e2e8f0',
    line: 'rgba(148,163,184,0.6)',
    glyph: (
      <>
        <rect x="286" y="108" width="58" height="58" rx="10" fill="rgba(15,23,42,0.45)" />
        <rect x="352" y="108" width="58" height="58" rx="10" fill="rgba(15,23,42,0.45)" />
        <rect x="319" y="174" width="58" height="58" rx="10" fill="rgba(15,23,42,0.45)" />
      </>
    ),
  },
  quality: {
    ringA: 'rgba(52,211,153,0.24)',
    ringB: 'rgba(148,163,184,0.24)',
    nodeA: '#6ee7b7',
    nodeB: '#94a3b8',
    line: 'rgba(148,163,184,0.56)',
    glyph: (
      <>
        <path d="M308 158L334 184L390 128" stroke="#6ee7b7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  environment: {
    ringA: 'rgba(134,239,172,0.28)',
    ringB: 'rgba(74,222,128,0.2)',
    nodeA: '#a7f3d0',
    nodeB: '#bbf7d0',
    line: 'rgba(110,231,183,0.5)',
    glyph: (
      <>
        <path d="M355 116C334 126 320 144 318 168C342 170 362 156 374 132" stroke="#86efac" strokeWidth="8" strokeLinecap="round" />
        <path d="M330 175C345 166 360 152 371 135" stroke="#d9f99d" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
  },
  rfid: {
    ringA: 'rgba(52,211,153,0.22)',
    ringB: 'rgba(148,163,184,0.24)',
    nodeA: '#34d399',
    nodeB: '#cbd5e1',
    line: 'rgba(148,163,184,0.56)',
    glyph: (
      <>
        <path d="M312 158C326 144 354 144 368 158" stroke="#6ee7b7" strokeWidth="5" strokeLinecap="round" />
        <path d="M300 176C321 155 359 155 380 176" stroke="#34d399" strokeWidth="5" strokeLinecap="round" />
        <path d="M288 194C316 167 364 167 392 194" stroke="rgba(16,185,129,0.8)" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  },
  qr: {
    ringA: 'rgba(52,211,153,0.2)',
    ringB: 'rgba(148,163,184,0.22)',
    nodeA: '#34d399',
    nodeB: '#cbd5e1',
    line: 'rgba(148,163,184,0.58)',
    glyph: (
      <>
        <rect x="302" y="118" width="32" height="32" rx="4" fill="#a7f3d0" />
        <rect x="342" y="118" width="18" height="18" rx="3" fill="#34d399" />
        <rect x="366" y="142" width="24" height="24" rx="4" fill="rgba(148,163,184,0.8)" />
        <rect x="322" y="162" width="22" height="22" rx="4" fill="rgba(16,185,129,0.8)" />
      </>
    ),
  },
  attendance: {
    ringA: 'rgba(52,211,153,0.2)',
    ringB: 'rgba(148,163,184,0.22)',
    nodeA: '#86efac',
    nodeB: '#cbd5e1',
    line: 'rgba(148,163,184,0.52)',
    glyph: (
      <>
        <circle cx="346" cy="138" r="22" fill="rgba(16,185,129,0.48)" />
        <rect x="314" y="167" width="64" height="30" rx="10" fill="rgba(15,23,42,0.62)" />
      </>
    ),
  },
};

export function ProductIllustration({ title, variant }: ProductIllustrationProps) {
  const config = CONFIG[variant];

  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={`${title} abstract illustration`} className="h-full w-full">
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(15,23,42,0.95)" />
          <stop offset="100%" stopColor="rgba(2,6,23,0.92)" />
        </linearGradient>
      </defs>

      <rect width="640" height="360" fill={`url(#bg-${variant})`} />

      <ellipse cx="320" cy="190" rx="190" ry="80" fill="none" stroke={config.ringA} strokeWidth="2" />
      <ellipse cx="320" cy="190" rx="146" ry="58" fill="none" stroke={config.ringB} strokeWidth="2" />

      <line x1="130" y1="190" x2="510" y2="190" stroke={config.line} strokeDasharray="7 9" />
      <circle cx="130" cy="190" r="7" fill={config.nodeB} />
      <circle cx="510" cy="190" r="7" fill={config.nodeA} />
      <circle cx="320" cy="102" r="6" fill={config.nodeA} />
      <circle cx="320" cy="278" r="6" fill={config.nodeB} />

      <g>{config.glyph}</g>

      <path d="M120 82C136 64 164 58 188 62C170 80 150 90 120 82Z" fill="rgba(110,231,183,0.2)" />
      <path d="M500 278C520 262 546 258 566 264C548 280 526 288 500 278Z" fill="rgba(167,243,208,0.15)" />
    </svg>
  );
}
