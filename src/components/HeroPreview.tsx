// A coded preview of what PRISM shows in the headset: the spoken question,
// the answer, and the same numbers as an isometric 3D bar chart.

const DATA = [
  { name: "Press 1", kwh: 412 },
  { name: "Press 2", kwh: 538 },
  { name: "CNC 3", kwh: 296 },
  { name: "Press 4", kwh: 861 },
  { name: "Lathe 5", kwh: 344 },
];

const TOP = Math.max(...DATA.map((d) => d.kwh));
const C = Math.cos(Math.PI / 6);
const S = 0.5;
const W = 32;
const GAP = 84;
const MAX_H = 150;

type P = [number, number, number];
const project = ([x, y, z]: P) => [(x - y) * C, (x + y) * S - z] as const;
const pts = (list: P[]) => list.map((p) => project(p).join(",")).join(" ");

const NEUTRAL = { top: "#f4f4f5", front: "#e4e4e7", side: "#d4d4d8" };
const ACCENT = { top: "#3c55b0", front: "#1e3a8a", side: "#172d6b" };

function IsoChart() {
  const plate: P[] = [
    [-20, -20, 0],
    [(DATA.length - 1) * GAP + W + 20, -20, 0],
    [(DATA.length - 1) * GAP + W + 20, W + 20, 0],
    [-20, W + 20, 0],
  ];

  return (
    <svg viewBox="-88 -104 452 330" className="w-full h-auto" role="img" aria-label="3D bar chart of energy use by machine. Press 4 is highest at 861 kWh.">
      <polygon points={pts(plate)} fill="#fafafa" stroke="#e4e4e7" />
      {DATA.map((d, i) => {
        const x = i * GAP;
        const h = (d.kwh / TOP) * MAX_H;
        const c = d.kwh === TOP ? ACCENT : NEUTRAL;
        const [lx, ly] = project([x + W / 2, W + 14, 0]);
        const [vx] = project([x + W / 2, W / 2, h]);
        const vy = project([x, 0, h])[1];
        return (
          <g key={d.name}>
            <polygon points={pts([[x + W, 0, 0], [x + W, W, 0], [x + W, W, h], [x + W, 0, h]])} fill={c.side} />
            <polygon points={pts([[x, W, 0], [x + W, W, 0], [x + W, W, h], [x, W, h]])} fill={c.front} />
            <polygon points={pts([[x, 0, h], [x + W, 0, h], [x + W, W, h], [x, W, h]])} fill={c.top} />
            <text x={vx} y={vy - 10} textAnchor="middle" className="font-mono tabular-nums" fontSize="11" fill={d.kwh === TOP ? "#1e3a8a" : "#71717a"}>
              {d.kwh}
            </text>
            <text x={lx - 6} y={ly + 10} textAnchor="end" className="font-mono" fontSize="10" fill="#71717a">
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
  return (
    <figure className="rounded-2xl border border-line bg-paper shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-5 h-12 border-b border-line text-xs text-muted">
        <span className="font-medium text-ink">PRISM</span>
        <span className="font-mono">Plant floor · Line 2</span>
      </div>

      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-line">
          <div className="flex gap-3">
            <span className="mt-0.5 text-muted"><Mic /></span>
            <p className="text-ink">Which machine used the most energy this week?</p>
          </div>
          <div className="rounded-xl bg-canvas p-5">
            <p className="text-body leading-relaxed">
              Press 4 used the most energy this week:{" "}
              <span className="font-medium text-ink tabular-nums">861 kWh</span>, about
              twice the average of the other four machines.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              <span className="text-accent">Σ</span> Computed with pandas from energy_log.csv
            </p>
          </div>
        </div>

        <div className="md:col-span-7 px-6 py-8 md:px-10 flex flex-col gap-4">
          <p className="text-xs text-muted">Energy use by machine, kWh, last 7 days</p>
          <div className="hidden sm:block">
            <IsoChart />
          </div>
          <ul className="sm:hidden flex flex-col gap-3">
            {DATA.map((d) => (
              <li key={d.name} className="grid grid-cols-[64px_1fr_40px] items-center gap-3 text-xs font-mono">
                <span className="text-muted">{d.name}</span>
                <span className="h-2 rounded-sm bg-zinc-100">
                  <span
                    className={`block h-full rounded-sm ${d.kwh === TOP ? "bg-accent" : "bg-zinc-300"}`}
                    style={{ width: `${(d.kwh / TOP) * 100}%` }}
                  />
                </span>
                <span className={`text-right tabular-nums ${d.kwh === TOP ? "text-accent" : "text-muted"}`}>{d.kwh}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="px-5 py-3 border-t border-line text-xs text-muted">
        Example view with sample data
      </figcaption>
    </figure>
  );
}
