import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
