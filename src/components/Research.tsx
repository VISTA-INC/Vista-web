export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 text-sm text-cyan-700">
            Academic Recognition
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Academically Validated
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            PRISM isn&apos;t just a product. It&apos;s a research contribution
            accepted by the world&apos;s leading mixed reality conference.
          </p>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Conference badge */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-cyan-50 border border-gray-200 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                    ISMAR
                  </span>
                  <span className="text-sm text-gray-500">2026</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Poster Paper, ISMAR 2026
                </h3>
                <p className="text-gray-500 text-sm mb-1">
                  IEEE International Symposium on Mixed and Augmented Reality
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  PRISM was accepted as a poster paper at ISMAR 2026, the
                  premier academic venue for mixed and augmented reality
                  research. This validates our approach to voice-driven, spatially
                  grounded data visualization as a genuine scientific
                  contribution to the field.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-600">
                    Mixed Reality
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-600">
                    Data Visualization
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-600">
                    Voice Interaction
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-600">
                    Spatial Computing
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
