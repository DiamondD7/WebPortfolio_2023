import React from "react";
import PaintedFace from "../../assets/images/AboutPic/aboutmepic.png";
import { FiChevronDown } from "react-icons/fi";

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
            <p className="about-statement-one">
              I am New Zealand based Fullstack Web Developer, a passionate
              individual that is always willing to learn necessary things to be
              successful in this industry. I like to work with .Net Core using
              React or Angular as the frontend. <br /> <br /> Over the years, I
              have been crafting my skills to be one of the best dev in Auckland
              NZ.
            </p>
            <p className="about-statement-two">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              natus veniam unde assumenda a corrupti facilis perferendis, soluta
              maiores culpa quia doloribus aliquam dolorem, numquam aut modi
              obcaecati quidem eos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Temporibus mollitia dicta recusandae! Laborum
              repellendus provident laboriosam asperiores natus animi dolorum
              necessitatibus aliquid aperiam earum facilis, eius, impedit dicta
              magnam officiis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi dicta atque, assumenda inventore
            </p>
            <div>
              <div className="about-skills__wrapper">
                <button className="about-skills__btn">
                  Skills <FiChevronDown size={"20px"} />
                </button>
              </div>

              <div className="about-techstack__wrapper">
                <button className="about-techstack__btn">
                  Tech Stack <FiChevronDown size={"20px"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
