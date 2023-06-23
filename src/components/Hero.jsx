import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import WeblogoLight from "../assets/images/AJS-logo.png";
import WeblogoDark from "../assets/images/AJS-logo_dark.png";
import Splatter from "../assets/images/splatter.png";
import HeroCartoon from "../assets/images/Hero-cartoon.png";
import HeroCartoonDark from "../assets/images/Hero-cartoon_dark.png";
import Books from "../assets/images/books.png";

import "../styles/herostyles.css";
const Hero = forwardRef(({ changeTheme }, ref) => {
  const [startAnim, setStartAnim] = useState(false);

  const myRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setStartAnim(true);
    }, 1000);
  }, []);

  return (
    <div ref={myRef}>
      <div className="hero-container__wrapper">
        <div className="hero-header__wrapper">
          <div className="hero-image__wrapper">
            <img
              className="AJ-logo"
              src={changeTheme === false ? WeblogoLight : WeblogoDark}
              alt="AJS"
            />
          </div>
          <div className="hero-cartoon-image__wrapper">
            <img
              className={`hero-cartoon__image ${
                startAnim === true ? "start-animation" : ""
              }`}
              src={changeTheme === false ? HeroCartoon : HeroCartoonDark}
            />
          </div>

          <div className="hero-cartoon-image2__wrapper">
            <img
              className={`hero-cartoon__image2 ${
                startAnim === true ? "start-animation" : ""
              }`}
              src={Books}
            />
          </div>
        </div>
        <div className="image-splatter">
          <img className="splatter1" src={Splatter} />
        </div>
        <div className="image-splatter2">
          <img className="splatter2" src={Splatter} />
        </div>
        <div className="image-splatter3">
          <img className="splatter3" src={Splatter} />
        </div>
      </div>
    </div>
  );
});

export default Hero;
