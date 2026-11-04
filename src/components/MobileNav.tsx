"use client";

import { useEffect, useState } from "react";

const ICON = {
  product: <path d="M12 3 3 20h18L12 3Z M12 3l2 17" />,
  how: <path d="M4 6h10M4 12h16M4 18h7M17 4l3 2-3 2" />,
  research: <path d="M6 3h9l3 3v15H6zM9 10h6M9 14h6M9 18h3" />,
  team: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />,
  contact: <path d="M4 5h16v12H8l-4 4V5ZM8 10h8M8 13h5" />,
};

const ITEMS = [
  { id: "product", label: "Product", icon: ICON.product },
  { id: "how-it-works", label: "Process", icon: ICON.how },
  { id: "research", label: "Research", icon: ICON.research },
  { id: "team", label: "Team", icon: ICON.team },
  { id: "contact", label: "Contact", icon: ICON.contact },
];

// Bottom tab bar for phones. Highlights the section currently on screen.
export default function MobileNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
        else if (window.scrollY < 400) setActive(null);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-paper/95 backdrop-blur border-t border-line pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5 h-16">
        {ITEMS.map((item) => {
          const on = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`h-full flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                  on ? "text-accent" : "text-muted active:text-ink"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {item.icon}
                </svg>
                <span className="truncate max-w-full px-1">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
