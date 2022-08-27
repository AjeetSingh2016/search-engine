import React, { useState } from "react";
import {Navbar, Footer, Routes} from "./components"

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ' '}>
      <div
      className="
      bg-gray-100
      dark:bg-gray-900
      min-h-screen
      dark:text-gray-200"
      >
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
