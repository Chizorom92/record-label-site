// import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";


import "../CSS/Footer.css";

const Footer = ({ setPage }) => {
  const FaX = "𝕏";

  const copyRight = "\u{00A9}";
  return (
    <>
      {/* <hr /> */}

      <div className="footer">
        <div className="footer-start">
          <div className="footer-logo">
             <h5 id="logo">🔴REC</h5>

             <div className="footer-title">
                 <h5>O147</h5>
              <p id="rec">RECORDS</p>
             </div>

          </div>
          

          <div className="footer-description">
            <p> Independent label, Global vision, Built for the culture.</p>
          </div>
        </div>

        
        <div className="footer-middle">
          
        <div className="footer-nav">
          <h5>NAVIGATION</h5>

          <div className="footer-nav-link">
            <p onClick={() => setPage("home")}>Home </p>
          <p onClick={() => setPage("about")}>About</p>
          <p onClick={() => setPage("submit")}>Submission</p>

          <p onClick={() => setPage("a&r development")}>
            A&R / Development
          </p>
          <p onClick={() => setPage("news")}>News</p>
          <p onClick={() => setPage("contact")}>Contact</p>

          </div>
          
        </div>



        <div className="footer-legal">

          <h5>LEGAL</h5>

          <div className="footer-legal-link">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p >Artist Submision Terms</p>
          <p>Cookies Policy</p>
          </div>
         
        </div>

        <div className="footer-connect">

          <h5>CONNECT</h5>

          <div className="footer-connect-list">
          <p><a id="mail" href="mailto:bmaurice367@gmail.com">bmaurice367@gmail.com</a></p>
          <p><a id="tel" href="tel:+2348028682900">+234-0802-7482-390</a> </p>
          <p>Surulerre, Lagos Nigeria</p>
          </div>
         

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              {FaX}
            </a>
          </div>
        </div>
      </div>
      </div>

      <p className="copy"> {copyRight} 2026 0147 Records. All Rights Reserved.</p>
    </>
  );
};

export default Footer;
