import React from "react";
import Header from "../../components/Projects/Header/Header";
import "./projects.scss";

function ProjectText({ img, text }) {
  return (
    <>
      <div className="project__img-cont">
        <img src={img} />
      </div>
      <div className="project__section">
        <div className="project__desc">{text}</div>
      </div>
    </>
  );
}

export default ProjectText;
