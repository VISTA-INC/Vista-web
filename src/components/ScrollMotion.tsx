"use client";

import { useEffect } from "react";

// Fades and lifts sections into view once, as they scroll onto the screen.
// Mark a container with data-animate="fade" (moves as one block) or
// data-animate="stagger" (its children follow one another, 60 ms apart).
// Anything already on screen when the page loads is left as it is, and
// nothing moves for reduced-motion users.
export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = (group: HTMLElement) =>
      group.dataset.animate === "stagger" ? (Array.from(group.children) as HTMLElement[]) : [group];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          items(entry.target as HTMLElement).forEach((el) => (el.dataset.reveal = "shown"));
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll<HTMLElement>("[data-animate]").forEach((group) => {
      if (group.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      items(group).forEach((el, i) => {
        el.dataset.reveal = "hidden";
        el.style.transitionDelay = `${Math.min(i, 5) * 60}ms`;
      });
      observer.observe(group);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
