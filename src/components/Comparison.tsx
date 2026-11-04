const ROWS = [
  {
    feature: "Ask in your own words",
    bi: { value: false, label: "No" },
    chatbot: { value: true, label: "Yes" },
    prism: { value: true, label: "Voice, hands-free" },
  },
  {
    feature: "No training needed",
    bi: { value: false, label: "No" },
    chatbot: { value: true, label: "Yes" },
    prism: { value: true, label: "Yes" },
  },
  {
    feature: "Numbers from real data",
    bi: { value: true, label: "Yes" },
    chatbot: { value: false, label: "Often guessed" },
    prism: { value: true, label: "AI writes code, code computes" },
  },
  {
    feature: "Visual answer",
    bi: { value: true, label: "Yes" },
    chatbot: { value: false, label: "Rarely" },
    prism: { value: true, label: "Chart + interactive 3D" },
  },
  {
    feature: "Works on the floor",
    bi: { value: false, label: "Desk only" },
    chatbot: { value: false, label: "Desk / phone" },
    prism: { value: true, label: "Headset, hands-free" },
  },
  {
    feature: "Data stays on-premise",
    bi: { value: true, label: "Usually" },
    chatbot: { value: false, label: "Sent to cloud AI" },
    prism: { value: true, label: "Raw data never leaves your server" },
  },
];

function StatusCell({ value, label }: { value: boolean; label: string }) {
  return (
    <td className="px-4 py-4 text-sm">
      <div className="flex items-center gap-2">
        {value ? (
          <span className="text-emerald-600 font-bold">✓</span>
        ) : (
          <span className="text-red-400">✕</span>
        )}
        <span className={value ? "text-gray-700" : "text-gray-400"}>
          {label}
        </span>
      </div>
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why PRISM?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            See how PRISM compares to the tools you already know.
          </p>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-500">
                  Feature
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-500">
                  BI Dashboard
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-500">
                  AI Chatbot
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-500">
                  <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent font-bold">
                    PRISM
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <StatusCell {...row.bi} />
                  <StatusCell {...row.chatbot} />
                  <StatusCell {...row.prism} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
