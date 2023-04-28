import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import "../styles/socialmediastyles.css";
const SocialMediaIcons = () => {
  return (
    <div>
      <div className="socialmedia-container__wrapper">
        <a href="https://www.instagram.com/diamondcde/" target="_blank">
          <FiInstagram size={"25px"} color="#202020" />
        </a>
        <a href="https://github.com/DiamondD7" target="_blank">
          <FiGithub size={"25px"} color="#202020" />
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-sierra-0b2106224/"
          target="_blank"
        >
          <FiLinkedin className="linkedIn" size={"25px"} color="#202020" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
