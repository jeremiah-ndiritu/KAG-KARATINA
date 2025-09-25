import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="page events">
      <h2>Upcoming Events</h2>
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
  );
}
