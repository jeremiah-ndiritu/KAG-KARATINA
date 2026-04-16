import ServiceCard from "./ServiceCard";

export default function Services() {
  const weeklyServices = [
    {
      day: "Sunday",
      title: "Sunday Worship Service",
      time: "10:00 AM - 1:00 PM",
      description: "Main church service with worship, prayer, and sermon.",
    },
    {
      day: "Thursday",
      title: "Fellowship",
      time: "2:00 PM - 6:00 PM",
      description: "We go to one of our brethren's place and worship together.",
    },
    {
      day: "Saturday",
      title: "Music Practice",
      time: "7:00 PM - 9:00 PM",
      description:
        "Praise and Worship members practice and prepare songs for worship.",
    },
  ];

  return (
    <section className="rounded-4xl border border-border bg-surface/95 p-8 shadow-xl">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Weekly Church Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">
            Join our gathering
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {weeklyServices.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
