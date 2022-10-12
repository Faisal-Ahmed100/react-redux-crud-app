import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import AddTodos from "../pages/AddTodos";
import EditTodos from "../pages/EditTodos";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-todos" element={<AddTodos />} />
        <Route path="/edit-todos" element={<EditTodos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
