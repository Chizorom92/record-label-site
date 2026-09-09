import { useEffect } from "react";
import "../CSS/About.css";
// import aboutImg from "../assets/aboutimg2.jpg";

const About = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rightArrow = "\u{2192}";

  return (
    <>
      <div className="about">
        <h2 className="about-title">
          ABOUT <span id="logo-red">0147</span> RECORDS
        </h2>
        <p className="about-subtitle">OUR STORY

        </p>

         <p className="about-story">
  0147 Records was created to give bold, talented artists a space to grow,
  create, and connect with the world through authentic music. We started with
  a love for culture, rhythm, and originality and a belief that real
  artistry deserves real support. Our mission is simple: to build a label
  where creativity is nurtured, stories are amplified, and great music finds
  its people.
</p>


          <div className="about-text">

            <p id="text-icon">⋆.˚✮🎧✮˚.⋆</p>
            <p id="text-i">💿</p>
          </div> <br />
      
      {/* tags */}

        <div className="about-tag">
          <div className="about-tags">
            <h1 className="icon">🚀</h1>
            <h3>OUR MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              magnam iure fuga aliquam sit voluptatum eos.
            </p>
          </div>

          <div className="about-tags">
            <h1 className="icon">🌎</h1>
            <h3>OUR VISION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              magnam iure fuga aliquam sit voluptatum eos.
            </p>
          </div>

          <div className="about-tags">
            <h1 className="icon">🪐</h1>
            <h3>OUR FOCUS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              magnam iure fuga aliquam sit voluptatum eos.
            </p>
          </div>
        </div> <br />



        <div className="about-how">
          <h3 className="about-how-head">HOW WE WORK</h3>
          <p className="about-head-text">
            We work clearly with a limited number of artists to create quality,
            focus and impact.
          </p>

          <ul className="about-list">
            <li>Transparency</li>
            <li>Collaboration</li>
            <li>Creative Production</li>
            <li>Long-term Growth</li>
          </ul>
        </div>

        <div className="about-label">
          <h3 className="about-label-head">WE ARE A NEW LABEL</h3>

          <p className="about-label-text">
            We are a new label, but we have a clear vision and a strong team. We are committed to helping our artists succeed and grow. We are looking for
            talented artists who share our vision and values.
          </p>
        </div>

        <div className="about-genre">
          <h3 className="about-genrehead">GENRES WE FOCUS ON</h3>

          <ul className="about-genre-list">
            <li>HIP-HOP</li>
            <li>R&B</li>
            <li>TRAP </li>
            <li>POP</li>
            <li>AFRO-BEAT</li>
                      <p className="genre-icon">𓂃 ོ☼𓂃</p>
          </ul>

        </div>

        <div className="about-future">
          <h2>OUR NEXT GENERATION</h2>
          <p>
            We don't have a roster yet and that's the point. 
          </p> 
          <p>We're looking for
            the future.</p>
            <span>🗺</span>
            <hr className="hr" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium voluptatum fuga, in doloribus nostrum inventore!
          </p>
          <button onClick={() => setPage("submit")} className="future-btn">
          Submit your music {rightArrow}{" "}
          
        </button>
        </div>

        
      </div>
    </>
  );
};

export default About;
