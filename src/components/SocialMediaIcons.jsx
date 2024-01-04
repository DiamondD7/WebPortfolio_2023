import React from "react";
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiSunrise,
  FiSunset,
} from "react-icons/fi";

import "../styles/socialmediastyles.css";
const SocialMediaIcons = ({ lightTheme, changeTheme }) => {
  return (
    <div>
      <div className="socialmedia-container__wrapper">
        <div className="socials__wrapper">
          <a href="https://www.instagram.com/diamondcde/" target="_blank">
            <FiInstagram
              size={"25px"}
              color={changeTheme === false ? "#202020" : "#f3f3f3"}
            />
          </a>
          <a href="https://github.com/DiamondD7" target="_blank">
            <FiGithub
              size={"25px"}
              color={changeTheme === false ? "#202020" : "#f3f3f3"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-sierra-0b2106224/"
            target="_blank"
          >
            <FiLinkedin
              className="linkedIn"
              size={"25px"}
              color={changeTheme === false ? "#202020" : "#f3f3f3"}
            />
          </a>
        </div>
        <div className="brightness__wrapper">
          <button
            className={changeTheme === false ? "btn-light" : "btn-dark"}
            onClick={lightTheme}
          >
            {changeTheme === false ? (
              <FiSunset size={"23px"} />
            ) : (
              <FiSunrise size={"23px"} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
