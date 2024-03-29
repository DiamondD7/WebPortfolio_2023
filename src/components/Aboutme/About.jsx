import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import Hobbies from "./Hobbies";

import "../../styles/aboutstyles.css";
const Description = ({ changeTheme }) => {
  const [skillsClicked, setSkillsClicked] = useState(true);
  const [hobbiesClicked, setHobbiesClicked] = useState(false);

  return (
    <div>
      <div className="description__wrapper">
        <div className="description-list__wrapper">
          <ul>
            <li>
              <button
                onClick={() => {
                  setSkillsClicked(true);
                  setHobbiesClicked(false);
                }}
                style={
                  skillsClicked === true
                    ? {
                        borderBottom: "1px solid #00bf63",
                      }
                    : {}
                }
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={hobbiesClicked === true ? "test" : ""}
                onClick={() => {
                  setHobbiesClicked(true);
                  setSkillsClicked(false);
                }}
                style={
                  hobbiesClicked === true
                    ? { borderBottom: "1px solid #00bf63" }
                    : {}
                }
              >
                Hobbies
              </button>
            </li>
          </ul>
        </div>
        <div
          className="description-container__wrapper"
          style={
            changeTheme === false
              ? { backgroundColor: "#f3f3f3" }
              : { backgroundColor: "#202020", color: "#f3f3f3" }
          }
        >
          {skillsClicked && (
            <div
              className="description-texts__wrapper"
              style={
                skillsClicked ? { animation: "opacityEffect .5s ease-in" } : {}
              }
            >
              <div className="description-texts-container">
                <h2
                  className="description-texts__header"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  Frontend
                </h2>
                <p
                  className="description-texts__subheader"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  The significance of the client side of an application lies in
                  its ability to engage users with the website, and as such, I
                  place great importance on its development.
                </p>

                <p className="description-texts__title1">Technologies I use:</p>
                <p>Html, Css, Javascript, Semantic-ui</p>

                <p className="description-texts__title1">
                  Frontend Libraries/Framework:
                </p>
                <p>React & Angular</p>

                <p className="description-texts__title1">Dev Tools:</p>
                <p>
                  React-Icons, Figma, Sketch, Font Awesome, HeroIcons, Coolors
                </p>
              </div>
              <div className="description-texts-container">
                <h2
                  className="description-texts__header"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  Backend
                </h2>
                <p
                  className="description-texts__subheader"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  The client-side of an application is crucial in captivating
                  users, and similarly, the backend-side is vital in providing
                  an application with its purpose and bringing it to fruition.
                </p>
                <p className="description-texts__title1">Technologies I use:</p>
                <p>C#, Javascript, TS , .Net Core, MSSQL</p>
                <p className="description-texts__title1">
                  Backend Libraries/Framework:
                </p>
                <p>ASP.NET & ExpressJS</p>
                <p className="description-texts__title1">Dev Tools:</p>
                <p>Postman, SwaggerUI, Axios</p>
              </div>
              <div className="description-texts-container">
                <h2
                  className="description-texts__header"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  Currently Learning
                </h2>
                <p
                  className="description-texts__subheader"
                  style={
                    changeTheme === false
                      ? { color: "#202020" }
                      : { color: "#f3f3f3" }
                  }
                >
                  technology and software development, is a personal passion of
                  mine. Continual learning and growth within this industry are
                  paramount to my success.
                </p>
                <p className="description-texts__title1">Improving on these:</p>
                <p>Angular, TS, ExpressJS, Design</p>
                <p className="description-texts__title1">Self-development:</p>
                <p>Communication & Pair-Programming</p>
                <p className="description-texts__title1">To learn next:</p>
                <p>Vue, Wordpress, AI, Python</p>
              </div>
            </div>
          )}

          {hobbiesClicked && (
            <Hobbies
              hobbiesClicked={hobbiesClicked}
              changeTheme={changeTheme}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const About = forwardRef(({ changeTheme }, ref) => {
  const myRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div ref={myRef}>
      <div className="about-container__wrapper">
        <h1 className="about-header__text">
          Hello, I am Aaron. Nice to meet you.
        </h1>
        <p className="about-paragraph__text">
          I am a New Zealand based Fullstack Web Developer, a passionate
          individual that is always willing to learn necessary things to be
          successful in this industry. I like to work with Asp.Net Core with
          ReactJS however, I can work with other technologies and I am a fast
          learner.
        </p>

        <Description changeTheme={changeTheme} />
      </div>
    </div>
  );
});

export default About;
