import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div>Logo</div>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          <Link className='px-2 py-1 hover:bg-gray-500 hover:text-white hover:rounded transform hover:scale-105 transition-all' to="/">Home</Link>
          <Link className='px-2 py-1 hover:bg-gray-500 hover:text-white hover:rounded transform hover:scale-105 transition-all' to="/services">Services</Link>
          <Link className='px-2 py-1 hover:bg-gray-500 hover:text-white hover:rounded transform hover:scale-105 transition-all' to="/tracking">Tracking</Link>
          <Link className='px-2 py-1 hover:bg-gray-500 hover:text-white hover:rounded transform hover:scale-105 transition-all' to="/contact">Contact</Link>
        </nav>
      <button className="font-semibold bg-black text-white px-2 py-2 rounded">
        Book Now
      </button>
      </div>
    </div>
  );
};

export default nav;
