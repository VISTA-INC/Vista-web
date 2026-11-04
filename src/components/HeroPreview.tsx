// A coded preview of the PRISM headset panels: the spoken question, the answer
// with its source line, and the same numbers as an isometric 3D bar chart.
// Colors match the PRISM app design spec (graphite panels, one navy accent).

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

const NEUTRAL = { top: "#4a4a50", front: "#38383d", side: "#2b2b2f" };
const ACCENT = { top: "#8ea2ee", front: "#5d77d6", side: "#4560c2" };

function IsoChart() {
  const plate: P[] = [
    [-20, -20, 0],
    [(DATA.length - 1) * GAP + W + 20, -20, 0],
    [(DATA.length - 1) * GAP + W + 20, W + 20, 0],
    [-20, W + 20, 0],
  ];

  return (
    <svg viewBox="-88 -104 452 330" className="w-full h-auto" role="img" aria-label="3D bar chart of energy use by machine. Press 4 is highest at 861 kWh.">
      <polygon points={pts(plate)} fill="#1c1c1f" stroke="rgba(237,237,237,0.08)" />
      {DATA.map((d, i) => {
        const x = i * GAP;
        const h = (d.kwh / TOP) * MAX_H;
        const top = d.kwh === TOP;
        const c = top ? ACCENT : NEUTRAL;
        const [lx, ly] = project([x + W / 2, W + 14, 0]);
        const [vx] = project([x + W / 2, W / 2, h]);
        const vy = project([x, 0, h])[1];
        return (
          <g key={d.name}>
            <polygon points={pts([[x + W, 0, 0], [x + W, W, 0], [x + W, W, h], [x + W, 0, h]])} fill={c.side} />
            <polygon points={pts([[x, W, 0], [x + W, W, 0], [x + W, W, h], [x, W, h]])} fill={c.front} />
            <polygon points={pts([[x, 0, h], [x + W, 0, h], [x + W, W, h], [x, W, h]])} fill={c.top} />
            <text x={vx} y={vy - 10} textAnchor="middle" className="font-mono tabular-nums" fontSize="11" fill={top ? "#a9b8f2" : "#85858b"}>
              {d.kwh}
            </text>
            <text x={lx - 6} y={ly + 10} textAnchor="end" className="font-mono" fontSize="10" fill="#85858b">
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
    <figure className="rounded-2xl bg-[#141415] text-[#ededed] shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 h-12 border-b border-white/[0.08] text-xs text-[#85858b]">
        <span className="font-medium text-[#ededed]">PRISM</span>
        <span className="font-mono truncate">energy_log.csv · 5 machines · 7 days</span>
      </div>

      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-white/[0.08]">
          <div className="flex gap-3">
            <span className="mt-0.5 text-[#85858b]"><Mic /></span>
            <p>Which machine used the most energy this week?</p>
          </div>
          <div className="rounded-xl bg-[#1c1c1f] border border-white/[0.06] p-5">
            <p className="text-[#a1a1a6] leading-relaxed">
              Press 4 used the most energy this week:{" "}
              <span className="font-medium text-[#ededed] tabular-nums">861 kWh</span>, about
              twice the average of the other four machines.
            </p>
            <p className="mt-4 font-mono text-xs text-[#85858b]">
              <span className="text-[#a9b8f2]">Σ</span> Computed with pandas from energy_log.csv
            </p>
            <span className="mt-5 inline-flex items-center h-8 px-3 rounded-lg bg-[#232325] border border-white/[0.08] text-xs text-[#ededed]">
              View in 3D
            </span>
          </div>
        </div>

        <div className="md:col-span-7 px-6 py-8 md:px-10 flex flex-col gap-4">
          <p className="text-xs text-[#85858b]">Energy use by machine, kWh</p>
          <div className="hidden sm:block">
            <IsoChart />
          </div>
          <ul className="sm:hidden flex flex-col gap-3">
            {DATA.map((d) => (
              <li key={d.name} className="grid grid-cols-[64px_1fr_40px] items-center gap-3 text-xs font-mono">
                <span className="text-[#85858b]">{d.name}</span>
                <span className="h-2 rounded-sm bg-[#232325]">
                  <span
                    className={`block h-full rounded-sm ${d.kwh === TOP ? "bg-[#8ea2ee]" : "bg-[#4a4a50]"}`}
                    style={{ width: `${(d.kwh / TOP) * 100}%` }}
                  />
                </span>
                <span className={`text-right tabular-nums ${d.kwh === TOP ? "text-[#a9b8f2]" : "text-[#85858b]"}`}>{d.kwh}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="px-5 py-3 border-t border-white/[0.08] text-xs text-[#85858b]">
        Example view with sample data
      </figcaption>
    </figure>
  );
}
