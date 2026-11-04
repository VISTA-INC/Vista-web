import Logo from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Request a pilot", href: "#contact" },
];

// Deep purple footer.
// Logo on the left, section links as rows with hairlines on the right.
export default function Footer() {
  return (
    <footer className="bg-[#25004b] text-white pb-[calc(64px+env(safe-area-inset-bottom))] md:pb-0">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="dark" height={52} />
        </div>
        <nav className="md:col-span-8" aria-label="Footer">
          <ul className="border-t border-white/15">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/15">
                <a href={l.href} className="flex items-center justify-between min-h-12 text-sm text-white/75 hover:text-white transition-colors">
                  <span>{l.label}</span>
                  <span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12 grid gap-6 md:gap-10 md:grid-cols-12 text-sm">
        <p className="order-2 md:order-none md:col-span-4 text-xs text-white/60 md:self-end">© 2024–2026 VISTA Inc.</p>
        <div className="md:col-span-5">
          <p className="text-white">About VISTA</p>
          <p className="mt-1 text-white/60 leading-relaxed">
            VISTA builds spatial computing tools that make operational data accessible to the people who run the floor.
          </p>
        </div>
      </div>
    </footer>
  );
}
