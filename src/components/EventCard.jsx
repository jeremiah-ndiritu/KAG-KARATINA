export default function EventCard({ name, date, location }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
}
