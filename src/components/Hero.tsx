import HeroPreview from "./HeroPreview";

const FACTS = [
  { title: "On-premise", text: "Raw data stays on your own servers" },
  { title: "Computed, not guessed", text: "Every number comes from code run on your data" },
  { title: "Hands-free", text: "Voice input on Meta Quest headsets" },
  { title: "Peer-reviewed", text: "Accepted at IEEE ISMAR 2026" },
];

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm text-muted mb-6">PRISM by VISTA</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.03em] leading-[1.04] text-ink">
              Answers from your operational data, where the work happens
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-body">
              Ask a question out loud on the floor. PRISM answers with a chart
              and a 3D view, computed from your own data.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Request a pilot
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-line bg-paper text-ink text-sm font-medium hover:bg-canvas transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 -mb-px">
          <HeroPreview />
        </div>
      </div>

      <div className="bg-canvas border-t border-line mt-16 md:mt-24">
        <dl className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {FACTS.map((fact) => (
            <div key={fact.title} className="bg-canvas px-6 py-8">
              <dt className="text-sm font-medium text-ink">{fact.title}</dt>
              <dd className="mt-1 text-sm text-muted leading-relaxed">{fact.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
