type Props = {
  index?: string;
  label: string;
  title: string;
  intro?: string;
};

// A short sans headline, then the intro set in the serif as one editorial line.
export default function SectionHeader({ label, title, intro }: Props) {
  return (
    <div data-animate="stagger" className="grid gap-4 md:gap-6 md:grid-cols-12 mb-10 md:mb-14">
      <p className="md:col-span-3 text-sm text-muted md:pt-3">{label}</p>
      <div className="md:col-span-9">
        <h2 className="text-3xl md:text-[44px] font-semibold tracking-[-0.015em] leading-[1.12] text-ink max-w-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 font-serif text-xl md:text-2xl leading-snug text-body max-w-3xl">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
