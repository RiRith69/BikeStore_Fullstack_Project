import React from "react";
import logo from "./../Assets/logo.svg";
import star from "./../Assets/star.svg";
import secure from "./../Assets/secure.svg";
import customer_service from "./../Assets/customer_service.svg";
import delivery from "./../Assets/delivery.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Review */}
        <div className="md:flex md:flex-col justify-center md:items-start">
          {/* On mobile, flex-row; on md+, flex-col */}
          <div className="flex flex-row md:flex-col justify-center items-center gap-4 w-full sm:justify-end">
            <img src={logo} alt="Shopper logo" className="w-16 h-16 justify-center items-center" />
            <p>Your trust bike partner since 2025</p>
          </div>
        </div>

        {/* Navigation 3 columns below logo on phone, 2/3 on desktop */}
        <div className="w-full md:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-semibold mb-2">Company</p>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-teal-400 cursor-pointer">About us</li>
                <li className="hover:text-teal-400 cursor-pointer">Reviews</li>
                <li className="hover:text-teal-400 cursor-pointer">Privacy policy</li>
                <li className="hover:text-teal-400 cursor-pointer">Cookie policy</li>
                <li className="hover:text-teal-400 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-teal-400 cursor-pointer">Acceptable use</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Shipping</p>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-teal-400 cursor-pointer">Ship a package</li>
                <li className="hover:text-teal-400 cursor-pointer">Products</li>
                <li className="hover:text-teal-400 cursor-pointer">Offices</li>
                <li className="hover:text-teal-400 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Customer Services</p>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-teal-400 cursor-pointer">Login</li>
                <li className="hover:text-teal-400 cursor-pointer">Register</li>
                <li className="hover:text-teal-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-teal-400 cursor-pointer">Support hub</li>
                <li className="hover:text-teal-400 cursor-pointer">Preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Special Features */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <img src={delivery} alt="Deliver" className="w-12 h-12 hover:scale-110 transition-transform" />
          <p className="text-lg">everywhere in <span className="font-semibold text-teal-400"> Cambodia</span></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={secure} alt="Secure" className="w-12 h-12 hover:scale-110 transition-transform" />
          <p className="text-lg">100% secure <span className="font-semibold text-teal-400">Checkout</span></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={customer_service} alt="Support" className="w-12 h-12 hover:scale-110 transition-transform" />
          <p className="text-lg">Outstanding <span className="font-semibold text-teal-400	">National Support</span></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={star} alt="Reviews" className="w-12 h-12 hover:scale-110 transition-transform" />
          <p className="text-lg">Over 10K <span className="font-semibold text-teal-400">Reviews</span></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        © 2025 SHOPPER. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
