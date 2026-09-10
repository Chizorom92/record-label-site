// import img from "../assets/hero-image.jpg";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Genres } from "../Data/Genres";
import { News } from "../Data/News";
// import logo from "../";
import "../CSS/Home.css";



const Home = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const img = "../assets/hero-image.jpg";
  const rightArrow = "\u{2192}";
  // const share = "\u{f5B3}";




  return (
    <>
      <main className="renderPage">
        {/* Hero Section */}

        <div className="intro-section">
        {/* <Navbar></Navbar> */}
          

        <div className="hero-section">
          <div className="sale-point">
            <span id="music">MUSIC.</span>
            <span id="culture">CULTURE.</span>
            <span id="legacy">LEGACY.</span>
            <hr />
          </div>
          <span className="record-feature">
            Independent Record Label | Artist Development | Music
          </span>

          <p className="hero-text">
            0147 Records is an independent music company built to discover,
            develop and elevate the next generarion of artists and Creators.
          </p>

          <div className="hero-btn">
            <button onClick={() => setPage("submit")} className="music-submit">
              SUBMIT YOUR MUSIC {rightArrow}{" "}
            </button>

            <button className="about-btn" onClick={() => setPage("about")}>
              ABOUT US
            </button>
          </div>
        </div>

        {/* Music Submit Action Section */}

        <div className="first-submit">
          <div className="font">
<FontAwesomeIcon icon={faPaperPlane} />

          </div>
          
          <span className="first-submit-tag">
            
            <div>
              <span className="submit-text-1">
                WE ARE CURRENTLY ACCEPTING SUBMISSIONS
              </span>{" "}
              <br />
              <span className="submit-text-2">
                We're lookin for authentic tallent with unique sound and a
                strong vision.
              </span>
            </div>
          </span>

          <div className="button">
            <button onClick={() => setPage("submit")} className="first-btn">
              Submit Now {rightArrow}
            </button>
          </div>
        </div>

        </div>

        {/* Label genre */}

        <div className="featured">
          <div className="featured-genre">
            <h4 className="featured-title">FEATURED GENRES</h4>
            <span className="featured-view">
              {/* VIEW ALL <FontAwesomeIcon icon={faChevronDown} /> */}
            </span>
          </div>

          {/* Featured Genres */}

          {/*  */}
          <div className="featured-genre-pics">
            {Genres.map((myGenres) => {
              return (
                <div key={myGenres.Id} className="genre-id">
                  <div className="genre-info">
                    <span className="genre-title">{myGenres.title}</span>

                    <img src={myGenres.Image} alt="Genre image" loading="lazy" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* philosophy */}

        <div className="philosophy">
          <h5 className="philos-title">OUR PHILOSOPHY</h5>

          <h2 className="philos-tag">WE BUILD ARTISTS, <br /> NOT JUST CARRERS.</h2>

          <p className="philos-text">
            We believe in long-term growth, creativity, freedom and building
            real foundation. Our focus is on developing the artist, the music
            and the brand.
          </p>

          <button className="philo-btn" onClick={() => setPage("about")}>
            LEARN MORE ABOUT OUR APPROACH
          </button>
        </div>
        <br />

        <h3 className="news-head">LATEST NEWS & UPDATES</h3>

        {/* News */}

        <div className="news-section">
          {" "}
          {News.map((news) => {
            return (
              <div key={news.id} className="news-id">
                <div className="news-date">
                  <span>
                    {news.date} {news.info}
                  </span>
                </div>

                <h3 className="news-title">{news.title}</h3>

                <span className="news-nav">
                  {news.nav} {rightArrow}{" "}
                </span>
                <hr />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
