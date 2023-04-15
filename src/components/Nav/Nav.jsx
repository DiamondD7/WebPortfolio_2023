import React from "react";

import ContactMeLogo from "../../assets/images/Contact-me.png";
import CvResume from "../../assets/images/CvResume.png";

import "../../styles/navstyles.css";
const Nav = () => {
  return (
    <div>
      <div className="nav-container__wrapper">
        <button className="contactmelogo__btn">
          <img className="contactmelogo__image" src={ContactMeLogo} />
        </button>
        <button className="cvresumelogo__btn">
          <img className="cvresumelogo__image" src={CvResume} />
        </button>
      </div>
    </div>
  );
};

export default Nav;
