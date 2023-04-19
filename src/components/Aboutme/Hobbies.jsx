import React from "react";
import {
  FiDribbble,
  FiHeadphones,
  FiTerminal,
  FiEdit,
  FiCamera,
  FiMonitor,
} from "react-icons/fi";

const Hobbies = ({ hobbiesClicked }) => {
  return (
    <div>
      <div
        className="hobbies-container"
        style={hobbiesClicked ? { animation: "opacityEffect .5s ease-in" } : {}}
      >
        <div className="tx">
          <h2 className="description-texts__header">Gaming</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiMonitor size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2 className="description-texts__header">Sports</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiDribbble size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2 className="description-texts__header">Music</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiHeadphones size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2 className="description-texts__header">Photgraphy</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiCamera size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2 className="description-texts__header">Designing</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiEdit size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>

        <div className="tx">
          <h2 className="description-texts__header">Coding</h2>
          <p className="description-texts__subheader">
            I play too often! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab veniam molestias dolore exercitationem odit ratione neque
            fuga quibusdam deleniti nihil illo laboriosam repellat, repellendus
            aspernatur, quaerat delectus laborum fugiat itaque.
          </p>
          <FiTerminal size={"30px"} color="#5e17eb" className="floatfloat" />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
