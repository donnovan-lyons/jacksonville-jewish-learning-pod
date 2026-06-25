export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-cream/40">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20">
        {eyebrow && (
          <div className="mb-5 text-[11px] uppercase tracking-[0.22em] text-ochre">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl text-balance text-ink md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
