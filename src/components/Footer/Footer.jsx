import React from "react";
import FooterLogo from "../../assets/images/footerlogo.png";

import "../../styles/footerstyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container__wrapper">
        <div className="footer-title__wrapper">
          <div>
            <h1 className="footer-title__header">Let's work together</h1>
            <div>
              <h3 className="footer-title__quote">
                I may be unfinished, but I am not stagnant - I am a work in
                progress, constantly evolving and growing.
              </h3>
            </div>
          </div>

          <ul className="footer-ul__wrapper">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Testimonials</li>
          </ul>

          <ul className="footer-ul__wrapper">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Contact me</li>
          </ul>

          <div>
            <img className="footer-logo" alt="FooterLogo" src={FooterLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
