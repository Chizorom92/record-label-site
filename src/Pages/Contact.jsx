import { useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaShareNodes,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import "../CSS/Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contact">
        <h4>CONTACT US</h4>
        <p>Let's connect. We'd love to hear from you.</p>

        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <div className="contact-info">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:bmaurice367@gmail.com">bmaurice367@gmail.com</a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">
              <FaPhone />
            </span>

            <div className="contact-info">
              <span className="contact-label">PHONE</span>
              <span>+(234) 080-2868-2900</span>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">
              <FaLocationDot />
            </span>

            <div className="contact-info">
              <span className="contact-label">LOCATION</span>
              <span>Surulerre, Lagos Nigeria</span>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">
              <FaShareNodes />
            </span>

            <div className="contact-info">
              <span className="contact-label">SOCIAL MEDIA</span>
              <div className="contact-social">
                <a href="" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="" aria-label="X">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <br /> <br /> <br />

        {/* Enquiry */}

        <div className="contact-inquiry">
          <h4>BUSINESS INQUIRY</h4>
          <form action="#">
            <div className="contact-us">
              <div className="contact-name">
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="contact-email-field">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>

            <label htmlFor="subject">Subject*</label>
            <input type="text" name="subject" id="subject" required />

            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              maxLength={500}
              required
            ></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;