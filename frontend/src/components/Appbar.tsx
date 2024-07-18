import React from "react";
import { Avarator } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center py-2.5 px-10">
      <Link to="/blogs ">Medium</Link>
      <div>
        <Link to={'/publish'}>
      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  ">New</button>
      </Link>
        <div
          className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        >
          <span className="font-medium text-sm text-gray-600 dark:text-gray-300">
            K
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
