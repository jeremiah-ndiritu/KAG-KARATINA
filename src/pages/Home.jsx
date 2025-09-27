import { Link } from "react-router-dom";
import SermonCard from "../components/SermonCard";
import Services from "../components/Services";
import TikTokEmbed from "../components/TikTokEmbed";
import "../styles/Home.css";
import Posts from "./Posts";
export default function Home({ sermons, posts }) {
  let twoSermons = sermons
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);
  let fivePosts = posts.slice(0, 5);
  return (
    <div className="page home">
      <Services />
      <div className="cta">
        <p>
          <span>Isaiah 56:7 (NIV)</span> These I will bring to my holy mountain
          and give them joy in my house of prayer. Their burnt offerings and
          sacrifices will be accepted on my altar; for my house will be called a
          house of prayer for all nations.
        </p>
        <a href="/signup" className="cta-button">
          Join Us
        </a>
      </div>

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
        {twoSermons.map((s) => {
          return <SermonCard key={s.id} sermon={s} />;
        })}
      </section>
      <section className="posts">
        <h3>Posts</h3>
        <Posts posts={fivePosts} />
      </section>
    </div>
  );
}
