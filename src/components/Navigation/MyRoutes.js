import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Work from "../../pages/Work";
import Projects from "../../pages/Project";
import Nova from "../../pages/projects/Nova";
import Contact from "../../pages/Contact";

export default function MyRoutes() {
  console.log("routes", process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" p element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/nova" element={<Nova />} />
        <Route path="/projects/apple" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
