import type { Sermon } from "@/types/sermon";
import SermonCard from "../components/SermonCard";
import { api } from "@/config/api";

let sermons: Sermon[]=[];

(async () => {
  const sd = await api.get("/api/sermons")
  sermons=sd.data.sermons
  console.log('sd :>> ', sd);
})()

export default function Sermons() {

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <h2 className="text-3xl font-semibold text-heading">All Sermons</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sermons
          .sort((a, b) => (new Date(b.date).getTime()) - (new Date(a.date).getTime()))
          .map((s) => (
            <SermonCard key={s.title} sermon={s} />
          ))}
      </div>
    </div>
  );
}
