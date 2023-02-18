import React from "react";
import "../styles/home.scss";

function Home() {
  return (
    <div className="landing">
      {/* <div className="navigation-animation" /> */}
      <div className="landing__content">
        <div className="landing__intro">
          <h1>LLOYD POLLEY</h1>
          <p>Javascript / React developer</p>
          <p>
            Currently working as a web developer at{" "}
            <a href="www.riverisland.com" target="_blank">
              River Island
            </a>
          </p>
        </div>
        <div className="landing__hero">
          <div className="landing__hero-ctas">
            <a href="/work">Work</a>
            <a href="/Projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
