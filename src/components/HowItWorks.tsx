const PATHS = [
  {
    label: "Data Question",
    color: "#6366f1",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-200",
    example: '"Show average energy use by machine"',
    steps: [
      "AI writes pandas code",
      "Code computes from real data",
      "Chart + interactive 3D graph",
    ],
  },
  {
    label: "Savings Question",
    color: "#8b5cf6",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-200",
    example: '"What if I add $200/month for 20 years?"',
    steps: [
      "Exact math computation",
      "No AI guessing involved",
      "3D savings bars rebuild",
    ],
  },
  {
    label: "General Question",
    color: "#06b6d4",
    bgLight: "bg-cyan-50",
    borderLight: "border-cyan-200",
    example: '"What is compound interest?"',
    steps: [
      "AI generates answer",
      "Answer read aloud",
      "Appears in chat panel",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 text-sm text-cyan-700">
            Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From voice to visualization in seconds. PRISM routes your question
            to the right pipeline. Every number is computed, never guessed.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="reveal max-w-4xl mx-auto mb-16">
          {/* Input stage */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/25">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">You Speak</h3>
            <p className="text-gray-500 text-sm">Pinch & hold, ask your question</p>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-4">
            <div className="w-px h-8 bg-gradient-to-b from-indigo-400 to-indigo-200" />
          </div>

          {/* Processing stage */}
          <div className="flex flex-col items-center mb-4">
            <div className="px-6 py-3 rounded-xl border border-gray-200 bg-white shadow-sm mb-4">
              <span className="text-sm text-gray-600">
                Voice → Text (Whisper / Gemini) → Question Classified
              </span>
            </div>
          </div>

          {/* Arrow splits into three */}
          <div className="flex justify-center mb-4">
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-gray-200" />
          </div>

          {/* Three paths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PATHS.map((path) => (
              <div
                key={path.label}
                className={`relative p-6 rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${path.borderLight}`}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${path.color}15`,
                    color: path.color,
                    border: `1px solid ${path.color}40`,
                  }}
                >
                  {path.label}
                </div>

                <p className="text-gray-500 text-sm italic mt-3 mb-4">
                  {path.example}
                </p>

                <div className="space-y-3">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{
                          backgroundColor: `${path.color}15`,
                          color: path.color,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust callout */}
        <div className="reveal max-w-3xl mx-auto text-center p-8 rounded-2xl border border-indigo-200 bg-indigo-50">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Accurate and Secure by Design
          </h3>
          <p className="text-gray-600 leading-relaxed">
            For chart questions, the AI only writes the analysis code. Pandas
            runs it on the real dataset. The result is cached so the 3D graph
            reuses the exact same numbers. Financial calculations use direct math
            with no AI involved. Your raw data never leaves your local server.
            The AI only sees the question, never the underlying dataset.
          </p>
        </div>
      </div>
    </section>
  );
}
