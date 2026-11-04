const FACTS = [
  { title: "On-premise", text: "Raw data stays on your own servers." },
  { title: "Computed, not guessed", text: "Every number comes from code run on your data." },
  { title: "Hands-free", text: "Voice input on Meta Quest headsets." },
  { title: "Peer-reviewed", text: "Accepted at IEEE ISMAR 2026." },
];

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted mb-8">
          VISTA Inc. · Spatial data intelligence
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-ink max-w-4xl">
          Answers from your operational data, where the work happens.
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-body max-w-2xl">
          PRISM is a voice-driven data assistant for mixed reality. Your team
          asks a question out loud and gets a clear answer, a chart, and a 3D
          view they can explore. No analyst, no dashboard training.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-ink text-paper text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Request a pilot
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-line text-ink text-sm font-medium hover:bg-canvas transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="border-t border-line bg-canvas">
        <dl className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {FACTS.map((fact) => (
            <div key={fact.title} className="bg-canvas px-6 py-8">
              <dt className="text-sm font-semibold text-ink">{fact.title}</dt>
              <dd className="mt-1 text-sm text-muted leading-relaxed">{fact.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
