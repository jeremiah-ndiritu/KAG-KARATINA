import SermonCard from "../components/SermonCard";

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h2>Welcome to KAG Karatina</h2>
        <p>Your spiritual home for worship, learning, and fellowship.</p>
      </section>

      <section className="latest-sermons">
        <h2>Latest Sermons</h2>
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
      </section>
    </div>
  );
}
