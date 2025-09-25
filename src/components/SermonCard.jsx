export default function SermonCard({ title, speaker, date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>By {speaker}</p>
      <p>{date}</p>
    </div>
  );
}
