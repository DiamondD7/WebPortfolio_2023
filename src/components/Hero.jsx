import React from "react";
import Weblogo from "../assets/images/AJS-logo.png";
import Splatter from "../assets/images/splatter.png";
import HeroCartoon from "../assets/images/Hero-cartoon.png";
import Books from "../assets/images/books.png";

import "../styles/herostyles.css";
const Hero = () => {
  const NameText = <span style={{ color: "#5e17eb" }}>Aaron Sierra</span>;
  return (
    <div>
      <div className="hero-container__wrapper">
        <div className="hero-header__wrapper">
          <div className="hero-image__wrapper">
            <img className="AJ-logo" src={Weblogo} alt="AJS" />
          </div>
          {/* <div className="hero-texts_wrapper">
            <p className="hero-header__text">Welcome to my Portfolio.</p>
            <p className="hero-subheader__text">
              Hello my name is {NameText}, I am a Fullstack Web Developer. This
              is where you'll find my latest and greatest web development
              projects. I hope you enjoy exploring and give me a little feedback
              after, Thank you
            </p>
            <div className="hero-btns_wrapper">
              <button className="hero-btn__about">About</button>
              <button className="hero-btn__portfolio">Portfolio</button>
            </div>
          </div> */}
          <div className="hero-cartoon-image__wrapper">
            <img className="hero-cartoon__image" src={HeroCartoon} />
          </div>

          <div className="hero-cartoon-image2__wrapper">
            <img className="hero-cartoon__image2" src={Books} />
          </div>
        </div>
        <div className="image-splatter">
          <img src={Splatter} />
        </div>
        <div className="image-splatter2">
          <img src={Splatter} />
        </div>
        <div className="image-splatter3">
          <img src={Splatter} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
