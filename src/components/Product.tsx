const STEPS = [
  {
    number: "01",
    title: "Ask",
    description: '"Pinch, speak naturally: "Which machine uses the most energy?"',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Understand",
    description: "Get a plain-English answer, read aloud to you.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "See",
    description: "A clear chart appears instantly in your view.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 17V13M12 17V7M17 17V11" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Explore",
    description: "Open it as a 3D graph: touch, grab, zoom.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    title: "Voice-First Input",
    description: "Pinch-to-talk, completely hands-free. No typing, no menus.",
    icon: "🎙️",
  },
  {
    title: "Grounded in Real Data",
    description: "AI writes analysis code. It never guesses the numbers.",
    icon: "🔒",
  },
  {
    title: "Your Data Stays Yours",
    description: "Your raw data never leaves your network. AI only sees the question. All computation happens locally on your own server.",
    icon: "🛡️",
  },
  {
    title: "Interactive 3D Graphs",
    description: "Touch, move, and zoom spatial charts in the room with you.",
    icon: "🧊",
  },
  {
    title: "Works Where You Work",
    description: "On the factory floor with a headset, not stuck at a desk.",
    icon: "🏭",
  },
  {
    title: "No Training Needed",
    description: "Speak naturally. No data skills, no learning curve.",
    icon: "✨",
  },
  {
    title: "Multiple Chart Types",
    description: "Bar, pie, line, and scatter, in both 2D and 3D.",
    icon: "📊",
  },
];

export default function Product() {
  return (
    <section id="product" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-sm text-indigo-600">
            Our Product
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Meet{" "}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              PRISM
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A mixed-reality data assistant for Meta Quest. Ask a question out
            loud, get a plain-English answer and a chart, then open that chart
            as a 3D graph you can touch, move, and explore.
          </p>
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="reveal group relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-indigo-100 text-5xl font-bold absolute top-4 right-4">
                {step.number}
              </div>
              <div className="text-indigo-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="reveal text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Feature Highlights
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need to go from question to insight, without leaving
            the floor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="reveal group p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
