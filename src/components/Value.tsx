import SectionHeader from "./SectionHeader";

const VALUES = [
  {
    title: "Decisions on the floor",
    text: "Supervisors and operators get answers on a headset, hands-free, without walking back to a desk or waiting on a report.",
  },
  {
    title: "Numbers you can trust",
    text: "The AI writes the analysis code. The code runs on your real dataset. Figures are computed, never generated.",
  },
  {
    title: "Data that stays yours",
    text: "Raw data never leaves your network. The language model only sees the question, never the underlying records.",
  },
];

export default function Value() {
  return (
    <section className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="01"
          label="Why VISTA"
          title="Data access for the people who run operations, not just the people who analyze them"
          intro="Most teams rely on dashboards built for analysts, or chatbots that guess. PRISM gives frontline teams accurate answers in plain language."
        />

        <div data-animate="stagger" className="grid md:grid-cols-3 gap-3">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 md:p-7">
              <h3 className="text-xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-body leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
