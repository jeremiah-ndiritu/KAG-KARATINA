import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import ThemeToggle from "./UI/ThemeToggle";
// import { User } from "lucide-react";

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
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-surface/80 backdrop-blur-2xl shadow-sm"
      onClick={() => menuOpen && setMenuOpen(false)}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/kag-logo.jpg"
              alt="KAG Karatina Logo"
              className="h-12 w-12 rounded-3xl object-cover shadow-sm"
            />
            <div>
              <h1 className="text-lg font-semibold text-heading">
                KAG Karatina
              </h1>
              <p className="text-sm text-muted-foreground">House of prayer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted text-surface-foreground transition hover:bg-muted/90 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </div>

        <nav className="hidden items-center justify-between gap-4 md:flex">
          <div className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-2xl px-4 py-2 text-sm font-medium text-surface-foreground transition hover:bg-muted hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div
        className={clsx(
          "absolute inset-x-4 top-full mt-2 rounded-4xl border border-border bg-surface/95 p-4 shadow-2xl transition duration-200 md:hidden",
          {
            "opacity-100 scale-100": menuOpen,
            "opacity-0 scale-95 pointer-events-none": !menuOpen,
          },
        )}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="rounded-3xl px-4 py-3 text-sm font-medium text-surface-foreground transition hover:bg-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
