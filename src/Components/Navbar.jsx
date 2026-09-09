// import "./Nav.css";
// import { useState } from "react";
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
    <>
      <div className="navbar">
        <div className="footer-logo">
          <h5 id="logo">🔴REC</h5>

          <div className="footer-title" onClick={() => handleNavClick("home")}>
            <h5>O147</h5>
            <p id="rec">RECORDS</p>
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

        <div className={`navbar-link ${isOpen ? "active" : ""}`}>
          <h5 onClick={() => handleNavClick("home")}>HOME</h5>
          <h5 onClick={() => handleNavClick("about")}>ABOUT</h5>
          <h5 onClick={() => handleNavClick("a&r development")}>
            A&R / DEVELOPMENT
          </h5>
          <h5 onClick={() => handleNavClick("news")}>NEWS</h5>
          <h5 onClick={() => handleNavClick("contact")}>CONTACT</h5>
        </div>

        <button
          className="submit-button"
          onClick={() => handleNavClick("submit")}
          type="button"
        >
          SUBMIT YOUR MUSIC
        </button>
      </div>
    </>
  );
};

export default NavBar;
