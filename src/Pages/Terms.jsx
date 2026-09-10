import { useEffect } from "react";
import "../CSS/Privacy.css";

const Terms = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="privacy-page">
        <div className="eyebrow">0147 Records</div>
        <h1 >Terms & Conditions</h1>

        <p className="intro">
          Last updated: September 10, 2026. Welcome to 0147 Records. These Terms
          and Conditions govern your access to and use of our website and
          related services. By using the site, you agree to be bound by these
          Terms. If you do not agree, please do not continue using the website.
        </p>

        <section className="policy-card">
          <h2>1. About 0147 Records</h2>
          <p>
            0147 Records is a record label and music platform focused on artist
            discovery, music publishing, artist development, events, and
            creative media. These Terms apply to all visitors, users, artists,
            partners, and contributors who access or interact with the website.
          </p>
        </section>

        <section className="policy-card">
          <h2>2. Acceptance of Terms</h2>
          <p>By using the website, you confirm that:</p>
          <ul>
            <li>You are legally able to enter into these Terms.</li>
            <li>You will use the website only for lawful purposes.</li>
            <li>The information you provide is accurate and complete.</li>
            <li>You will not misuse the platform or violate applicable law.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>3. Use of the Website</h2>
          <p>You may use the website to:</p>
          <ul>
            <li>Learn about 0147 Records and our artists</li>
            <li>Read news and updates</li>
            <li>Contact the team</li>
            <li>Submit music or project information</li>
          </ul>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for unlawful activity</li>
            <li>Attempt unauthorized access to site systems</li>
            <li>Interfere with site security or performance</li>
            <li>Submit false or harmful information</li>
            <li>Impersonate 0147 Records or its employees</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>4. Intellectual Property</h2>
          <p>
            Unless otherwise stated, all website content and materials are owned
            by or licensed to 0147 Records and may be protected by copyright,
            trademark, and other intellectual property laws. You may not
            reproduce, distribute, publicly display, or commercially exploit
            protected content without prior written permission.
          </p>
        </section>

        <section className="policy-card">
          <h2>5. Music Submissions</h2>
          <p>
            If you submit music or creative materials to us, you confirm that
            you have the rights and permissions necessary to do so. Submission
            does not guarantee acceptance, review, contract, release, or
            representation. 0147 Records may choose not to proceed with any
            submission for any reason.
          </p>
        </section>

        <section className="policy-card">
          <h2>6. Ownership of Submitted Material</h2>
          <p>
            Submissions remain your property unless a separate written agreement
            states otherwise. By submitting materials, you authorize 0147
            Records to review, evaluate, and store them for submission-related
            purposes.
          </p>
        </section>

        <section className="policy-card">
          <h2>7. Website Availability</h2>
          <p>
            We work to keep the website accurate and available, but we do not
            guarantee uninterrupted access or error-free performance. We may
            change, suspend, or discontinue website features at any time without
            notice.
          </p>
        </section>

        <section className="policy-card">
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may include links to third-party platforms. We are not
            responsible for the content, privacy practices, or policies of those
            external websites. Your use of third-party services is at your own
            risk.
          </p>
        </section>

        <section className="policy-card">
          <h2>9. Privacy</h2>
          <p>
            Your use of the website is governed by our Privacy Policy. By using
            the site, you acknowledge that you have read and understood how we
            handle your information.
          </p>
        </section>

        <section className="policy-card">
          <h2>10. Disclaimer</h2>
          <p>
            The website is provided on an “as is” and “as available” basis. We
            do not warrant that it will always be accurate, secure, or free from
            technical issues. To the extent permitted by law, we exclude
            warranties that are not legally enforceable.
          </p>
        </section>

        <section className="policy-card">
          <h2>11. Limitation of Liability</h2>
          <p>
            0147 Records, its team, and affiliated parties are not liable for
            indirect, incidental, or consequential losses arising from your use
            of the website, including technical disruptions, loss of data, or
            reliance on content provided here. This does not limit rights that
            cannot be excluded by law.
          </p>
        </section>

        <section className="policy-card">
          <h2>12. Indemnification</h2>
          <p>
            You agree to defend and hold harmless 0147 Records from claims,
            liabilities, damages, or expenses caused by your misuse of the
            website, your submissions, or any violation of these Terms.
          </p>
        </section>

        <section className="policy-card">
          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            site after an update indicates your acceptance of the revised Terms.
          </p>
        </section>

        <section className="policy-card">
          <h2>14. Contact</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us through the information available on our website.
          </p>
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

export default Terms;
