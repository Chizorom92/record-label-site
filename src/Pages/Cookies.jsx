import { useEffect } from "react";
import "../CSS/Privacy.css";

const Cookies = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="privacy-page">
        <div className="eyebrow">0147 Records</div>
        <h1>Cookies Policy</h1>

        <p className="intro">
          Last updated: September 10, 2026. This Cookies Policy explains how we
          use cookies and similar technologies on our website and how those
          tools support functionality, analytics, security, and user experience.
        </p>

        <section className="policy-card">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help remember information, maintain preferences,
            improve performance, and understand how visitors interact with the
            site.
          </p>
        </section>

        <section className="policy-card">
          <h2>2. How We Use Cookies</h2>
          <p>We may use cookies to:</p>
          <ul>
            <li>Keep the site functioning correctly</li>
            <li>Remember preferences and settings</li>
            <li>Improve performance and reliability</li>
            <li>Understand website traffic and usage patterns</li>
            <li>Support security and form handling</li>
            <li>Measure campaigns and embedded content interactions</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>3. Types of Cookies</h2>
          <p>We may use several categories of cookies, including:</p>
          <ul>
            <li>Strictly necessary cookies for essential site operations</li>
            <li>Functional cookies that remember your choices</li>
            <li>Analytics cookies to understand user behavior</li>
            <li>Performance cookies to monitor website health</li>
            <li>Marketing cookies for campaign measurement where applicable</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>4. Third-Party Cookies</h2>
          <p>
            Certain cookies may be placed by third-party service providers used
            for analytics, media, social embeds, security, or advertising. These
            providers follow their own cookie and privacy rules, which may
            differ from ours.
          </p>
        </section>

        <section className="policy-card">
          <h2>5. Social and Media Features</h2>
          <p>
            When our website contains social media buttons, embedded content, or
            media players, the relevant third party may use cookies when you
            interact with that content. We do not control how those platforms
            use cookies.
          </p>
        </section>

        <section className="policy-card">
          <h2>6. Cookies and Forms</h2>
          <p>
            Cookies may support the security and operation of contact and
            submission forms. They may help prevent abuse, maintain form
            reliability, and improve the user experience. The personal
            information you submit is still governed by our Privacy Policy.
          </p>
        </section>

        <section className="policy-card">
          <h2>7. Session and Persistent Cookies</h2>
          <p>
            Session cookies are temporary and usually disappear when you close
            your browser. Persistent cookies remain on your device for a set
            period or until you delete them. The duration depends on the purpose
            of the cookie.
          </p>
        </section>

        <section className="policy-card">
          <h2>8. Managing Cookies</h2>
          <p>
            You can manage cookies through your browser settings. Most browsers
            let you view, delete, block, or restrict cookies. Please note that
            disabling certain cookies may affect how the website functions.
          </p>
        </section>

        <section className="policy-card">
          <h2>9. Consent</h2>
          <p>
            Where required by law, we may ask for your consent before placing
            non-essential cookies on your device. Essential cookies may remain
            active where they are necessary for the website to operate or are
            otherwise permitted by law.
          </p>
        </section>

        <section className="policy-card">
          <h2>10. Do Not Track</h2>
          <p>
            Some browsers offer a Do Not Track feature, but there is not yet a
            universal technical standard that all websites recognize. We may not
            respond to every browser signal in every circumstance.
          </p>
        </section>

        <section className="policy-card">
          <h2>11. Updates</h2>
          <p>
            We may update this policy from time to time to reflect changes in
            our website technology, services, or legal obligations. Any
            revisions will be reflected in the updated date at the top of this
            page.
          </p>
        </section>

        <section className="policy-card">
          <h2>12. Contact</h2>
          <p>
            If you have questions about cookies or similar technologies, please
            use the contact options available on our website.
          </p>
        </section>
      </div>
    </>
  );
};

export default Cookies;
