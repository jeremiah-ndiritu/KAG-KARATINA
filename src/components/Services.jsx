import ServiceCard from "./ServiceCard";
import "../styles/Services.css";

export default function Services() {
  let weeklyServices = [
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
  weeklyServices = [...weeklyServices, ...weeklyServices];
  return (
    <div className="services-container">
      <h2 className="services-title">Weekly Church Services</h2>

      <div className="carousel-wrapper">
        {weeklyServices.map((service, idx) => (
          <div className="service-day" key={idx}>
            <h3 className="day-heading">{service.day}</h3>
            <table className="services-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Time</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{service.title}</td>
                  <td>{service.time}</td>
                  <td>{service.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
