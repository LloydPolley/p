import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Work from "../../pages/Work";
import Projects from "../../pages/Project";
import Project from "../../pages/projects/Project";
import Nova from "../../pages/projects/Nova";
import Contact from "../../pages/Contact";

const river = {
  header: "River Island",
  tagLine: "Online & instore fashion brand with ecommerce website",
  bullets: [
    { title: "Role", desc: "Web Development" },
    {
      title: "Involvement",
      desc: "Front end development, building react web apps ",
    },
    {
      title: "URL",
      desc: "https://www.riverisland.com/",
      name: "River Island",
    },
  ],
  img: "https://riverisland.scene7.com/is/image/RiverIsland/c20200228-wk10-wlp-hero-new-arrivals_DNT?flush3&$retina$",
  para: "Being an animation studio, Okalpha had some very clear ideas for how the website should feel and what sort of interactions they wanted to see. They also wanted a CMS that was easy to use, and so I recommended Webflow as the website builder so that they could maintain their own website going forward really easily.",
};

const nova = {
  header: "Nova",
  tagLine: "Online & instore fashion brand with ecommerce website",
  bullets: [
    { title: "Role", desc: "Web Development" },
    {
      title: "Involvement",
      desc: "Front end development, building react web apps ",
    },
    {
      title: "URL",
      desc: "https://www.riverisland.com/",
      name: "River Island",
    },
  ],
  img: "https://riverisland.scene7.com/is/image/RiverIsland/c20200228-wk10-wlp-hero-new-arrivals_DNT?flush3&$retina$",
  para: "Being an animation studio, Okalpha had some very clear ideas for how the website should feel and what sort of interactions they wanted to see. They also wanted a CMS that was easy to use, and so I recommended Webflow as the website builder so that they could maintain their own website going forward really easily.",
};

export default function MyRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" p element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/river" element={<Project {...river} />} />
        <Route path="/projects/nova" element={<Project {...nova} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
