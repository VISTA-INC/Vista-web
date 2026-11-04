"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="PRISM by VISTA, home">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium inline-flex items-center h-9 px-4 rounded-lg bg-ink text-paper hover:bg-zinc-800 transition-colors"
          >
            Request a pilot
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-body hover:text-ink"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-2">
          {[...NAV_LINKS, { label: "Request a pilot", href: "#contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-body hover:text-ink border-b border-line last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
