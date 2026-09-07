import { useState, useEffect } from "react";
import {Countries} from "../Data/Countries";

import "../CSS/Submit.css";


const Submit = () => {
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
        <h3>ARTIST SUBMISSIONS</h3>
        <p>We're always looking for bright talent.</p>
        <p>Fill out the form below to submit your music.</p>

        <div className="submit-form">
          <h5>ARTIST INFORMATION</h5>
               
               {/* artist details */}
          <form action="#">
            <div className="submit-names">
              <div className="submit-name">
                <label htmlFor="name">Stage Name*</label> <br />
                <input type="text" name="" id="name" required />
              </div>
              <div className="submit-realName">
                <label htmlFor="Rname">Real Name*</label> <br />
                <input type="text" name="" id="Rname" required />
              </div>
            </div>
            <label htmlFor="email">Email*</label> <br />
            <input type="email" name="" id="email" required />
            <div className="submit-origin">
              <div className="submit-country">
                <label htmlFor="country">Country / State*</label> <br />
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
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
                <input type="text" id="city" required />
              </div>
            </div>

            <label htmlFor="name">Genre*</label> <br />
            <select name="" id="">
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
                <input type="text" name="" id="instagram" required />
              </div>

              <div className="submit-youtube">
                <label htmlFor="name"> YouTube</label> <br />
                <input type="text" name="" id="youtube" required />
              </div>

              <div className="submit-tiktok">
                <label htmlFor="instagram">Tiktok</label> <br />
                <input type="text" name="" id="tiktok" required />
              </div>

              <div className="submit-spotify">
                <label htmlFor="name">Spotify</label> <br />
                <input type="text" name="" id="spotify" required/>
              </div>

            </div>

            <label htmlFor="soundcloud">SoundCloud</label>  <br />
            <input type="text" name="" id="soundcloud" /> <br />

            <label htmlFor="link">Link to Music (Dropbox, Audiomack, Google Drive)*</label> <br />
            <input type="text" name="" id="link" required />


                  {/* About artist */}
            <h5>ABOUT YOU</h5>

            <label htmlFor="bio">Short Biography</label> <br />
            <textarea name="" id="" cols="50" rows="4" minLength={0} maxLength={200} contentEditable></textarea> <br />

            <label htmlFor="bio">Why do  you want to work wih 0147 Records*</label> <br />
            <textarea name="" id="" cols="50" rows="4" minLength={0} maxLength={200} contentEditable></textarea> <br />

            <label htmlFor="bio"></label>Additional Message (optional) <br />
            <textarea name="" id="" cols="50" rows="4" minLength={0} maxLength={200} contentEditable></textarea>

            <h5>TERMS</h5>
            <input type="checkbox" name="" id="terms" required/>
            <label htmlFor="terms">I agree to the Artist Submission Terms & Condition*</label> <br />

            <button>SUBMIT</button>


          </form>
        </div>
      </div>
    </>
  );
};

export default Submit;
