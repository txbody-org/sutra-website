type SutraMarkProps = {
  size?: number;
  className?: string;
};

/**
 * The Sutra mark: two interlocked links — Elixir purple + Cardano blue,
 * woven together (the "thread" that binds the two ecosystems).
 */
const SutraMark = ({ size = 28, className = "" }: SutraMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient
        id="sutraTileBg"
        x1="0"
        y1="0"
        x2="64"
        y2="64"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#16132b" />
        <stop offset="1" stopColor="#0a0912" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#sutraTileBg)" />
    <circle cx="40" cy="32" r="13" fill="none" stroke="#3b82f6" strokeWidth="6.5" />
    <circle cx="24" cy="32" r="13" fill="none" stroke="#a855f7" strokeWidth="6.5" />
    <path
      d="M39.1 44.97 A13 13 0 0 1 27.6 36.0"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="6.5"
      strokeLinecap="round"
    />
  </svg>
);

export default SutraMark;
