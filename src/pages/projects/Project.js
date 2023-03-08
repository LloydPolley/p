import React from "react";
import Header from "../../components/Projects/Header/Header";
import "./projects.scss";
import ProjectText from "./ProjectText";

function Project({ header, tagLine, bullets, img, para }) {
  return (
    <div className="project">
      <Header title={header} />
      <div className="project__section">
        <p className="project__intro">{tagLine} </p>
        <div className="project__bullet">
          {bullets?.map((bullet) => {
            const { title, desc, name } = bullet;
            return (
              <div className="project__bullet-point">
                <h2>{title}</h2>
                {name ? <a href={desc}>{name}</a> : <p>{desc}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <ProjectText img={img} text={para} />
    </div>
  );
}

export default Project;
