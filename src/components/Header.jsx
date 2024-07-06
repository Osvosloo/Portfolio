import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ".././styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="greeting">Hi!</div>
      <nav className="nav">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="close-icon">X</div>
          ) : (
            <div className="burger-icon">&#9776;</div>
          )}
        </button>

        <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={400} onClick={toggleMenu}>
              Home
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={400}
              onClick={toggleMenu}
            >
              Projects
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link
              to="contact-me"
              smooth={true}
              duration={400}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
