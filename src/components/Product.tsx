import SectionHeader from "./SectionHeader";

const STEPS = [
  { title: "Ask", text: "Pinch and speak naturally: \"Which machine uses the most energy?\"" },
  { title: "Understand", text: "Get a plain-English answer, read aloud" },
  { title: "See", text: "A clear chart appears in your field of view" },
  { title: "Explore", text: "Open it as a 3D graph you can grab, move, and zoom" },
];

const CAPABILITIES = [
  { title: "Voice-first input", text: "Pinch to talk, with no typing or menus" },
  { title: "Grounded in real data", text: "AI writes analysis code; it never guesses the numbers" },
  { title: "Local computation", text: "All processing runs on your own server" },
  { title: "Interactive 3D graphs", text: "Spatial charts placed in the room with you" },
  { title: "Built for the floor", text: "Works on a headset, away from the desk" },
  { title: "No training required", text: "Speak naturally, no data skills needed" },
  { title: "Multiple chart types", text: "Bar, pie, line, and scatter, in 2D and 3D" },
  { title: "Meta Quest native", text: "Runs on widely available mixed-reality hardware" },
];

export default function Product() {
  return (
    <section id="product" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="02"
          label="Product"
          title="PRISM, a mixed-reality data assistant"
          intro="Ask a question out loud. Get an answer and a chart, then open that chart as a 3D graph you can touch and explore."
        />

        <ol data-animate="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16 md:mb-20">
          {STEPS.map((step, i) => (
            <li key={step.title} className="bg-card rounded-xl p-6">
              <span className="text-xs text-muted">Step {i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-body leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-6 md:grid-cols-12">
          <h3 className="md:col-span-3 text-sm font-medium text-ink">Capabilities</h3>
          <dl data-animate="stagger" className="md:col-span-9 grid sm:grid-cols-2 gap-x-10">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="py-5 border-t border-line">
                <dt className="font-medium text-ink">{c.title}</dt>
                <dd className="mt-1 text-sm text-muted leading-relaxed">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
