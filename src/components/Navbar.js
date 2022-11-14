import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLight = useSelector((state) => state.isLight);
  return (
    <div className={`navbar ${isLight ? "navbar-light" : "navbar-dark"}`}>
      <h1>React-Redux</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/service">Services</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
