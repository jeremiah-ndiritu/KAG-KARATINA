// SermonCard.jsx
import "../styles/SermonCard.css";
export default function SermonCard({ sermon }) {
  const { title, speaker, date, message, video, image, videos } = sermon;

  return (
    <div className="card">
      {image && <img src={image} alt={title} className="sermon-image" />}
      <div className="card-content">
        <div className="desc">
          <h3>{title}</h3>
          <p className="speaker">By {speaker}</p>
          <p className="date">{date}</p>
          {message && <p className="message">{message}</p>}
        </div>
        {video && (
          <video controls className="sermon-video">
            <source
              src={`${import.meta.env.VITE_BACKEND_URL}${video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {videos && videos.length > 0 && (
          <div className="social-links">
            {videos.map((v, idx) => (
              <a
                key={idx}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-${v.social}`}
              >
                {v.social}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
