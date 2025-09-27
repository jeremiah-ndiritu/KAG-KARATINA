import "../styles/ServiceCard.css";

export default function ServiceCard({ day, title, time, description }) {
  return (
    <div className="service-card">
      <h3 className="service-day">{day}</h3>
      <h4 className="service-title">{title}</h4>
      <p className="service-time">{time}</p>
      <p className="service-description">{description}</p>
    </div>
  );
}
