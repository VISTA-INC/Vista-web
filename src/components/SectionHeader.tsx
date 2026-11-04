type Props = {
  index: string;
  label: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({ index, label, title, intro }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-12 mb-14 md:mb-20">
      <p className="md:col-span-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        <span className="font-mono text-accent">{index}</span>
        <span className="mx-2 text-line">/</span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-3xl">
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
