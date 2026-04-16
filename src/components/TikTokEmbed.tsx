import { useEffect } from "react";
export default function TikTokEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl rounded-4xl border border-border bg-surface/95 p-6 shadow-xl">
      <h3 className="mb-4 text-xl font-semibold text-heading">
        We are also on TikTok
      </h3>
      <blockquote
        className="rounded-3xl border border-border bg-muted/70 p-4 text-surface-foreground"
        cite="https://www.tiktok.com/@kingdom.embassy.karatina"
        data-unique-id="kingdom.embassy.karatina"
        data-embed-type="creator"
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@kingdom.embassy.karatina?refer=creator_embed"
            className="text-accent transition hover:text-primary"
          >
            @kingdom.embassy.karatina
          </a>
        </section>
      </blockquote>
    </div>
  );
}
