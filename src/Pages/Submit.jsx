import SuccessModal from "../Components/SuccessModal";
import { useState, useEffect } from "react";
import { Countries } from "../Data/Countries";

import "../CSS/Submit.css";

const Submit = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const successModalContent = {
    title: "Submission received",
    message:
      "Thank you for sharing your music. Our team will review your music and get back to you if there's a match.",
    buttonLabel: "CLOSE" ,
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8299c986-beb5-44f8-8a89-41224b98f004");
      formData.append("subject", "New artist submission - 0147 Records");
      formData.append("from_name", "0147 Records ");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("");
        setShowSuccessModal(true);
        event.target.reset();
        setFormData({ country: "" });
      } else {
        setResult("Error. Please try again.");
      }
    } catch {
      setResult("Error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [formData, setFormData] = useState({ country: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="submit">
        {showSuccessModal && (
          <SuccessModal
            {...successModalContent}
            onClose={() => setShowSuccessModal(false)}
          />
        )}

        <h3>ARTIST SUBMISSIONS</h3>
        <p>We're always looking for bright talent.</p>
        <p>Fill out the form below to submit your music.</p>

        <div className="submit-form">
          <h5>ARTIST INFORMATION</h5>

          {/* artist details */}
          <form onSubmit={onSubmit}>
            <div className="submit-names">
              <div className="submit-name">
                <label htmlFor="name">Stage Name*</label> <br />
                <input type="text" name="stageName" id="name" required />
              </div>
              <div className="submit-realName">
                <label htmlFor="Rname">Real Name*</label> <br />
                <input type="text" name="realName" id="Rname" required />
              </div>
            </div>
            <label htmlFor="email">Email*</label> <br />
            <input type="email" name="email" id="email" required />
            <div className="submit-origin">
              <div className="submit-country">
                <label htmlFor="country">Country / State*</label> <br />
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  {Countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="submit-city">
                <label htmlFor="city">City*</label> <br />
                <input type="text" name="city" id="city" required />
              </div>
            </div>
            <label htmlFor="genre">Genre*</label> <br />
            <select name="genre" id="genre" required>
              <option value="hiphop"></option>
              <option value="hiphop">HIPHOP</option>
              <option value="trap">TRAP</option>
              <option value="pop">POP</option>
              <option value="afro-beat">AFRO-BEAT</option>
            </select>
            <h5>SOCIAL MEDIA & MUSIC LINKS</h5>
            {/* artist link */}
            <div className="submitlinks">
              <div className="submit-instagram">
                <label htmlFor="instagram">Instagram</label> <br />
                <input type="text" name="instagram" id="instagram" required />
              </div>

              <div className="submit-youtube">
                <label htmlFor="youtube"> YouTube</label> <br />
                <input type="text" name="youtube" id="youtube" required />
              </div>

              <div className="submit-tiktok">
                <label htmlFor="instagram">Tiktok</label> <br />
                <input type="text" name="tiktok" id="tiktok" required />
              </div>

              <div className="submit-spotify">
                <label htmlFor="spotify">Spotify</label> <br />
                <input type="text" name="spotify" id="spotify" required />
              </div>
            </div>
            <label htmlFor="soundcloud">SoundCloud</label> <br />
            <input type="text" name="soundcloud" id="soundcloud" /> <br />
            <label htmlFor="link">
              Link to Music (Dropbox, Audiomack, Google Drive)*
            </label>{" "}
            <br />
            <input type="text" name="musicLink" id="link" required />
            {/* About artist */}
            <h5>ABOUT YOU</h5>
            <label htmlFor="bio">Short Biography</label> <br />
            <textarea
              name="biography"
              id="biography"
              cols="50"
              rows="4"
              maxLength={200}
            ></textarea>{" "}
            <br />
            <label htmlFor="bio">
              Why do you want to work wih 0147 Records*
            </label>{" "}
            <br />
            <textarea
              name="motivation"
              id="motivation"
              cols="50"
              rows="4"
              maxLength={200}
              required
            ></textarea>{" "}
            <br />
            <label htmlFor="additionalMessage">
              Additional Message (optional)
            </label>{" "}
            <br />
            <textarea
              name="additionalMessage"
              id="additionalMessage"
              cols="50"
              rows="4"
              maxLength={200}
            ></textarea>
            <h5>TERMS</h5>
            <input
              type="checkbox"
              name="termsAccepted"
              id="terms"
              value="yes"
              required
            />
            <label htmlFor="terms">
              I agree to the Artist Submission Terms & Condition*
            </label>{" "}
            <br />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "SENDING..." : result || "SUBMIT"}
            </button>

            <p className="submit-disclaimer">By submitting your music, you confirm that you have the necessary rights to submit the material. Your information and submission may be reviewed by 0147 Records for A&R and potential music-related opportunities. See our Privacy Policy for more information.</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Submit;
