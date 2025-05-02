import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 backdrop-blur shadow sticky top-0 z-50">
      <div className="font-extrabold text-lg hover:blue-500">
        <h1 className="hover:text-blue-500">UrbanDrop</h1>
      </div>

      <div className="flex font-extrabold items-center gap-6">
        <nav className="flex gap-6">
          <Link
            className=" px-2 py-1 hover:bg-blue-500 hover:text-white hover:rounded transform hover:scale-105 transition-all "
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-2 py-1 hover:bg-blue-500 hover:text-white hover:rounded transform hover:scale-105 transition-all"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="px-2 py-1 hover:bg-blue-500 hover:text-white hover:rounded transform hover:scale-105 transition-all"
            to="/tracking"
          >
            Tracking
          </Link>
          <Link
            className="px-2 py-1 hover:bg-blue-500 hover:text-white hover:rounded transform hover:scale-105 transition-all"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <button className="font-semibold  bg-blue-400 text-[#FFEEC6] hover:bg-[#FFEEC6] hover:text-blue-400 px-2 py-2 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default nav;
