import type { Sermon } from "@/types/sermon";
import { useEffect, useState } from "react";
import SermonCard from "../components/SermonCard";
import Services from "../components/Services";
import TikTokEmbed from "../components/TikTokEmbed";
import Posts from "./Posts";
import endea from "endea";

export default function Home() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const twoSermons = sermons
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  useEffect(() => {
    const fetchSermons = async () => {
      const sd = await endea<Sermon>({
        title: "",
        speaker: "",
        date: "",
        id: undefined,
      });
      setSermons(sd);
    };
    fetchSermons();
  }, []);

  return (
    <div className="space-y-12 px-4 py-8 sm:px-8">
      <Services />

      <section className="rounded-4xl border border-border bg-surface/95 p-8 shadow-xl ring-1 ring-border">
        <p className="max-w-4xl text-base leading-8 text-surface-foreground sm:text-lg">
          <span className="font-semibold text-heading">Isaiah 56:7 (NIV)</span>
          These I will bring to my holy mountain and give them joy in my house
          of prayer. Their burnt offerings and sacrifices will be accepted on my
          altar; for my house will be called a house of prayer for all nations.
        </p>
        <a
          href="/signup"
          className="mt-6 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
        >
          Join Us
        </a>
      </section>

      <TikTokEmbed />

      <section className="relative overflow-hidden rounded-4xl bg-linear-to-br from-primary/15 via-surface/90 to-muted/80 p-10 shadow-2xl">
        <div className="space-y-4 text-center text-surface-foreground">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome to KAG Karatina
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Where every soul matters.
          </p>
          <a
            href="/sermons"
            className="inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Watch Sermon
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {twoSermons.map((sermon) => (
          <SermonCard key={sermon.id} sermon={sermon} />
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-heading">Posts</h3>
        <Posts />
      </section>
    </div>
  );
}
