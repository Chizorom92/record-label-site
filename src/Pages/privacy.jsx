import { useEffect } from "react";
import "../CSS/Privacy.css";


 const Privacy = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      

      <div className="privacy-page">
        <div className="eyebrow">0147 Records</div>
        <h1>Privacy Policy</h1>

        <p className="intro">
           0147 Records, we respect your privacy and are committed to
          protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, store, and protect your data when
          you visit our website, submit music, or contact our team.
        </p>

        <section className="policy-card">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect information that helps us communicate with you and
            process submissions, including:
          </p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Artist profile details and links</li>
            <li>Music submission information and demo materials</li>
            <li>
              Website usage data such as browser type and activity patterns
            </li>
            <li>Contact details submitted through forms or email</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Review artist submissions and respond to inquiries</li>
            <li>
              Manage communications with artists, partners, and collaborators
            </li>
            <li>Improve website functionality and user experience</li>
            <li>Share updates, opportunities, and relevant news</li>
            <li>
              Protect our platform and ensure compliance with legal obligations
            </li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information
            only when necessary with trusted service providers, industry
            partners, or legal authorities, and only in accordance with
            applicable laws.
          </p>
        </section>

        <section className="policy-card">
          <h2>4. Cookies and Website Tracking</h2>
          <p>
            Our website may use cookies or similar technologies to improve
            functionality, understand user behavior, and measure site
            performance. You can manage cookie preferences through your browser
            settings.
          </p>
        </section>

        <section className="policy-card">
          <h2>5. Data Security</h2>
          <p>
            We take reasonable technical and organizational steps to protect
            your information from unauthorized access, loss, or misuse. However,
            no online platform is completely risk-free, and we encourage you to
            take precautions when sharing personal information online.
          </p>
        </section>

        <section className="policy-card">
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to request access
            to, correction of, deletion of, or objection to the processing of
            your personal information. If you would like to exercise these
            rights, please contact us using the details below.
          </p>
        </section>

        <section className="policy-card">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:bmaurice367@gmail.com">bmaurice367@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+2348028682900">+234-0802-7482-390</a>
            </li>
            <li>Location: Surulerre, Lagos, Nigeria</li>
          </ul>
        </section>

        {/* <button
          className="back-button"
          onClick={() => setPage && setPage("home")}
        >
          Back to Home
        </button> */}
      </div>
    </>
  );
};

export default Privacy;

