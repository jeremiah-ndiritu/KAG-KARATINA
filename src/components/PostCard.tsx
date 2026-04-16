import type { Post } from "@/types/post";
import { useRef, useEffect } from "react";

interface PostCardProps {
  post: Post;
  index: number;
  allVideoRefs: React.RefObject<HTMLVideoElement[]>;
  onVideoRef: (index: number, el: HTMLVideoElement | null) => void;
}

export default function PostCard({
  post,
  index,
  allVideoRefs,
  onVideoRef,
}: PostCardProps) {
  const {
    title,
    author,
    date,
    content,
    image,
    video,
    socials = [],
    tags = [],
  } = post;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handlePlay = () => {
      (
        allVideoRefs as React.MutableRefObject<HTMLVideoElement[]>
      ).current.forEach((v) => {
        if (v && v !== vid) v.pause();
      });
    };

    vid.addEventListener("play", handlePlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(vid);

    return () => {
      vid.removeEventListener("play", handlePlay);
      observer.unobserve(vid);
    };
  }, [allVideoRefs]);

  return (
    <article className="rounded-4xl border border-border bg-surface/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {image ? (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${image}`}
          alt={title}
          className="mb-6 h-64 w-full rounded-3xl object-cover shadow-inner"
        />
      ) : null}

      {video ? (
        <div className="mb-6 overflow-hidden rounded-3xl border border-border bg-muted">
          <video
            controls
            width="100%"
            ref={(el) => {
              videoRef.current = el;
              onVideoRef(index, el);
            }}
            muted
            playsInline
            className="aspect-video w-full object-cover"
          >
            <source
              src={`${import.meta.env.VITE_BACKEND_URL}${video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-heading">{title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>By {author}</span>
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-border" />
          <span>{date}</span>
        </div>
        {content ? (
          <p className="text-surface-foreground leading-7">{content}</p>
        ) : null}

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}

        {socials.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-surface-foreground transition hover:bg-accent hover:text-white"
              >
                {s.platform}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
