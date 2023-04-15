import React from "react";

import ContactMeLogo from "../../assets/images/Contact-me.png";
import CvResume from "../../assets/images/CvResume.png";

import "../../styles/navstyles.css";
const Nav = () => {
  return (
    <div>
      <button className="contactmelogo__btn">
        <img className="contactmelogo__image" src={ContactMeLogo} />
      </button>
      <button className="contactmelogo__btn">
        <img className="contactmelogo__image" src={CvResume} />
      </button>
    </div>
  );
};

export default Nav;
