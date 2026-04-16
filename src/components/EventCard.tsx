export default function EventCard({
  name,
  date,
  location,
}: {
  name: string;
  date: string;
  location: string;
}) {
  return (
    <article className="rounded-4xl border border-border bg-surface/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-xl font-semibold text-heading">{name}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{date}</p>
      <p className="mt-1 text-sm text-surface-foreground">{location}</p>
    </article>
  );
}
