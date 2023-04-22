import React, { useRef, forwardRef, useImperativeHandle } from "react";
import NetF from "../../assets/ProjectImages/nf.png";
import KaliWeb from "../../assets/ProjectImages/kaliphotography.png";
import ShopNZ from "../../assets/ProjectImages/shopNZ.png";
import ShopAdmin from "../../assets/ProjectImages/shopAdmin.png";

import "../../styles/myprojectsstyles.css";

const ProjectContents = () => {
  return (
    <div>
      <div className="contents-container__wrapper">
        <div className="contents__wrapper">
          <div>
            <img
              className="content-project_one"
              src={NetF}
              alt="netflix-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              I have cloned the Netflix application that has the ability to play
              videos with dynamic hero that always change when the page is
              refreshed and recieves data from the api provided by TMBD. This
              application is built using ReactJS.
            </p>
            <div className="content-project__buttons">
              <button className="content-btn__viewproject">View project</button>
              <button className="content-btn__viewcode">View code</button>
            </div>
          </div>
        </div>

        <div className="contents__wrapper">
          <div>
            <img
              className="content-project_one"
              src={ShopNZ}
              alt="netflix-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dignissimos enim. Sit deserunt dolorum est fuga ex magni veniam et
              aut? Voluptate asperiores autem porro illo, illum minus facilis
              repellendus.
            </p>
            <div className="content-project__buttons">
              <button className="content-btn__viewproject">View project</button>
              <button className="content-btn__viewcode">View code</button>
            </div>
          </div>
        </div>

        <div className="contents__wrapper">
          <div>
            <img
              className="content-project_one fitImage"
              src={ShopAdmin}
              alt="netflix-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dignissimos enim. Sit deserunt dolorum est fuga ex magni veniam et
              aut? Voluptate asperiores autem porro illo, illum minus facilis
              repellendus.
            </p>
            <div className="content-project__buttons">
              <button className="content-btn__viewproject">View project</button>
              <button className="content-btn__viewcode">View code</button>
            </div>
          </div>
        </div>

        <div className="contents__wrapper">
          <div>
            <img
              className="content-project_one"
              src={KaliWeb}
              alt="netflix-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dignissimos enim. Sit deserunt dolorum est fuga ex magni veniam et
              aut? Voluptate asperiores autem porro illo, illum minus facilis
              repellendus.
            </p>
            <div className="content-project__buttons">
              <button className="content-btn__viewproject">View project</button>
              <button className="content-btn__viewcode">View code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = forwardRef((props, ref) => {
  const myRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div ref={myRef}>
      <div className="project-title__wrapper">
        <h1 className="project-title__text">My Projects</h1>
        <p className="project-paragraph__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quaerat veritatis fugiat maxime. Voluptatem hic veniam libero ea
          molestias odit nobis quisquam qui, nesciunt fuga. Molestiae itaque at
          asperiores facilis.
        </p>
      </div>

      <div>
        <ProjectContents />
      </div>
    </div>
  );
});

export default Projects;
