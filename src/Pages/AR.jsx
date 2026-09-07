import { useEffect } from "react";
import { develop } from "../Data/develop";

import "../CSS/AR.css";

const AR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="develop">
        <h3>A&R / ARTIST DEVELOPMENT</h3>
        <p>
          We provide the tools, strategy and support to help artists grow and
          build sustainable careers.
        </p>

        <aside className="develop-tools">
          {develop.map((Develop) => {
            return (
              <div key={Develop.id} className="develop-artist">
                <div>{Develop.icon}</div>

                <div>
                  <h5>{Develop.label}</h5>
                  <p>{Develop.description}</p>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default AR;
