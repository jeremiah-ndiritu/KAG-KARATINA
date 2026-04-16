import type { Sermon } from "@/types/sermon";

export default function SermonCard({ sermon }: { sermon: Sermon }) {
  const { title, speaker, date, message, video, image, videos } = sermon;

  return (
    <article className="rounded-4xl border border-border bg-surface/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {image ? (
        <img
          src={image}
          alt={title}
          className="mb-6 h-64 w-full rounded-3xl object-cover"
        />
      ) : null}

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-heading">{title}</h3>
          <p className="text-sm font-medium text-muted-foreground">
            By {speaker}
          </p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>

        {message ? (
          <p className="text-surface-foreground leading-7">{message}</p>
        ) : null}

        {video ? (
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            <video controls className="aspect-video w-full object-cover">
              <source
                src={`${import.meta.env.VITE_BACKEND_URL}${video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}

        {videos && videos.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {videos.map((v, idx) => (
              <a
                key={idx}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-surface-foreground transition hover:bg-primary hover:text-primary-foreground"
              >
                {v.social}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
