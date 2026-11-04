export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/8 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-sm text-indigo-600">
          Spatial Data Intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
          See Your Data.{" "}
          <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
            Touch Your Insights.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          VISTA builds spatial computing tools that turn complex data into
          conversations and touchable 3D visualizations. No analyst required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
          >
            Explore PRISM
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}
