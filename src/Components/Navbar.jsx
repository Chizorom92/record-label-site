// import "./Nav.css";
// import { useState } from "react";

import "../CSS/Navbar.css";

const NavBar = ({ setPage }) => {
  return (
    <>
      <div className="navbar">
        {/* <div className="navbar-head">
          <span>🔴REC</span>
          <div>
          <span>0147</span> <br />
          <span>Records</span>
          </div>
          
        </div> */}

        <div className="footer-logo">
          <h5 id="logo">🔴REC</h5>

          <div className="footer-title" onClick={() => setPage("home")}>
            <h5>O147</h5>
            <p id="rec">RECORDS</p>
          </div>
        </div>

        <div className="navbar-link">
          <h5 onClick={() => setPage("home")}>HOME</h5>
          <h5 onClick={() => setPage("about")}>ABOUT</h5>
          <h5 onClick={() => setPage("a&r development")}>A&R / DEVELOPMENT</h5>

          <h5 onClick={() => setPage("news")}>NEWS</h5>

          <h5 onClick={() => setPage("contact")}>CONTACT</h5>
        </div>

        <button onClick={() => setPage("submit")}>SUBMIT YOUR MUSIC</button>
      </div>
    </>
  );
};

export default NavBar;
