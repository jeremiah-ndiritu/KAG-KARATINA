// PostCard.jsx
import "../styles/PostCard.css";
import { useRef, useEffect } from "react";

export default function PostCard({ post, index, allVideoRefs }) {
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

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const vid = videoRef.current;

    // Pause other videos when this one plays
    const handlePlay = () => {
      allVideoRefs.current.forEach((v) => {
        if (v && v !== vid) v.pause();
      });
    };

    vid.addEventListener("play", handlePlay);

    // IntersectionObserver to autoplay when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {}); // ignore autoplay errors
        } else {
          vid.pause();
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(vid);

    return () => {
      vid.removeEventListener("play", handlePlay);
      observer.unobserve(vid);
    };
  }, [allVideoRefs]);

  return (
    <div className="post-card">
      {image && (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${image}`}
          alt={title}
          className="post-image"
        />
      )}

      {video && (
        <div className="post-video">
          <video
            controls
            width="100%"
            ref={(el) => {
              videoRef.current = el;
              allVideoRefs.current[index] = el; // store in parent ref array
            }}
            muted
            playsInline
          >
            <source
              src={`${import.meta.env.VITE_BACKEND_URL}${video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="post-content">
        <h3>{title}</h3>
        <p className="author">By {author}</p>
        <p className="date">{date}</p>
        {content && <p className="content">{content}</p>}

        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {socials.length > 0 && (
          <div className="social-links">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social ${s.platform}`}
              >
                {s.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
