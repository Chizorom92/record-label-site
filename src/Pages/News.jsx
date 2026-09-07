import { useEffect } from "react";
import { News2 } from "../Data/News";

import "../CSS/News.css";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="news">
        <h4>NEWS & LABEL UPDATES</h4>
        <p>Stay Updated with everything happening at 0147 Records</p>

        <div className="news-list">
          {News2.map((news) => {
            return (
              <div key={news.id} className="news-post">
                <img src={news.img} alt="not uploaded" />

                <div className="news-text">
                  <h4>{news.title}</h4>
                  <span className="news-day">
                    {news.date} ᯓ➤ {news.tag}
                  </span>

                  <p>{news.description}</p>
                  <span className="news-nav">
                    {news.nav} {news.arrow}
                  </span>
                </div>
              </div>
            );
          })}

          <button className="news-btn">VIEW ALL NEWS</button>
        </div>
      </div>
    </>
  );
};

export default News;
