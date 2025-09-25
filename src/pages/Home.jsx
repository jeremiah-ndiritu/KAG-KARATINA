import SermonCard from "../components/SermonCard";
import TikTokEmbed from "../components/TikTokEmbed";
import "../styles/Home.css";
import Posts from "./Posts";
export default function Home({ sermons, posts }) {
  return (
    <div className="page home">
      <TikTokEmbed />
      <section className="hero">
        <div className="hero-overly">
          <h2>Welcome to KAG Karatina</h2>
          <p>Where every soul matters</p>
          <a href="/sermons" className="cta-button">
            Watch Sermon
          </a>
        </div>
      </section>

      <section className="latest-sermons">
        {sermons
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((s) => {
            return <SermonCard key={s.id} sermon={s} />;
          })}
      </section>
      <section className="posts">
        <h3>Posts</h3>
        <Posts posts={posts} />
      </section>
    </div>
  );
}
