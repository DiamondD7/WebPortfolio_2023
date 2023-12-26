import React from "react";

import "../../styles/allprojectsstyles.css";

const AllProjects = ({ changeTheme, setShowAllProjects }) => {
  return (
    <div>
      <button
        className="backBtn"
        onClick={() => setShowAllProjects(false)}
        style={
          changeTheme === false ? { color: "#202020" } : { color: "#f3f3f3" }
        }
      >
        Back
      </button>
      <div className="all-projects__wrapper">
        <div className="screenshots__wrapper">
          <div className="nf-screenshot-1"></div>
          <div className="preview-container-nf gridItems">
            <div className="content">
              <p>
                I have cloned the Netflix application that has the ability to
                play videos with a dynamic hero that always changes when the
                page is refreshed and recieves data from the API provided by
                TMBD. This application is built using ReactJS.
              </p>
              <div className="netflixBtns">
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
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="nf-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="yt-screenshot-1"></div>
          <div className="preview-container-yt gridItems">
            <div className="content">
              <p>
                I created a YouTube clone utilizing RapidAPI and ReactJS, aiming
                to replicate the essential features of the popular video-sharing
                platform. Leveraging RapidAPI's functionalities, the application
                enables users to search for and discover videos
              </p>
              <div className="netflixBtns">
                <a
                  className="content-btn__viewproject"
                  href="https://youtubeclonediamond.netlify.app/"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/youtube_client"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="yt-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="blogger-screenshot-1"></div>
          <div className="preview-container-blogger gridItems">
            <div className="content">
              <p>
                At the heart of this project is a user-centric approach,
                offering a space where writing enthusiasts can effortlessly
                showcase their skills. From captivating articles and insightful
                reports to breaking news and personal narratives, our platform
                accommodates a diverse range of content. Seamlessly integrating
                an intuitive ReactJS frontend with a robust ASP.NET Core WebAPI
                backend, users experience a fluid and engaging environment.
              </p>
              <div className="bloggerBtns">
                <a
                  className="content-btn__viewproject"
                  href="https://www.youtube.com/watch?v=DRyId_rv3fU"
                  target="_blank"
                >
                  View project
                </a>
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/blogger_client"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/blogger_server_2/tree/master"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View backend code
                </a>
              </div>
            </div>
          </div>
          <div className="blogger-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="shoplift-screenshot-1"></div>
          <div className="preview-container-shoplift gridItems">
            <div className="content">
              <p>
                This project is a personal e-commerce project consuming its own
                node.js API. This is the client side of the website and there is
                another admin side of the website where admins can perform CRUD
                operations and control the data of the website. This was made
                using the M-E-R-N Stack. Additionally, this project is made just
                for myself and my learning, that is why it is only partially
                completed. The 'Men' and 'Women' sections are the only ones
                working and populated by the API. <br /> FYI: Wait approximately
                2 mins for the data to load.
              </p>
              <div className="shopliftBtns">
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
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="shoplift-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="shopliftAdmin-screenshot-1"></div>
          <div className="preview-container-shopliftAdmin gridItems">
            <div className="content">
              <p>
                This project is the admin part of the e-commerce website where
                only authorised personel have access, have the power to perform
                CRUD operations and have full control of the data FYI: Wait for
                the data to load around 2 mins. FYI: Wait for the data to load
                around 2 mins.
              </p>
              <div className="shopliftAdminBtns">
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
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="shopliftAdmin-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="kaligraphy-screenshot-1"></div>
          <div className="preview-container-kaliphotography gridItems">
            <div className="content">
              <p>
                I am making this photography portfolio website for a client. As
                of right now, I am still working on this project; working
                closely with the client and fulfilling my client's needs and
                wants.
              </p>
              <div className="kaliphotographyBtns">
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/kaliphotography"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="kaligraphy-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="financeTracker-screenshot-1"></div>
          <div className="preview-container-financeTracker gridItems">
            <div className="content">
              <p>
                This application is a personal finance tracker app, where the
                user has the ability to manually input their transaction
                whenever they want. Or they could also use a .CSV file exported
                from their bank statement and the app will convert it to json
                format where it is readable for the API. The application can
                provide graph insight and details about the biggest expense and
                your total savings overall.
              </p>
              <div className="financeTrackerBtns">
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
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/FinanceServer"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View backend code
                </a>
              </div>
            </div>
          </div>
          <div className="financeTracker-screenshot-1"></div>
        </div>

        <div className="screenshots__wrapper">
          <div className="Todo-screenshot-1"></div>
          <div className="preview-container-Todo gridItems">
            <div className="content">
              <p>
                This project is focused on the CRUD operations, where users can
                add their daily tasks. This is made using .Net Core Web API, MS
                SQL Server, Reactjs and It is hosted in Azure.
              </p>
              <div className="TodoBtns">
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
                  style={{ color: "#f3f3f3" }}
                >
                  View code
                </a>
                <a
                  className="content-btn__viewcode"
                  href="https://github.com/DiamondD7/todolist_backend"
                  target="_blank"
                  style={{ color: "#f3f3f3" }}
                >
                  View backend code
                </a>
              </div>
            </div>
          </div>
          <div className="Todo-screenshot-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
