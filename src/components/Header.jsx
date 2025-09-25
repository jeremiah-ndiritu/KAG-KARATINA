import { Link } from "react-router-dom";
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="church-profile">
        <img src="kag logo.jpg" alt="Logo" />
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/sermons">Sermons</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
