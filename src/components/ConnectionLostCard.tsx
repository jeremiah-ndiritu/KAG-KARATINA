export default function ConnectionLostCard() {
  return (
    <div className="rounded-4xl border border-border bg-muted/80 p-8 text-center shadow-sm">
      <h4 className="text-xl font-semibold text-heading">
        You are not connected to the internet
      </h4>
      <p className="mt-3 text-sm leading-7 text-surface-foreground">
        Please check your connection and try again.
      </p>
    </div>
  );
}
