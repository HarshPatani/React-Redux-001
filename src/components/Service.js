import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValue } from "../slice";

const Service = () => {
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
        <h1>Our Services Page</h1>
        <p>Our Services are currently unavailable</p>
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

export default Service;
