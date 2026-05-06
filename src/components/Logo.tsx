export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AItome"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`aitome-logo-${size}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="55%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#aitome-logo-${size})`} />
      <g transform="translate(12, 14)">
        <rect x="0" y="0" width="40" height="28" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="6" y1="9" x2="22" y2="9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="15" x2="34" y2="15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="21" x2="20" y2="21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="translate(40, 38)">
        <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
