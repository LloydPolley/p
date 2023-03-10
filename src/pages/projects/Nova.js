import React from "react";
import Header from "../../components/Projects/Header/Header";
import "./projects.scss";

function River() {
  return (
    <div className="project">
      <Header title="Nova 2" />
      <p className="project__desc">
        A music streaming website was built with Next.js and Firebase, inspired
        by popular platforms such as Soundcloud, Mixcloud, and Beatport.
      </p>
    </div>
  );
}

export default River;
