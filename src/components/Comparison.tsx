import SectionHeader from "./SectionHeader";

type Cell = { ok: boolean; label: string };

const ROWS: { feature: string; bi: Cell; chatbot: Cell; prism: Cell }[] = [
  {
    feature: "Ask in your own words",
    bi: { ok: false, label: "No" },
    chatbot: { ok: true, label: "Yes" },
    prism: { ok: true, label: "Voice, hands-free" },
  },
  {
    feature: "No training needed",
    bi: { ok: false, label: "No" },
    chatbot: { ok: true, label: "Yes" },
    prism: { ok: true, label: "Yes" },
  },
  {
    feature: "Numbers from real data",
    bi: { ok: true, label: "Yes" },
    chatbot: { ok: false, label: "Often guessed" },
    prism: { ok: true, label: "Computed by code" },
  },
  {
    feature: "Visual answer",
    bi: { ok: true, label: "Yes" },
    chatbot: { ok: false, label: "Rarely" },
    prism: { ok: true, label: "Chart and interactive 3D" },
  },
  {
    feature: "Works on the floor",
    bi: { ok: false, label: "Desk only" },
    chatbot: { ok: false, label: "Desk or phone" },
    prism: { ok: true, label: "Headset, hands-free" },
  },
  {
    feature: "Data stays on-premise",
    bi: { ok: true, label: "Usually" },
    chatbot: { ok: false, label: "Sent to cloud AI" },
    prism: { ok: true, label: "Raw data never leaves" },
  },
];

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-ink shrink-0" aria-label="Yes">
      <path d="M5 12l5 5L20 7" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-300 shrink-0" aria-label="No">
      <path d="M6 12h12" />
    </svg>
  );
}

function Td({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  return (
    <td className={`px-4 py-4 text-sm ${highlight ? "bg-canvas" : ""}`}>
      <span className="flex items-center gap-2.5">
        <Mark ok={cell.ok} />
        <span className={cell.ok ? (highlight ? "text-ink font-medium" : "text-body") : "text-muted"}>
          {cell.label}
        </span>
      </span>
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="03"
          label="Comparison"
          title="How PRISM compares to the tools teams use today"
        />

        <div className="overflow-x-auto border border-line rounded-xl">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="px-4 py-4 text-sm font-normal text-muted">Capability</th>
                <th className="px-4 py-4 text-sm font-normal text-muted">BI dashboard</th>
                <th className="px-4 py-4 text-sm font-normal text-muted">AI chatbot</th>
                <th className="px-4 py-4 text-sm font-medium text-ink bg-canvas">PRISM</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-0">
                  <td className="px-4 py-4 text-sm font-medium text-ink">{row.feature}</td>
                  <Td cell={row.bi} />
                  <Td cell={row.chatbot} />
                  <Td cell={row.prism} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
