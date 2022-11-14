import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValue } from "../slice";

const About = () => {
  const isLight = useSelector((state) => state.isLight);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div
        className={`container ${
          isLight ? "container-light" : "container-dark"
        }`}
      >
        <h1>About Us</h1>
        <p>This is About Us Page</p>
        <button
          className="btn-light"
          onClick={() => {
            dispatch(setValue());
          }}
        >
          Toggle theme to {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
};

export default About;
