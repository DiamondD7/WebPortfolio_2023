import React from "react";
import PaintedFace from "../../assets/images/AboutPic/aboutmepic.png";

import "../../styles/aboutmestyles.css";
const Aboutme = () => {
  return (
    <div>
      <div className="aboutme-container__wrapper">
        <div>
          <img alt="painted face" src={PaintedFace} />
        </div>
        <div>
          <p className="aboutme-header__text">About me</p>
          <div className="about-statement__wrapper">
            <p className="about-statement">
              I am New Zealand based Fullstack Web Developer, a passionate
              individual that is always willing to learn necessary things to be
              successful in this industry. I like to work with .Net Core using
              React or Angular as the frontend. <br /> <br /> Over the years, I
              have been crafting my skills to be one of the best dev in Auckland
              NZ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
