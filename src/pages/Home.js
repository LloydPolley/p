import React from "react";
import "../styles/home.scss";
import BigList from "../components/BigList/BigList";

function Home() {
  return (
    <div className="landing">
      {/* <div className="navigation-animation" /> */}
      <div className="landing__content">
        <div className="landing__intro">
          <h1>Lloyd Polley</h1>
          <p>Javascript / React developer</p>
          <p>
            Currently working as a web developer at{" "}
            <a href="www.riverisland.com" target="_blank">
              River Island
            </a>
          </p>
        </div>
        <div className="big-list-container">
          <BigList
            list={[
              { link: "projects", name: "work" },
              { link: "about", name: "about" },
              { link: "contact", name: "contact" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
