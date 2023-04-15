import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import "../styles/socialmediastyles.css";
const SocialMediaIcons = () => {
  return (
    <div>
      <div className="socialmedia-container__wrapper">
        <FiInstagram size={"25px"} color="#202020" />
        <FiGithub size={"25px"} color="#202020" />
        <FiLinkedin size={"25px"} color="#202020" />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
