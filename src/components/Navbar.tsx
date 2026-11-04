import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
];

// Phones get a short header (logo and one action) plus the bottom tab bar in MobileNav.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line pt-[env(safe-area-inset-top)]">
      <nav className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#" aria-label="PRISM, home">
          <Logo />
        </a>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline text-sm text-body hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium inline-flex items-center h-9 px-4 rounded-lg bg-ink text-paper hover:bg-zinc-800 transition-colors"
          >
            <span className="md:hidden">Pilot</span>
            <span className="hidden md:inline">Request a pilot</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
