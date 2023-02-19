import React from "react";
import "../styles/home.scss";

function Projects() {
  return (
    <div className="landing">
      {/* <div className="navigation-animation" /> */}
      <div className="landing__content">
        <div className="landing__intro">
          <h1>Projects</h1>
          <p>
            This is a showcase of my best work in a variety of fields, from
            Graphic and Web Design to Product Design and Management. The world
            of Digital
          </p>
          <p>
            Design has grown at an extremely rapid rate over the last 10 years
            and my aim has been to evolve with it. I’m learning and gaining new
            skills every day.
          </p>
        </div>
        <div className="landing__hero">
          <div className="landing__hero-ctas">
            <a href="/projects/nova">River</a>
            <p className="landing__hero-sub">River Island</p>
            <a href="/">Nova</a>
            <p className="landing__hero-sub">River Island</p>
            <a href="/">Premr</a>
            <p className="landing__hero-sub">River Island</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
