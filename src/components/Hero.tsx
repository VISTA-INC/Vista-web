import HeroPreview from "./HeroPreview";

const FACTS = [
  { title: "On-premise", text: "Raw data stays on your own servers" },
  { title: "Computed, not guessed", text: "Every number comes from code run on your data" },
  { title: "Hands-free", text: "Voice input on Meta Quest headsets" },
  { title: "Peer-reviewed", text: "Accepted at IEEE ISMAR 2026" },
];

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        <h1 className="text-[30px] sm:text-4xl lg:text-[46px] leading-[1.17] tracking-[-0.01em] text-ink max-w-5xl">
          <span className="font-semibold">Answers from your operational data, where the work happens.</span>{" "}
          <span className="font-serif">
            PRISM is a voice data assistant for Meta Quest. Ask a question out loud and get a chart and a
            3D view, computed from your own data.
          </span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-[#30302e] transition-colors"
          >
            Request a pilot
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-btn text-ink text-sm font-medium hover:bg-[#dedbd0] transition-colors"
          >
            See how it works →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-0 sm:px-6 mt-12 md:mt-16">
        <div className="bg-canvas sm:rounded-2xl p-4 sm:p-8 md:p-12">
          <HeroPreview />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-4">
        <dl data-animate="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FACTS.map((fact) => (
            <div key={fact.title} className="bg-card rounded-xl px-5 py-5">
              <dt className="text-sm font-semibold text-ink">{fact.title}</dt>
              <dd className="mt-1 text-sm text-muted leading-relaxed">{fact.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
