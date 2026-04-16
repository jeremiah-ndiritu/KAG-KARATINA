export default function ServiceCard({
  day,
  title,
  time,
  description,
}: {
  day: string;
  title: string;
  time: string;
  description: string;
}) {
  return (
    <article className="rounded-4xl border border-border bg-surface/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        {day}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-heading">{title}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{time}</p>
      <p className="mt-4 text-sm leading-7 text-surface-foreground">
        {description}
      </p>
    </article>
  );
}
