import React from "react";
import Hero from "./Hero";
import { FiAlignJustify } from "react-icons/fi";

import "../styles/homestyles.css";
const Home = () => {
  return (
    <div>
      <div className="hamburgermenu__wrapper">
        <button className="btn-icon">
          <FiAlignJustify size={"30px"} color={"#202020"} />
        </button>
      </div>
      <div className="hero-container">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
