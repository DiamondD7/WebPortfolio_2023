import React, { useState } from "react";
import Home from "./components/Home";

import "./App.css";
import AllProjects from "./components/Projects/AllProjects";
const App = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const lightTheme = () => {
    setChangeTheme(!changeTheme);
  };

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home lightTheme={lightTheme} changeTheme={changeTheme} />;
      break;
    case "/AllProjects":
      component = <AllProjects />;
      break;
    default:
      console.log("Error in the switch case");
  }
  return (
    <div className="App" id={changeTheme === false ? "light" : "dark"}>
      {/* <Home lightTheme={lightTheme} changeTheme={changeTheme} /> */}
      {component}
    </div>
  );
};

export default App;
