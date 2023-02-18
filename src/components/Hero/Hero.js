import React from "react";
import "./hero.scss";

function Hero({ title }) {
  return (
    <div className="hero">
      <div className="hero__animation hero__afterlife" />
      <div className="hero__title-box">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Hero;
