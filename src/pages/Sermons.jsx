import SermonCard from "../components/SermonCard";
export default function Sermons({ sermons }) {
  return (
    <div className="page sermons">
      <h2>All Sermons</h2>
      {sermons
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((s) => {
          return <SermonCard key={s.id} sermon={s} />;
        })}
    </div>
  );
}
