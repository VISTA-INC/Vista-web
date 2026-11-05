"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

// A recorded walkthrough of the PRISM panel. Plays muted on a loop; stays paused
// on the poster for reduced-motion users, who can still press play.
export default function DemoVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    // Only play while the video is on screen
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        v.muted = false;
        v.play().catch(() => {
          v.muted = true;
          v.play().catch(() => {});
        });
      } else {
        v.pause();
      }
    }, {
      threshold: 0.25,
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section id="demo" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Demo"
          title="See it in action"
          intro="Watch PRISM turn a voice question into an interactive 3D answer — in seconds."
        />
        <div data-animate="fade" className="rounded-2xl bg-canvas p-2 sm:p-3 md:p-4">
          <video
            ref={video}
            className="block w-full h-auto rounded-xl"
            poster="/media/prism-demo-poster.jpg"
            width={1104}
            height={652}
            playsInline
            controls
            preload="metadata"
            aria-label="PRISM demo: asking about energy, downtime and output, selecting bars and switching between 3D and 2D charts"
          >
            <source src="/media/prism-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
