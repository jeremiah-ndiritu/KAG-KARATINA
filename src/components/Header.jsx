import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import clsx from "clsx";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/sermons", label: "Sermons" },
    { path: "/posts", label: "Posts" },
    { path: "/login", label: "Log In" },
    { path: "/members", label: "Members" },
    { path: "/signup", label: "Sign Up" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="header" onClick={() => menuOpen && setMenuOpen(false)}>
      <section className="profiles">
        <div className="church-profile">
          <img src="/kag-logo.jpg" alt="KAG Karatina Logo" />
          <h1>KAG Karatina</h1>
        </div>
        <div className="member-profile">
          <FaUser size={30} />
          <h1>John K</h1>
        </div>
      </section>

      <nav className="nav">
        {links.map((link, i) => {
          return (
            i < 3 && (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            )
          );
        })}

        <div
          className="menu-toggle"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          ☰
        </div>
        <div className={clsx("dropdown", { show: menuOpen })}>
          {links.map((link, i) => {
            return (
              i >= 3 && (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            );
          })}
        </div>
      </nav>
    </header>
  );
}
