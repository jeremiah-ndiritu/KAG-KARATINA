import { Link as Facebook, Video } from "lucide-react";
export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 text-surface-foreground">
      <a
        href="https://www.facebook.com/K.A.G.Karatina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-accent transition hover:bg-accent hover:text-white"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://www.tiktok.com/@kingdom.embassy.karatina?refer=creator_embed"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-accent transition hover:bg-accent hover:text-white"
      >
        <Video size={20} />
      </a>
    </div>
  );
}
