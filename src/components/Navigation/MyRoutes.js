import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Work from "../../pages/Work";
import Projects from "../../pages/Project";
import Nova from "../../pages/projects/Nova";
import Contact from "../../pages/Contact";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/nova" element={<Nova />} />
        <Route path="/projects/apple" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
