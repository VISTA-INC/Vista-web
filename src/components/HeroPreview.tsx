"use client";

// An interactive preview of the PRISM headset panels. Pick a sample question:
// it types in, PRISM "analyzes" the file, then the answer fades in and the
// bars grow from the floor. Bars can be hovered or tapped, and the chart can
// switch between 3D and 2D. All motion is skipped for reduced-motion users.

import { useCallback, useEffect, useRef, useState } from "react";

type Row = { name: string; v: number };
type Question = {
  chip: string;
  question: string;
  file: string;
  meta: string;
  title: string;
  unit: string;
  data: Row[];
  answer: [string, string, string]; // text before the figure, the figure, text after
};

const QUESTIONS: Question[] = [
  {
    chip: "Energy",
    question: "Which machine used the most energy this week?",
    file: "energy_log.csv",
    meta: "energy_log.csv · 5 machines · 7 days",
    title: "Energy use by machine, kWh",
    unit: "kWh",
    data: [
      { name: "Press 1", v: 412 },
      { name: "Press 2", v: 538 },
      { name: "CNC 3", v: 296 },
      { name: "Press 4", v: 861 },
      { name: "Lathe 5", v: 344 },
    ],
    answer: ["Press 4 used the most energy this week: ", "861 kWh", ", about twice the average of the other four machines."],
  },
  {
    chip: "Downtime",
    question: "Where did we lose the most time to downtime?",
    file: "downtime_log.csv",
    meta: "downtime_log.csv · 5 machines · 7 days",
    title: "Downtime by machine, minutes",
    unit: "min",
    data: [
      { name: "Press 1", v: 48 },
      { name: "Press 2", v: 35 },
      { name: "CNC 3", v: 126 },
      { name: "Press 4", v: 52 },
      { name: "Lathe 5", v: 41 },
    ],
    answer: ["CNC 3 had the most downtime this week: ", "126 minutes", ", almost three times the average of the other four machines."],
  },
  {
    chip: "Output",
    question: "Which machine produced the most parts this week?",
    file: "production_log.csv",
    meta: "production_log.csv · 5 machines · 7 days",
    title: "Parts produced by machine",
    unit: "parts",
    data: [
      { name: "Press 1", v: 1840 },
      { name: "Press 2", v: 2210 },
      { name: "CNC 3", v: 960 },
      { name: "Press 4", v: 2050 },
      { name: "Lathe 5", v: 1320 },
    ],
    answer: ["Press 2 produced the most parts this week: ", "2,210", ", about 8% more than Press 4."],
  },
];

// Timeline, in ms
const TYPE_MS = 18;
const ANALYZE_MS = 520;
const GROW_MS = 460;
const STAGGER_MS = 60;
const ease = (t: number) => 1 - Math.pow(1 - t, 3); // close to cubic-bezier(0.22, 1, 0.36, 1)
const clamp = (t: number) => Math.min(1, Math.max(0, t));
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

function timeline(q: Question) {
  const typed = q.question.length * TYPE_MS;
  const analyzed = typed + ANALYZE_MS;
  const end = analyzed + (q.data.length - 1) * STAGGER_MS + GROW_MS;
  return { typed, analyzed, end };
}

// Colors (match the PRISM app spec)
const NEUTRAL = { top: "#4a4a50", front: "#38383d", side: "#2b2b2f" };
const HOVER = { top: "#6a6a71", front: "#505056", side: "#3d3d42" };
const ACCENT = { top: "#8ea2ee", front: "#5d77d6", side: "#4560c2" };

// Isometric projection
const C = Math.cos(Math.PI / 6);
const S = 0.5;
const W = 32;
const GAP = 84;
const MAX_H = 150;
type P = [number, number, number];
const project = ([x, y, z]: P) => [(x - y) * C, (x + y) * S - z] as const;
const pts = (list: P[]) => list.map((p) => project(p).join(",")).join(" ");

type ChartProps = {
  q: Question;
  grow: (i: number) => number;
  hover: number | null;
  setHover: (i: number | null) => void;
};

function barLabel(q: Question, r: Row) {
  return `${r.name}, ${fmt(r.v)} ${q.unit}`;
}

function IsoChart({ q, grow, hover, setHover }: ChartProps) {
  const top = Math.max(...q.data.map((d) => d.v));
  const end = (q.data.length - 1) * GAP + W + 20;
  return (
    <svg viewBox="-88 -104 452 330" className="w-full h-auto" role="img" aria-label={`3D bar chart: ${q.title}`}>
      <polygon points={pts([[-20, -20, 0], [end, -20, 0], [end, W + 20, 0], [-20, W + 20, 0]])} fill="#1c1c1f" stroke="rgba(237,237,237,0.08)" />
      {q.data.map((d, i) => {
        const g = grow(i);
        const x = i * GAP;
        const h = Math.max(0.5, (d.v / top) * MAX_H * g);
        const isTop = d.v === top;
        const c = isTop ? ACCENT : hover === i ? HOVER : NEUTRAL;
        const [lx, ly] = project([x + W / 2, W + 14, 0]);
        const [vx] = project([x + W / 2, W / 2, h]);
        const vy = project([x, 0, h])[1];
        return (
          <g
            key={d.name}
            tabIndex={0}
            role="button"
            aria-label={barLabel(q, d)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            onClick={() => setHover(hover === i ? null : i)}
            className="cursor-pointer outline-none"
          >
            <polygon points={pts([[x + W, 0, 0], [x + W, W, 0], [x + W, W, h], [x + W, 0, h]])} fill={c.side} className="transition-[fill] duration-150" />
            <polygon points={pts([[x, W, 0], [x + W, W, 0], [x + W, W, h], [x, W, h]])} fill={c.front} className="transition-[fill] duration-150" />
            <polygon points={pts([[x, 0, h], [x + W, 0, h], [x + W, W, h], [x, W, h]])} fill={c.top} className="transition-[fill] duration-150" />
            <text x={vx} y={vy - 10} textAnchor="middle" className="font-mono tabular-nums" fontSize="11" fill={isTop ? "#a9b8f2" : hover === i ? "#ededed" : "#85858b"} opacity={g > 0.05 ? 1 : 0}>
              {fmt(d.v * g)}
            </text>
            <text x={lx - 6} y={ly + 10} textAnchor="end" className="font-mono" fontSize="10" fill={hover === i ? "#ededed" : "#85858b"}>
              {d.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function FlatChart({ q, grow, hover, setHover }: ChartProps) {
  const top = Math.max(...q.data.map((d) => d.v));
  const base = 196;
  const maxH = 156;
  const bw = 44;
  const step = 76;
  const x0 = 24;
  return (
    <svg viewBox="0 0 400 230" className="w-full h-auto" role="img" aria-label={`Bar chart: ${q.title}`}>
      {[0.5, 1].map((f) => (
        <line key={f} x1="8" x2="392" y1={base - maxH * f} y2={base - maxH * f} stroke="rgba(237,237,237,0.06)" />
      ))}
      <line x1="8" x2="392" y1={base} y2={base} stroke="rgba(237,237,237,0.14)" />
      {q.data.map((d, i) => {
        const g = grow(i);
        const h = (d.v / top) * maxH * g;
        const x = x0 + i * step;
        const isTop = d.v === top;
        return (
          <g
            key={d.name}
            tabIndex={0}
            role="button"
            aria-label={barLabel(q, d)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            onClick={() => setHover(hover === i ? null : i)}
            className="cursor-pointer outline-none"
          >
            <rect x={x - 8} y={base - maxH - 24} width={bw + 16} height={maxH + 52} fill="transparent" />
            <rect x={x} y={base - h} width={bw} height={h} rx="4" fill={isTop ? ACCENT.top : hover === i ? HOVER.top : NEUTRAL.top} className="transition-[fill] duration-150" />
            <text x={x + bw / 2} y={base - h - 8} textAnchor="middle" className="font-mono tabular-nums" fontSize="11" fill={isTop ? "#a9b8f2" : hover === i ? "#ededed" : "#85858b"} opacity={g > 0.05 ? 1 : 0}>
              {fmt(d.v * g)}
            </text>
            <text x={x + bw / 2} y={base + 18} textAnchor="middle" className="font-mono" fontSize="10" fill={hover === i ? "#ededed" : "#85858b"}>
              {d.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Mic() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4" />
    </svg>
  );
}

export default function HeroPreview() {
  const [qi, setQi] = useState(0);
  const q = QUESTIONS[qi];
  const t = timeline(q);
  // Start with the question typed and the chart empty; it plays once the panel is on screen.
  const [elapsed, setElapsed] = useState(t.typed);
  const [view, setView] = useState<"3d" | "2d">("3d");
  const [hover, setHover] = useState<number | null>(null);
  const raf = useRef<number | null>(null);
  const root = useRef<HTMLElement | null>(null);
  const reduced = useRef(false);

  const play = useCallback((from: number, total: number) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    if (reduced.current) {
      setElapsed(total);
      return;
    }
    const start = performance.now() - from;
    const tick = (now: number) => {
      const e = now - start;
      setElapsed(Math.min(e, total));
      if (e < total) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current;
    const first = timeline(QUESTIONS[0]);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play(first.typed, first.end);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [play]);

  function ask(i: number) {
    setQi(i);
    setHover(null);
    setView("3d");
    play(0, timeline(QUESTIONS[i]).end);
  }

  function toggleView() {
    setView((v) => (v === "3d" ? "2d" : "3d"));
    setHover(null);
    play(t.analyzed, t.end); // regrow the bars in the new view
  }

  const typedText = q.question.slice(0, Math.floor(elapsed / TYPE_MS));
  const analyzing = elapsed >= t.typed && elapsed < t.analyzed;
  const answered = elapsed >= t.analyzed;
  const grow = (i: number) => ease(clamp((elapsed - t.analyzed - i * STAGGER_MS) / GROW_MS));
  const topVal = Math.max(...q.data.map((d) => d.v));
  const sel = hover !== null ? q.data[hover] : null;
  const chartProps = { q, grow, hover, setHover };

  return (
    <figure ref={root} className="rounded-2xl bg-[#141415] text-[#ededed] shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 h-12 border-b border-white/[0.08] text-xs text-[#85858b]">
        <span className="font-medium text-[#ededed]">PRISM</span>
        <span className="font-mono truncate">{q.meta}</span>
      </div>

      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-white/[0.08]">
          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#85858b]">Try a question</span>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Sample questions">
              {QUESTIONS.map((item, i) => (
                <button
                  key={item.chip}
                  type="button"
                  onClick={() => ask(i)}
                  aria-pressed={i === qi}
                  className={`h-8 px-3 rounded-lg text-xs border transition-[color,background-color,transform] duration-150 active:scale-[0.97] ${
                    i === qi
                      ? "bg-[#ededed] text-[#141415] border-transparent"
                      : "bg-[#1c1c1f] text-[#a1a1a6] border-white/[0.08] hover:text-[#ededed] hover:bg-[#232325]"
                  }`}
                >
                  {item.chip}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 min-h-12">
            <span className="mt-0.5 text-[#85858b]"><Mic /></span>
            <p>
              <span aria-hidden="true">{typedText}</span>
              <span className="sr-only">{q.question}</span>
            </p>
          </div>

          <div className="relative rounded-xl bg-[#1c1c1f] border border-white/[0.06] p-5">
            {/* Analyzing status, shown before the answer arrives */}
            <div
              className={`absolute inset-5 flex flex-col justify-center gap-3 transition-opacity duration-200 ${analyzing ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              aria-hidden={!analyzing}
            >
              <p className="font-mono text-xs text-[#85858b]">Analyzing {q.file}</p>
              <span className="block h-0.5 rounded-full bg-[#232325] overflow-hidden">
                <span
                  className="block h-full bg-[#8ea2ee] origin-left"
                  style={{ transform: `scaleX(${clamp((elapsed - t.typed) / ANALYZE_MS)})` }}
                />
              </span>
            </div>

            <div
              className={`transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                answered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              aria-live="polite"
            >
              <p className="text-[#a1a1a6] leading-relaxed">
                {q.answer[0]}
                <span className="font-medium text-[#ededed] tabular-nums">{q.answer[1]}</span>
                {q.answer[2]}
              </p>
              <p className="mt-4 font-mono text-xs text-[#85858b]">
                <span className="text-[#a9b8f2]">Σ</span> Computed with pandas from {q.file}
              </p>
              <button
                type="button"
                onClick={toggleView}
                className="mt-5 hidden sm:inline-flex items-center h-8 px-3 rounded-lg bg-[#232325] border border-white/[0.08] text-xs text-[#ededed] hover:bg-[#2b2b2f] transition-[background-color,transform] duration-150 active:scale-[0.97]"
              >
                {view === "3d" ? "View in 2D" : "View in 3D"}
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 px-6 py-8 md:px-10 flex flex-col gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs text-[#85858b]">{q.title}</p>
            <p className="hidden sm:block font-mono text-xs text-[#85858b] tabular-nums min-h-4">
              {sel ? (
                <>
                  <span className="text-[#ededed]">{sel.name}</span> · {fmt(sel.v)} {q.unit}
                  {sel.v !== topVal && ` · ${Math.round((sel.v / topVal) * 100)}% of the top`}
                </>
              ) : (
                "Select a bar"
              )}
            </p>
          </div>

          <div className="hidden sm:grid">
            <div className={`[grid-area:1/1] transition-opacity duration-300 ${view === "3d" ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-hidden={view !== "3d"}>
              <IsoChart {...chartProps} />
            </div>
            <div className={`[grid-area:1/1] self-center transition-opacity duration-300 ${view === "2d" ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-hidden={view !== "2d"}>
              <FlatChart {...chartProps} />
            </div>
          </div>

          <ul className="sm:hidden flex flex-col gap-1">
            {q.data.map((d, i) => {
              const isTop = d.v === topVal;
              const on = hover === i;
              return (
                <li key={d.name}>
                  <button
                    type="button"
                    onClick={() => setHover(on ? null : i)}
                    aria-pressed={on}
                    aria-label={barLabel(q, d)}
                    className={`w-full grid grid-cols-[64px_1fr_48px] items-center gap-3 h-9 px-2 -mx-2 rounded-lg text-xs font-mono transition-colors ${on ? "bg-[#1c1c1f]" : ""}`}
                  >
                    <span className={`text-left ${on ? "text-[#ededed]" : "text-[#85858b]"}`}>{d.name}</span>
                    <span className="h-2 rounded-sm bg-[#232325] overflow-hidden">
                      <span
                        className={`block h-full rounded-sm origin-left ${isTop ? "bg-[#8ea2ee]" : on ? "bg-[#6a6a71]" : "bg-[#4a4a50]"}`}
                        style={{ transform: `scaleX(${(d.v / topVal) * grow(i)})` }}
                      />
                    </span>
                    <span className={`text-right tabular-nums ${isTop ? "text-[#a9b8f2]" : on ? "text-[#ededed]" : "text-[#85858b]"}`}>{fmt(d.v * grow(i))}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <figcaption className="px-5 py-3 border-t border-white/[0.08] text-xs text-[#85858b]">
        Example view with sample data
      </figcaption>
    </figure>
  );
}
