import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" bg-white shadow-xl text-black font-bold py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Logo and tagline */}
        <div className="flex flex-col items-center md:items-start font-bold space-y-2">
          <h1>Travel To Nature🍃</h1>
        </div>

        {/* Middle: Quick Links */}
        <div className="text-center text-sm py-4">
          &copy; {new Date().getFullYear()} Nature Travel. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-3 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-green-400 cursor-pointer" />
          <FaInstagram className="hover:text-green-400 cursor-pointer" />
          <FaTwitter className="hover:text-green-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
