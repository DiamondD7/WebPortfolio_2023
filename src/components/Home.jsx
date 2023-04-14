import React, { useState } from "react";
import Hero from "./Hero";
import { FiAlignJustify } from "react-icons/fi";

import "../styles/homestyles.css";
const Home = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <div className={menuClicked ? "overlay" : "overlayNone"}></div>
      <div className="hamburgermenu__wrapper">
        <button
          className="btn-icon"
          onClick={() => setMenuClicked(!menuClicked)}
        >
          <FiAlignJustify
            size={"30px"}
            color={menuClicked ? "#5e17eb" : "#202020"}
          />
        </button>
      </div>
      <div className="hero-container">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
