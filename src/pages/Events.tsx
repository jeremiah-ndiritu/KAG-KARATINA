import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <h2 className="text-3xl font-semibold text-heading">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <EventCard
          name="Bible Study"
          date="Sep 28, 2025"
          location="Church Hall"
        />
        <EventCard
          name="Youth Fellowship"
          date="Oct 05, 2025"
          location="Community Center"
        />
      </div>
    </div>
  );
}
