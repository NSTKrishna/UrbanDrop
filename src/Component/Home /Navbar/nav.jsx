import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow backdrop-blur sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-extrabold text-lg">
          <Link to="/" className="hover:text-blue-500">
            UrbanDrop
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-extrabold">
          <Link
            className="px-2 text-blue-500 py-1 hover:bg-blue-500 hover:text-white rounded transform hover:scale-105 transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-2 text-blue-500 py-1 hover:bg-blue-500 hover:text-white rounded transform hover:scale-105 transition-all"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="px-2 text-blue-500 py-1 hover:bg-blue-500 hover:text-white rounded transform hover:scale-105 transition-all"
            to="/tracking"
          >
            Tracking
          </Link>
          <Link
            className="px-2 text-blue-500 py-1 hover:bg-blue-500 hover:text-white rounded transform hover:scale-105 transition-all"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-semibold bg-blue-400 text-[#FFEEC6] hover:bg-[#FFEEC6] hover:text-blue-400 px-2 py-2 rounded transform hover:scale-110 transition-all"
            to="/book"
          >
            My Orders
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 font-semibold text-blue-500">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-100 rounded px-2 py-1"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-100 rounded px-2 py-1"
          >
            Services
          </Link>
          <Link
            to="/tracking"
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-100 rounded px-2 py-1"
          >
            Tracking
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-100 rounded px-2 py-1"
          >
            Contact
          </Link>
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="bg-blue-400 text-[#FFEEC6] hover:bg-[#FFEEC6] hover:text-blue-400 px-2 py-2 rounded"
          >
            My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
