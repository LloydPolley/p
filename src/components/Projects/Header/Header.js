import React from "react";
import "./Header.scss";

function Hero({ title }) {
  return (
    <div className="header">
      {/* <a href="/p/" className="header__home">
        HOME
      </a> */}
      <div className="header-anim" />
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;
