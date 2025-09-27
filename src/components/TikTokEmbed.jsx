import { useEffect } from "react";
import "../styles/TikTokEmbed.css";
export default function TikTokEmbed() {
  useEffect(() => {
    // Load TikTok embed script dynamically
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tiktok-container">
      <h3>We are also in TikTok</h3>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@kingdom.embassy.karatina"
        data-unique-id="kingdom.embassy.karatina"
        data-embed-type="creator"
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@kingdom.embassy.karatina?refer=creator_embed"
          >
            @kingdom.embassy.karatina
          </a>
        </section>
      </blockquote>
    </div>
  );
}
