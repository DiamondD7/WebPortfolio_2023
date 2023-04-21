import React, { useState, useRef } from "react";
import Hero from "./Hero";
import { FiMenu, FiX } from "react-icons/fi";

import Nav from "./Nav/Nav";

import "../styles/homestyles.css";
import Aboutme from "./Aboutme/Aboutme";
import SocialMediaIcons from "./SocialMediaIcons";
import About from "./Aboutme/About";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

import FooterLogo from "../assets/images/footerlogo.png";

import "../styles/footerstyles.css";
const Home = () => {
  const [menuClicked, setMenuClicked] = useState(null);
  const myRef = [useRef(null), useRef(null), useRef(null)];

  const scrollToComponent = (index) => {
    myRef[index].current.scrollIntoView();
  };
  return (
    <div>
      <div
        className={
          menuClicked
            ? "overlay"
            : menuClicked === null
            ? "overlayNone"
            : "overlayClose"
        }
      >
        <Nav />
      </div>
      <div className="hamburgermenu__wrapper">
        <button
          className="btn-icon"
          onClick={() => setMenuClicked(!menuClicked)}
        >
          {menuClicked ? (
            <FiX size={"35px"} color={"#5e17eb"} />
          ) : (
            <FiMenu size={"30px"} color={"#202020"} />
          )}
        </button>
      </div>
      <div className="hero-container">
        <Hero ref={myRef[0]} />
        <SocialMediaIcons />
      </div>
      <div className="aboutme-container">
        <About ref={myRef[1]} />
      </div>

      <div>
        <Projects ref={myRef[2]} />
      </div>

      <div>
        {/* <Footer /> */}
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
              <li>
                <button onClick={() => scrollToComponent(0)}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToComponent(1)}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToComponent(2)}>Projects</button>
              </li>
              <li>Skills</li>
              <li>Testimonials</li>
            </ul>

            <ul className="footer-ul__wrapper">
              <li>
                <a href="https://www.instagram.com/diamondcde/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aaron.sierra.75"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aaron-sierra-0b2106224/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/DiamondD7" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a>Contact me</a>
              </li>
            </ul>

            <div>
              <img className="footer-logo" alt="FooterLogo" src={FooterLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
