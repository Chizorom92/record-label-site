import { useEffect } from "react";
import "../CSS/Privacy.css";

const SubmitTerms = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="privacy-page">
        <div className="eyebrow">0147 Records</div>
        <h1>Music Submission Terms</h1>

        <p className="intro">
          Last updated: September 10, 2026. Welcome to the 0147 Records music
          submission platform. These terms apply when you submit music,
          recordings, lyrics, artwork, photographs, videos, artist information,
          or other materials for consideration.
        </p>

        <section className="policy-card">
          <h2>1. Purpose of Submissions</h2>
          <p>
            This platform allows artists, musicians, producers, songwriters, and
            creators to submit their work for possible opportunities, including
            release consideration, collaboration, production, and development.
            Submission does not guarantee an opportunity or response.
          </p>
        </section>

        <section className="policy-card">
          <h2>2. Eligibility</h2>
          <p>
            You must have the legal right to submit the materials you provide.
          </p>
          <ul>
            <li>
              If you are under the legal age in your jurisdiction, obtain
              parental or guardian consent first.
            </li>
            <li>
              If submitting on behalf of a group, band, or company, confirm you
              have authority to do so.
            </li>
            <li>All submitted information must be accurate and truthful.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>3. Ownership and Rights</h2>
          <p>
            Submitting music does not transfer ownership or copyright to 0147
            Records. You retain your rights unless a separate written agreement
            is signed. Submission also does not create a record deal, publishing
            deal, management deal, or distribution agreement.
          </p>
        </section>

        <section className="policy-card">
          <h2>4. Your Warranties</h2>
          <p>By submitting material, you represent and warrant that:</p>
          <ul>
            <li>You own or control the rights to the submitted materials.</li>
            <li>
              You have obtained all necessary permissions for featured
              contributors, samples, songwriters, and producers.
            </li>
            <li>Your submission does not infringe any third-party rights.</li>
            <li>
              You are not prohibited from submitting it by any other agreement.
            </li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>5. Review and Evaluation</h2>
          <p>
            0147 Records may review submissions internally for A&R, artist
            development, release opportunities, and related music activities. We
            may contact you if we are interested, but we are not required to
            respond to every submission.
          </p>
        </section>

        <section className="policy-card">
          <h2>6. No Guarantee of Review or Acceptance</h2>
          <p>
            We do not guarantee that we will review, respond to, accept, or act
            on any submission. A lack of response is not an indication of
            acceptance or rejection.
          </p>
        </section>

        <section className="policy-card">
          <h2>7. Files, Links, and Accessibility</h2>
          <p>
            You are responsible for ensuring that all links, files, and
            submission materials are correct and accessible. We are not
            responsible for broken, expired, private, or inaccessible files.
          </p>
        </section>

        <section className="policy-card">
          <h2>8. Content Standards</h2>
          <p>Your submission must not contain material that:</p>
          <ul>
            <li>Infringes copyright or other rights</li>
            <li>Contains unlawful or offensive material</li>
            <li>Contains malicious or abusive content</li>
            <li>Uses unauthorized personal information</li>
            <li>Attempts fraud or harassment</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>9. Confidentiality</h2>
          <p>
            Unless a separate written agreement states otherwise, submission
            does not create a confidential relationship. We handle personal
            information in accordance with our Privacy Policy.
          </p>
        </section>

        <section className="policy-card">
          <h2>10. Similar Works</h2>
          <p>
            We may receive or develop similar music, ideas, concepts, or
            creative materials independently. Similarity alone does not
            establish copying or misuse.
          </p>
        </section>

        <section className="policy-card">
          <h2>11. Storage and Use</h2>
          <p>
            We may retain submissions for evaluation, legal compliance, and
            internal business considerations. We may use the submitted materials
            for assessment, communication, and operational purposes.
          </p>
        </section>

        <section className="policy-card">
          <h2>12. Privacy</h2>
          <p>
            Personal information submitted through the platform is handled
            according to our Privacy Policy, which explains what data we
            collect, how it is used, and how it is protected.
          </p>
        </section>

        <section className="policy-card">
          <h2>13. No Financial Commitment</h2>
          <p>
            Submission does not create any payment obligation, royalty promise,
            or compensation guarantee. Any payment or business terms require a
            separate written agreement.
          </p>
        </section>

        <section className="policy-card">
          <h2>14. Technical Issues</h2>
          <p>
            We do not guarantee uninterrupted functionality of the submission
            system. We are not responsible for lost, delayed, corrupted, or
            inaccessible submissions caused by technical issues outside our
            reasonable control.
          </p>
        </section>

        <section className="policy-card">
          <h2>15. Withdrawal and Retention</h2>
          <p>
            You may request withdrawal of a submission, but this may not be
            possible if the material has already been reviewed, retained for
            legal reasons, or incorporated into ongoing business processes.
          </p>
        </section>

        <section className="policy-card">
          <h2>16. Changes to Terms</h2>
          <p>
            We may update these submission terms from time to time. Continued
            use of the submission platform after changes are posted indicates
            acceptance of the updated terms.
          </p>
        </section>

        <section className="policy-card">
          <h2>17. Contact</h2>
          <p>
            Please contact us through the information available on the website
            if you have any questions regarding these terms or your submission.
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

export default SubmitTerms;
