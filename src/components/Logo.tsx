export function PrismMark({ size = 22, tone = "light" }: { size?: number; tone?: "light" | "dark" }) {
  const [a, b] = tone === "dark" ? ["#a9b8f2", "#7189e0"] : ["#1e3a8a", "#142a63"];
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 3 3 27h26L16 3Z" fill={a} />
      <path d="M16 3l3 24h10L16 3Z" fill={b} />
    </svg>
  );
}

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <PrismMark tone={tone} />
      <span className={`text-[17px] font-semibold tracking-[0.06em] ${tone === "dark" ? "text-paper" : "text-ink"}`}>PRISM</span>
    </span>
  );
}
