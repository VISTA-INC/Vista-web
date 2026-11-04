import SectionHeader from "./SectionHeader";

const PATHS = [
  {
    type: "Data question",
    example: "\"Show average energy use by machine\"",
    steps: ["AI writes pandas code", "Code runs on your real data", "Chart and interactive 3D graph"],
  },
  {
    type: "Savings question",
    example: "\"What if I add $200 a month for 20 years?\"",
    steps: ["Exact math computation", "No AI involved in the figures", "3D savings bars rebuild"],
  },
  {
    type: "General question",
    example: "\"What is compound interest?\"",
    steps: ["AI generates the answer", "Answer is read aloud", "Shown in the chat panel"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="04"
          label="How it works"
          title="From voice to verified answer in seconds"
          intro="Speech is transcribed (Whisper or Gemini) and the question is classified. PRISM then routes it to the right pipeline."
        />

        <div data-animate="stagger" className="rounded-xl overflow-hidden bg-card">
          {PATHS.map((p, i) => (
            <div
              key={p.type}
              className={`grid gap-4 md:grid-cols-12 p-6 md:p-8 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <div className="md:col-span-4">
                <h3 className="font-medium text-ink">{p.type}</h3>
                <p className="mt-1 text-sm text-muted">{p.example}</p>
              </div>
              <ol data-animate="stagger" className="md:col-span-8 grid sm:grid-cols-3 gap-3 text-sm">
                {p.steps.map((s, j) => (
                  <li key={s} className="flex gap-3 text-body">
                    <span className="font-mono text-xs text-accent pt-0.5">{j + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div id="security" data-animate="fade" className="mt-16 grid gap-6 md:grid-cols-12">
          <h3 className="md:col-span-3 text-sm font-medium text-ink">Accuracy and security</h3>
          <p className="md:col-span-9 text-body leading-relaxed max-w-3xl">
            For chart questions, the AI only writes the analysis code. Pandas
            runs it on the real dataset, and the result is cached so the 3D
            graph reuses the exact same numbers. Financial calculations use
            direct math with no AI involved. Your raw data never leaves your
            local server; the AI only sees the question.
          </p>
        </div>
      </div>
    </section>
  );
}
