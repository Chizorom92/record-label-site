import { useState } from "react";
import "../CSS/Navbar.css";

const NavBar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (page) => {
    setPage(page);
    closeMenu();
  };

  return (
    <header className="navbar">
      <div
        className="navbar-brand"
        onClick={() => handleNavClick("home")}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleNavClick("home");
          }
        }}
      >
        <img
          src="/logo.jpeg"
          alt="0147 Records logo"
          className="navbar-logo-img"
        />
        <div className="navbar-brand-text">
          <span className="brand-title">0147</span>
          <span className="brand-subtitle">RECORDS</span>
        </div>
      </div>

      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`navbar-link ${isOpen ? "active" : ""}`}
        aria-label="Main navigation"
      >
        <h5 onClick={() => handleNavClick("home")}>HOME</h5>
        <h5 onClick={() => handleNavClick("about")}>ABOUT</h5>
        <h5 onClick={() => handleNavClick("a&r development")}>
          A&R / DEVELOPMENT
        </h5>
        <h5 onClick={() => handleNavClick("news")}>NEWS</h5>
        <h5 onClick={() => handleNavClick("contact")}>CONTACT</h5>
         <h5 onClick={() => handleNavClick("submit")} className="ham-submit">SUBMIT YOUR MUSIC</h5>
      </nav>

      <button
        className="submit-button"
        onClick={() => handleNavClick("submit")}
        type="button"
      >
        SUBMIT YOUR MUSIC
      </button>
    </header>
  );
};

export default NavBar;
