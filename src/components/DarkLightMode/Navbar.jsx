import React from "react";
import { Link } from "react-router-dom";
import { useTheme, toggleTheme } from "./utils/theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <nav className="h-[8vh] flex justify-between items-center bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <div className="flex gap-5 ml-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <div
            className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer
                 peer-checked:bg-blue-600 transition-colors"
          ></div>
          <div
            className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full 
                 transition-transform peer-checked:translate-x-5"
          ></div>
        </label>
        <span className="ml-3 mr-3 text-sm font-medium">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
