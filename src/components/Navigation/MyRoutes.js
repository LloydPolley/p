import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Work from "../../pages/Work";
import Projects from "../../pages/Project";
import Nova from "../../pages/projects/Nova";
import Contact from "../../pages/Contact";

export default function MyRoutes() {
  console.log("routes", process.env.PUBLIC_URL);
  return (
    <HashRouter basename="/p">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/nova" element={<Nova />} />
        <Route path="/projects/apple" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
