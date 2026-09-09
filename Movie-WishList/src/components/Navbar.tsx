import React from "react";
import "./Navbar.css";

type NavbarProps = {
  links: { text: string; url: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <div className="navbar-logo">MY Shows</div>
        {links
          .filter((link) => link.text !== "Search" && link.text !== "Profile")
          .map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className={currentPath === link.url ? "active" : ""}
              >
                {link.text}
              </a>
            </li>
          ))}
      </ul>

      <div className="navbar-actions">
        <a href="/search" className="icon-button">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
        </a>

        <a href="/profile" className="icon-button">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;