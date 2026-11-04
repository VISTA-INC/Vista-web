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
      <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-16">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-12 lg:items-end">
          <h1 className="lg:col-span-7 text-[34px] sm:text-[44px] lg:text-[52px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            Answers from your operational data, where the work happens
          </h1>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-body">
              PRISM is a voice data assistant for Meta Quest. Ask a question out loud and get a chart and a
              3D view, computed from your own data.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
              >
                Request a pilot
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-btn text-ink text-sm font-medium hover:bg-[#ddcfac] transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-0 sm:px-6 mt-10 md:mt-14">
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
