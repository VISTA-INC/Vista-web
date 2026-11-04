import Logo from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Request a pilot", href: "#contact" },
];

// Dark footer: logo on the left, section links as rows with hairlines on the right.
export default function Footer() {
  return (
    <footer className="bg-ink text-paper pb-[calc(64px+env(safe-area-inset-bottom))] md:pb-0">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="dark" height={44} />
        </div>
        <nav className="md:col-span-8" aria-label="Footer">
          <ul className="border-t border-white/10">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/10">
                <a href={l.href} className="flex items-center justify-between min-h-12 text-sm text-[#bfbdb4] hover:text-paper transition-colors">
                  <span>{l.label}</span>
                  <span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12 grid gap-6 md:grid-cols-12 text-sm">
        <p className="order-2 md:order-none md:col-span-4 text-xs text-[#9a988f] md:self-end">© 2024–2026 VISTA Inc.</p>
        <div className="md:col-span-5">
          <p className="text-paper">About VISTA</p>
          <p className="mt-1 text-[#9a988f] leading-relaxed">
            VISTA builds spatial computing tools that make operational data accessible to the people who run the floor.
          </p>
        </div>
      </div>
    </footer>
  );
}
