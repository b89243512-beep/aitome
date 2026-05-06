export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI Tome"
      className="shrink-0"
    >
      <polygon
        points="32,4 53.89,14.54 59.30,38.23 44.15,57.23 19.85,57.23 4.70,38.23 10.11,14.54"
        fill="#E91FE9"
        stroke="#E91FE9"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <polygon
        points="32,16 48,32 32,48 16,32"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
