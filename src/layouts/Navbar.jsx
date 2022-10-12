import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-600 py-6">
      <div className="flex justify-between items-center container mx-auto px-2 sm-px-0">
        <div className="text-white">
          <NavLink className="text-3xl" to="/">
            CRUD.APP
          </NavLink>
        </div>
        <div className="text-white flex gap-5">
          <NavLink to="/">Show todos</NavLink>
          <NavLink to="/add-todos">Add Todos</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
