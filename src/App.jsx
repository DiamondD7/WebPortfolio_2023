import React, { useState } from "react";
import Home from "./components/Home";

import "./App.css";
const App = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const lightTheme = () => {
    setChangeTheme(!changeTheme);
  };
  return (
    <div className="App" id={changeTheme === false ? "light" : "dark"}>
      <Home lightTheme={lightTheme} changeTheme={changeTheme} />
    </div>
  );
};

export default App;
