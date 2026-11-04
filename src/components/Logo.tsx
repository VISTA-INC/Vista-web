export function PrismMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 3 3 27h26L16 3Z" fill="#1e3a8a" />
      <path d="M16 3l3 24h10L16 3Z" fill="#142a63" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <PrismMark />
      <span className="text-base font-medium tracking-[0.02em] text-ink">PRISM</span>
      <span className="text-sm text-muted">by VISTA</span>
    </span>
  );
}
