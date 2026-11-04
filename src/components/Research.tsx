import SectionHeader from "./SectionHeader";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="05"
          label="Research"
          title="Built on peer-reviewed work."
        />

        <div className="grid gap-6 md:grid-cols-12 border-t border-line pt-8">
          <div className="md:col-span-3">
            <p className="text-2xl font-semibold tracking-tight text-ink">ISMAR 2026</p>
            <p className="mt-1 text-sm text-muted">Poster paper</p>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <p className="font-medium text-ink">
              IEEE International Symposium on Mixed and Augmented Reality
            </p>
            <p className="mt-3 text-body leading-relaxed">
              PRISM was accepted as a poster paper at ISMAR 2026, the leading
              academic venue for mixed and augmented reality research. The
              acceptance validates our approach to voice-driven, spatially
              grounded data visualization.
            </p>
            <p className="mt-6 text-sm text-muted">
              Mixed reality · Data visualization · Voice interaction · Spatial computing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
