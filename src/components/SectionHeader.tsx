type Props = {
  index: string;
  label: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({ index, label, title, intro }: Props) {
  return (
    <div data-animate="stagger" className="grid gap-4 md:gap-6 md:grid-cols-12 mb-10 md:mb-16">
      <p className="md:col-span-3 text-sm text-muted md:pt-2">
        <span className="font-mono text-accent mr-3">{index}</span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-[-0.02em] leading-[1.15] text-ink max-w-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 text-lg leading-relaxed text-body max-w-2xl">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
