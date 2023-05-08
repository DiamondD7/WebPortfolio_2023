import React, { useRef, forwardRef, useImperativeHandle } from "react";
import NetF from "../../assets/ProjectImages/nf.png";
import KaliWeb from "../../assets/ProjectImages/kaliphotography.png";
import ShopNZ from "../../assets/ProjectImages/shopNZ.png";
import ShopAdmin from "../../assets/ProjectImages/shopAdmin.png";
import FinanceTracker from "../../assets/ProjectImages/financetrackerss.png";
import ToDo from "../../assets/ProjectImages/todoscreenshot.png";
import Vrooms from "../../assets/ProjectImages/vroomss.jpg";

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
            <div className="content-project__buttons oneBtns">
              <a
                className="content-btn__viewproject"
                href="https://nfcloneweb.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/Netflix-clone"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one"
              src={ShopNZ}
              alt="ShopLiftClient-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              This project is a personal e-commerce project consuming its own
              node.js API. This is the client side of the website and there is
              another admin side of the website where admins can perform CRUD
              operations and control the data of the website. This was made
              using the M-E-R-N Stack. Additionally, this project is made just
              for myself and my learning, that is why it is only partially
              completed. The 'Men' and 'Women' sections are the only ones
              working and populated by the API. FYI: Wait for the data to load
              around 2 mins.
            </p>
            <div className="content-project__buttons twoBtns">
              <a
                className="content-btn__viewproject"
                href="https://shopliftnzclient.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/shoplift_client"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one fitImage"
              src={ShopAdmin}
              alt="ShopLiftAdmin-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              This project is the admin part of the e-commerce website where
              only authorised personel have access, have the power to perform
              CRUD operations and have full control of the data FYI: Wait for
              the data to load around 2 mins. FYI: Wait for the data to load
              around 2 mins.
            </p>
            <div className="content-project__buttons threeBtns">
              <a
                className="content-btn__viewproject"
                href="https://shopliftnzadmin.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/shoplift_admin"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one"
              src={KaliWeb}
              alt="KaliWeb-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              I am making this photography portfolio website for a client. As of
              right now, I am still working on this project; working closely
              with the client and fulfilling my client's needs and wants.
            </p>
            <div className="content-project__buttons fourBtns">
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/kaliphotography"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one"
              src={Vrooms}
              alt="Vrooms-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              This is another personal project that I am working on. The
              technologies used here are ReactJS, Asp.Net Core, C#, MS SQL
              Server. I decided to make this e-commerce project because it can
              help me improve on and understand web application stages and
              cycles that come into play.
            </p>
            <br />
            <br />
            <div className="content-project__buttons sevenBtns">
              <a
                className="content-btn__viewproject"
                href="https://vroomclient.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/vroom_client"
                target="_blank"
              >
                View code
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/vroom_server"
                target="_blank"
              >
                View backend code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one"
              src={FinanceTracker}
              alt="Finance-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              This application is a personal finance tracker app, where the user
              have the ability to manually input their transaction whenever they
              want. Or they could also use a .CSV file exported from their bank
              statement and the app will convert it to json format where it is
              readable for the API. The application can provide graph insight
              and details about the biggest expense and your total savings
              overall.
            </p>
            <div className="content-project__buttons fiveBtns">
              <a
                className="content-btn__viewproject"
                href="https://financetrackerclient.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/financeClient"
                target="_blank"
              >
                View code
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/FinanceServer"
                target="_blank"
              >
                View backend code
              </a>
            </div>
          </div>
        </div>

        <div className="contents__wrapper marLeft">
          <div>
            <img
              className="content-project_one"
              src={ToDo}
              alt="ToDo-project"
            />
          </div>
          <div className="content-project-sumamry__wrapper">
            <p className="content-project-summary_one">
              This project is focused on the CRUD operations, where users can
              add their daily tasks. This is made using .Net Core Web API, MS
              SQL Server, Reactjs and It is hosted in Azure.
            </p>
            <div className="content-project__buttons sixBtns">
              <a
                className="content-btn__viewproject"
                href="https://todolistc.azurewebsites.net/"
                target="_blank"
              >
                View project
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/todolist_client"
                target="_blank"
              >
                View code
              </a>
              <a
                className="content-btn__viewcode"
                href="https://github.com/DiamondD7/todolist_backend"
                target="_blank"
              >
                View backend code
              </a>
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
          The process of designing and developing projects from start to finish
          not only satisfies my passion for technology but also fuels my desire
          to continuously learn and improve as a developer.
        </p>
      </div>

      <div>
        <ProjectContents />
      </div>
    </div>
  );
});

export default Projects;
