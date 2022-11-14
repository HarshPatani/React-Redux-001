import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValue } from "../slice";

const Home = () => {
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
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod qui
          fuga nobis ab veritatis laboriosam facere, nisi optio dolorem ex quis
          modi ea placeat earum similique? Optio expedita molestias soluta?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolor
          laboriosam perferendis ipsa saepe molestiae iusto soluta ducimus
          omnis, dolorem corrupti officia, nam veritatis laudantium explicabo
          consectetur temporibus dolore itaque?
        </p>
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

export default Home;
