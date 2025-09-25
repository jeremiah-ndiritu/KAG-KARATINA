import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>KAG Karatina</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sermons">Sermons</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
