import React from "react";
import { Link } from "react-router-dom";
import {Search} from "../components"
import logo from "../assets/search.png"
const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className=" sticky top-0  p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark: border-gray-700 border-gray-200
    bg-gray-100
    dark:bg-gray-900
    pb-3
    dark:text-gray-200"
    >
      <div className="flex justify-between items-center space-x-5 w-screen">

          <Link to="/">
          <img className="w-12 h-12" src={logo} alt="logo"  />
          </Link>
          
          <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-700 dark:text-white-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg dark:shadow-lg">
              {darkTheme ? 'Light ☀️': 'Dark 🌙'}
          </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
