import React, { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Nav from "./Nav/Nav";
import SocialMediaIcons from "./SocialMediaIcons";
import About from "./Aboutme/About";
import Projects from "./Projects/Projects";
import FooterLogo from "../assets/images/footerlogo.png";
import CVPDF from "../assets/files/Aaron Sierra CV 2023.pdf";

import "../styles/homestyles.css";
import "../styles/footerstyles.css";
import AllProjects from "./Projects/AllProjects";
const Home = ({ lightTheme, changeTheme }) => {
  const [menuClicked, setMenuClicked] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const myRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToComponent = (index) => {
    myRef[index].current.scrollIntoView();
  };

  const scrollToContact = (index) => {
    myRef[index].current.scrollIntoView();
    setMenuClicked(!menuClicked);
  };

  useEffect(() => {
    var body = document.getElementById("--body");
    if (menuClicked === true) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [menuClicked]);
  return (
    <div>
      {showAllProjects === true ? (
        <AllProjects
          changeTheme={changeTheme}
          setShowAllProjects={setShowAllProjects}
        />
      ) : (
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
            <Nav ref={myRef[3]} />
          </div>
          <div className="hamburgermenu__wrapper">
            <button
              className="btn-icon"
              onClick={() => setMenuClicked(!menuClicked)}
            >
              {menuClicked ? (
                <FiX size={"35px"} color={"#5e17eb"} />
              ) : (
                <FiPhone
                  className="phone-icon"
                  size={"25px"}
                  color={changeTheme === false ? "#202020" : "#f3f3f3"}
                />
              )}
            </button>
          </div>
          <div className="hero-container">
            <Hero ref={myRef[0]} changeTheme={changeTheme} />
            <SocialMediaIcons
              lightTheme={lightTheme}
              changeTheme={changeTheme}
            />
          </div>
          <div className="aboutme-container">
            <About ref={myRef[1]} changeTheme={changeTheme} />
          </div>

          <div>
            <Projects
              ref={myRef[2]}
              changeTheme={changeTheme}
              setShowAllProjects={setShowAllProjects}
            />
          </div>

          <div>
            {/* <Footer /> */}
            <div className="footer-container__wrapper">
              <div className="footer-title__wrapper">
                <div>
                  <h1 className="footer-title__header">Let's work together</h1>
                  <div>
                    <h3 className="footer-title__quote">
                      I may be unfinished, but I am not stagnant - I am a work
                      in progress, constantly evolving and growing.
                    </h3>
                  </div>
                </div>

                <ul className="footer-ul__wrapper">
                  <li>
                    <a
                      href="https://www.instagram.com/diamondcde/"
                      target="_blank"
                    >
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
                    <button onClick={() => scrollToContact(3)}>
                      Contact me
                    </button>
                  </li>
                </ul>

                <ul className="footer-ul__wrapper">
                  <li>
                    <button onClick={() => scrollToComponent(0)}>Home</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToComponent(1)}>About</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToComponent(2)}>
                      Projects
                    </button>
                  </li>

                  <li>&nbsp;</li>
                  <li>
                    <a href={CVPDF} target="_blank">
                      Resume
                    </a>
                  </li>
                </ul>

                <div>
                  <img
                    className="footer-logo"
                    alt="FooterLogo"
                    src={FooterLogo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
