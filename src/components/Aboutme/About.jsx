import React from "react";

import "../../styles/aboutstyles.css";
const Description = () => {
  return (
    <div>
      <div className="description__wrapper">
        <div className="description-list__wrapper">
          <ul>
            <li>Skills</li>
            <li>Hobbies</li>
            <li>Experience</li>
            <li>Study</li>
          </ul>
        </div>
        <div className="description-container__wrapper">
          <div className="description-texts__wrapper">
            <div>
              <h2 className="description-texts__header">Frontend</h2>
            </div>
            <div>
              <h2 className="description-texts__header">Backend</h2>
            </div>
            <div>
              <h2 className="description-texts__header">Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className="about-container__wrapper">
        <h1 className="about-header__text">
          Hello, I am Aaron. Nice to meet you.
        </h1>
        <p className="about-paragraph__text">
          I am New Zealand based Fullstack Web Developer, a passionate
          individual that is always willing to learn necessary things to be
          successful in this industry. I like to work with .Net Core using React
          or Angular as the frontend. Over the years, I have been crafting my
          skills to be one of the best dev in Auckland NZ.
        </p>

        <Description />
      </div>
    </div>
  );
};

export default About;
