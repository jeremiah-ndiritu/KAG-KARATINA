// PostCard.jsx
import "../styles/PostCard.css";

export default function PostCard({ post }) {
  const {
    title,
    author,
    date,
    content,
    image,
    video,
    link,
    socials = [],
    tags = [],
  } = post;

  return (
    <div className="post-card">
      {image && <img src={image} alt={title} className="post-image" />}

      {video && (
        <div className="post-video">
          <video controls width="100%">
            <source src={video} type="video/mp4" />
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

        {link && (
          <a
            href={`#${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
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
