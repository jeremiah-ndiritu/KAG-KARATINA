import SermonCard from "../components/SermonCard";

export default function Sermons() {
  return (
    <div className="page sermons">
      <h2>All Sermons</h2>
      <SermonCard
        title="Faith Over Fear"
        speaker="Pastor John"
        date="Sep 22, 2025"
      />
      <SermonCard
        title="Walking in Love"
        speaker="Pastor Mary"
        date="Sep 15, 2025"
      />
      <SermonCard
        title="Living in Grace"
        speaker="Pastor Peter"
        date="Sep 08, 2025"
      />
    </div>
  );
}
