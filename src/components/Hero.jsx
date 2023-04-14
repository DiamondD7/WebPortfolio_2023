import React from "react";
import Weblogo from "../assets/images/AJS-logo.png";
import HeroAnimate from "../assets/images/Hero-animate.png";

import "../styles/herostyles.css";
const Hero = () => {
  return (
    <div>
      <div className="hero-container__wrapper">
        <div className="hero-header__wrapper">
          <div className="hero-texts_wrapper">
            <p className="hero-header__text">Welcome to my Portfolio.</p>
            <p className="hero-subheader__text">
              Hello my name is Aaron Sierra, I am a Fullstack Web Developer.
              This is where you'll find my latest and greatest web development
              projects. I hope you enjoy exploring and give me a little feedback
              after, Thank you
            </p>
          </div>
          <div className="hero-animate-image__wrapper">
            <img className="hero-animate__image" src={HeroAnimate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
