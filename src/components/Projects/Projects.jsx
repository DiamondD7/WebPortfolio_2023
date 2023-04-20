import React from "react";
import NetF from "../../assets/ProjectImages/nf.png";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dignissimos enim. Sit deserunt dolorum est fuga ex magni veniam et
              aut? Voluptate asperiores autem porro illo, illum minus facilis
              repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
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
};

export default Projects;
