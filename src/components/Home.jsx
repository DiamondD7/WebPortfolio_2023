import React, { useState } from "react";
import Hero from "./Hero";
import { FiMenu, FiX } from "react-icons/fi";

import Nav from "./Nav/Nav";

import "../styles/homestyles.css";
const Home = () => {
  const [menuClicked, setMenuClicked] = useState(null);
  return (
    <div>
      <div
        className={
          menuClicked
            ? "overlay"
            : menuClicked === null
            ? "overlayNone"
            : "overlayClose"
        }
      >
        <Nav />
      </div>
      <div className="hamburgermenu__wrapper">
        <button
          className="btn-icon"
          onClick={() => setMenuClicked(!menuClicked)}
        >
          {menuClicked ? (
            <FiX size={"35px"} color={"#5e17eb"} />
          ) : (
            <FiMenu size={"30px"} color={"#202020"} />
          )}
        </button>
      </div>
      <div className="hero-container">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
