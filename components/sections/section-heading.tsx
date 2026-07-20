export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
