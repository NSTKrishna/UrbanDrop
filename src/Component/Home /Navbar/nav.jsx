import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div>Logo</div>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/tracking">Tracking</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      <button className="font-semibold bg-black text-white px-2 py-2 rounded">
        Book Now
      </button>
      </div>
    </div>
  );
};

export default nav;
