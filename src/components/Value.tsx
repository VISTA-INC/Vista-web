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
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="01"
          label="Why VISTA"
          title="Data access for the people who run operations, not just the people who analyze them"
          intro="Most teams rely on dashboards built for analysts, or chatbots that guess. PRISM gives frontline teams accurate answers in plain language."
        />

        <div className="grid md:grid-cols-3 border-t border-line">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className={`pt-8 pb-2 md:pr-8 ${i > 0 ? "md:pl-8 md:border-l border-line" : ""} ${
                i > 0 ? "mt-8 md:mt-0 border-t md:border-t-0" : ""
              }`}
            >
              <h3 className="text-lg font-medium text-ink">{v.title}</h3>
              <p className="mt-3 text-body leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
