import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
];

const pill = "inline-flex items-center h-8 px-3.5 rounded-full text-[13px] transition-colors";

// Desktop: section pills on the left, logo in the middle, one action on the right.
// Phones: logo and the action only; MobileNav adds the bottom tab bar.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur pt-[env(safe-area-inset-top)]">
      <nav className="max-w-6xl mx-auto px-6 h-14 md:h-16 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="hidden md:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={`${pill} bg-card text-body hover:bg-btn hover:text-ink`}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#" aria-label="PRISM, home" className="md:justify-self-center flex">
          <Logo />
        </a>

        <div className="justify-self-end">
          <a href="#contact" className={`${pill} bg-ink text-paper hover:bg-accent`}>
            <span className="md:hidden">Pilot</span>
            <span className="hidden md:inline">Request a pilot</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
