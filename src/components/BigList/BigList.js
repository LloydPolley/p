import React from "react";
import "./BigList.scss";

function BigList({ list = [] }) {
  return (
    <div className="big-list">
      {list.map((item) => {
        const { link, name, subtext } = item;
        return (
          <div className="big-list__box">
            <a className="big-list__a" href={`/p/${link}`}>
              {name}
            </a>
            {subtext && <p className="big-list__subtext">{subtext}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default BigList;
