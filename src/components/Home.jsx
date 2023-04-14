import React, { useState } from "react";
import Hero from "./Hero";
import { FiMenu, FiX } from "react-icons/fi";
import ContactMeLogo from "../assets/images/Contact-me.png";

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
        <button className="aboutmelogo__btn">
          <img className="aboutmelogo__image" src={ContactMeLogo} />
        </button>
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
