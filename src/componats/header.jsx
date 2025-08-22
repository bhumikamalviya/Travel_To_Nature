import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export const Header = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 p-2
      ${transparent 
        ? "bg-transparent" 
        : "bg-gradient-to-r from-[#166a72] to-[#166a72]"} `}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <img
          src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg"
          alt="logo"
          className="w-16 h-auto "
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`font-bold hover:text-green-900 ${transparent ? "text-white" : "text-white"}`}>
            Home
          </Link>
          <Link to="/destinations" className={`font-bold hover:text-green-900 ${transparent ? "text-white" : "text-white"}`}>
            Destinations
          </Link>
          <Link to="/wishlist" className={`font-bold hover:text-green-900 ${transparent ? "text-white" : "text-white"}`}>
      <FaHeart className="text-red-500 bold" />
          </Link>
          <Link to="/planner" className={`font-bold hover:text-green-900 ${transparent ? "text-white" : "text-white"}`}>
            Planner
          </Link>
          <Link to="/contact" className={`font-bold hover:text-green-900 ${transparent ? "text-white" : "text-white"}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
  className="block md:hidden relative z-[100]"   
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className="text-white text-2xl">☰</span>
</button>
      </div>

      {/* Mobile Nav */}
{menuOpen && (
  <div className="md:hidden fixed top-0 right-0 h-screen w-[30%] bg-black bg-opacity-70 text-white z-50 p-6 pt-16 space-y-4">
    <Link to="/" className="block hover:text-green-400">Home</Link>
    <Link to="/destinations" className="block hover:text-green-400">Destinations</Link>
    <Link to="/wishlist" className="block hover:text-green-400">
      <FaHeart className="text-red-500 bold" />
    </Link>
    <Link to="/planner" className="block hover:text-green-400">Planner</Link>
    <Link to="/contact" className="block hover:text-green-400">Contact</Link>
  </div>
)}


    </header>
  );
};
