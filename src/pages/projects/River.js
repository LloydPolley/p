import React from "react";
import Header from "../../components/Projects/Header/Header";
import "./projects.scss";

const bullets = [
  { title: "Role", desc: "Web Development" },
  {
    title: "Involvement",
    desc: "Front end development, building react web apps ",
  },
  { title: "URL", desc: "https://www.riverisland.com/", name: "River Island" },
];

function River() {
  return (
    <div className="project">
      <Header title="River Island" />

      <div className="project__section">
        <p className="project__intro">
          Online & instore fashion brand with ecommerce website
        </p>
        <div className="project__bullet">
          {bullets.map((bullet) => {
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

      <div className="project__img-cont">
        <img src="https://riverisland.scene7.com/is/image/RiverIsland/c20200228-wk10-wlp-hero-new-arrivals_DNT?flush3&$retina$" />
      </div>
      <div className="project__desc">
        Being an animation studio, Okalpha had some very clear ideas for how the
        website should feel and what sort of interactions they wanted to see.
        They also wanted a CMS that was easy to use, and so I recommended
        Webflow as the website builder so that they could maintain their own
        website going forward really easily.
      </div>
    </div>
  );
}

export default River;
