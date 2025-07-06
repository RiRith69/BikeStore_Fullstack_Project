import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Primary Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img className="h-12 sm:h-14 w-auto" src={logo} alt="Bike Store Logo" />
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex items-center text-base gap-3 border border-gray-400 px-4 py-2 rounded-full w-96 max-w-md">
          <input
            className="w-full bg-transparent outline-none placeholder-gray-500 text-base px-2"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#7A7B7D"
            viewBox="0 0 16 16"
          >
            <path
              d="M10.8 10.6 15 14.7M9.1 11.7c2.7-1.1 4-4.2 2.8-6.9S7.7.9 4.9 2C2.2 3.2.9 6.3 2 9s4.3 3.9 7.1 2.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/cart" className="relative cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#615fff"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition text-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile Buttons (search + menu on right) */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          {/* Search button */}
          <button
            className="p-2 rounded-md text-gray-700"
            onClick={() => setSearchOpen(true)}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.8 10.6 15 14.7M9.1 11.7c2.7-1.1 4-4.2 2.8-6.9S7.7.9 4.9 2C2.2 3.2.9 6.3 2 9s4.3 3.9 7.1 2.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Menu button */}
          <button
            className="p-2 rounded-md text-gray-700"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <button onClick={() => setSearchOpen(false)} className="mr-2 p-2">
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              autoFocus
              placeholder="Search products..."
              className="flex-1 border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md z-40">
          <div className="px-4 py-2 space-y-4">
            <Link
              to="/login"
              className="block px-4 py-2 bg-indigo-500 text-white rounded-full text-center"
            >
              Login
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
            <Link
              to="/brands"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Brands
            </Link>
            <Link
              to="/bicycles"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Bicycles
            </Link>
            <Link
              to="/parts"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Bike Parts
            </Link>
          </div>
        </div>
      )}

      {/* Sub-navigation Desktop */}
      <div className="hidden md:block sticky top-0 z-30 w-full border-b border-gray-200 bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-3 flex gap-8 text-sm font-medium">
          {["Home", "Brands", "Bicycles", "Bike Parts"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-indigo-600 transition py-1 border-b-2 border-transparent hover:border-indigo-600"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
