import React from "react";
import {
  FiDribbble,
  FiHeadphones,
  FiTerminal,
  FiEdit,
  FiCamera,
  FiMonitor,
} from "react-icons/fi";

const Hobbies = ({ hobbiesClicked, changeTheme }) => {
  return (
    <div>
      <div
        className="hobbies-container"
        style={hobbiesClicked ? { animation: "opacityEffect .5s ease-in" } : {}}
      >
        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Coding
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Writing code and solving complex problems challenges me and allows
            me to continuously grow my skills. I make time for coding regularly,
            by making website applications and making my own API, as it serves
            as both a hobby and a career aspiration that fuels my drive to learn
            and improve.
          </p>
          <FiTerminal size={"30px"} color="#00bf63" className="floatfloat" />
        </div>

        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Sports
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Playing sports, specifically basketball and boxing, has been a
            significant interest of mine since I was young. Growing up around
            athletic individuals has honed my teamwork skills, and my natural
            athletic ability has enabled me to excel in various activities.
          </p>
          <FiDribbble size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Music
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Music has been a beloved hobby of mine, providing entertainment and
            relaxation. Listening to various genres and artists has expanded my
            musical knowledge and appreciation. I make time for music daily, it
            brings positivity to my well-being.
          </p>
          <FiHeadphones size={"30px"} color="#00bf63" className="floatfloat" />
        </div>

        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Photography
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            As a second photographer, I enjoy capturing special moments and
            enhancing my photography skills. Being a part of the creative
            process alongside other photographers has been a fulfilling hobby.
            It allows me to explore my artistic side and express myself through
            visual storytelling.
          </p>
          <FiCamera size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Designing
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Designing is a passion of mine that aligns with my full stack
            development goal. Creating visually appealing designs allows me to
            exercise my creativity and showcase my skills in both design and
            development. I make time for designing regularly, as it serves as a
            hobby that complements my career aspirations.
          </p>
          <FiEdit size={"30px"} color="#00bf63" className="floatfloat" />
        </div>

        <div className="tx">
          <h2
            className="description-texts__header"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            Gaming
          </h2>
          <p
            className="description-texts__subheader"
            style={
              changeTheme === false
                ? { color: "#202020" }
                : { color: "#f3f3f3" }
            }
          >
            I love to spend my spare time playing PC games, especially after a
            hard day at work or sports. Playing with others has not only
            improved my gaming skills but also helped me develop my social
            abilities. It's a great way to unwind and have fun!
          </p>
          <FiMonitor size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
