import Logo from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted max-w-xs">
            Spatial computing tools that make operational data accessible
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-0 md:gap-y-2">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex items-center min-h-11 md:min-h-0 text-sm text-body hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="max-w-6xl mx-auto px-6 py-6 text-xs text-muted">
          © 2024–2026 VISTA Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
