import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const brandOptions = [
    "All Brands",
    "Giant",
    "Asama",
    "Trek",
    "Merida",
    "Polygon",
  ];
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setSearchOpen(false); // close mobile search overlay if open
    navigate(`/search/${encodeURIComponent(trimmedQuery)}`);
    setQuery("");
  };

  return (
    <>
      {/* Primary Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-12 sm:h-14 w-auto"
            src={logo}
            alt="Bike Store Logo"
          />
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex items-center text-base gap-3 border border-gray-400 px-4 py-2 rounded-full w-96 max-w-md">
          <input
            className="w-full bg-transparent outline-none placeholder-gray-500 text-base px-2"
            type="text"
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button onClick={handleSearch} aria-label="Search">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="#7A7B7D"
              viewBox="0 0 16 16"
              className="cursor-pointer"
            >
              <path
                d="M10.8 10.6 15 14.7M9.1 11.7c2.7-1.1 4-4.2 2.8-6.9S7.7.9 4.9 2C2.2 3.2.9 6.3 2 9s4.3 3.9 7.1 2.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/cart" className="relative cursor-pointer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#2dd4bf"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-full transition text-sm"
          >
            Login
          </Link>
        </div>
        <div className="ml-2 sm:ml-4 mt-2 sm:mt-0">
          <Link
            to="/add-product"
            className="block text-center px-3 sm:px-4 py-2 bg-teal-600 text-white text-sm sm:text-base rounded-lg shadow hover:bg-teal-700 transition duration-200 w-full sm:w-auto"
          >
            Add Product
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
          <Link to="/cart" className="relative cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#2dd4bf"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/account" className="relative cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
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
          <div className="flex justify-between mb-4 gap-3">
            <button onClick={() => setSearchOpen(false)} className="mr-2 p-2">
              <svg
                width="24"
                height="24"
                stroke="#4B5563"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="flex-1 max-w-70% border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md z-40 p-4 space-y-2">
          {/* Home */}
          <div className="w-full">
            <Link
              to="/"
              className="block w-full py-2 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </div>

          {/* Brands dropdown */}
          <div className="group w-full">
            <button className="flex justify-between items-center w-full py-2 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 transition">
              Brands
              <span className="transition-transform duration-200 group-hover:rotate-180">
                ▾
              </span>
            </button>

            <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
              <div className="flex flex-col mt-2 border border-gray-200 rounded bg-white shadow-inner">
                {brandOptions.map((brand) => (
                  <Link
                    key={brand}
                    to={`/brands/${brand.replace(" ", "").toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Categories list */}
          <div className="flex flex-col w-full space-y-2">
            {[
              "Mountain",
              "Road",
              "City",
              "Kids",
              "Hybrid",
              "Touring",
              "Electronic",
              "Bike Parts",
            ].map((item) => (
              <Link
                key={item}
                to={`/category/${item.toLowerCase().replace(" ", "")}`}
                className="block w-full py-2 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sub-navigation Desktop */}
      <div className="hidden md:block sticky top-0 z-30 w-full border-b border-gray-200 bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-3 flex gap-8 text-lg font-medium relative">
          {/* Static items */}
          <Link
            to="/"
            className="hover:text-teal-600 transition py-1 border-b-2 border-transparent hover:border-teal-600"
          >
            Home
          </Link>

          {/* Brands with dropdown */}
          <div className="relative group">
            <button className="hover:text-teal-600 transition py-1 border-b-2 border-transparent group-hover:border-teal-600">
              Brands ▾
            </button>
            <div className="absolute top-full left-0 w-40 bg-white border border-gray-200 shadow rounded hidden group-hover:block z-40">
              {brandOptions.map((brand) => (
                <Link
                  key={brand}
                  to={`/brands/${brand.replace(" ", "").toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {[
            "Mountain",
            "Road",
            "City",
            "Kids",
            "Hybrid",
            "Touring",
            "Electronic",
            "Bike Parts",
          ].map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-teal-600 transition py-1 border-b-2 border-transparent hover:border-teal-600"
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
