import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// import "../App.css"; 

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
       <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" 
       alt="logo" 
       className="w-16 h-auto pt-4"
       />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white font-bold hover:text-green-900">Home</Link>
          <Link to="/destinations" className="text-white font-bold hover:text-green-900">Destinations</Link>
          <Link to="/wishlist" className="text-white font-bold hover:text-green-900">❤️</Link>
          <Link to="/planner" className="text-white font-bold hover:text-green-900">Planner</Link>
          <Link to="/blog" className="text-white font-bold hover:text-green-900">Blog</Link>
          <Link to="/about" className="text-white font-bold hover:text-green-900">About</Link>
          <Link to="/contact" className="text-white  font-bold hover:text-green-900">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-green-800 text-2xl">☰</span>
        </button>

      </div>

      {/* Mobile Navigation (shown only when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-green-700 hover:text-green-900">Home</Link>
          <Link to="/destinations" className="block text-green-700 hover:text-green-900">Destinations</Link>
          <Link to="/wishlist" className="block text-green-700 hover:text-green-900">❤️</Link>
          <Link to="/planner" className="block text-green-700 hover:text-green-900">Planner</Link>
          <Link to="/blog" className="block text-green-700 hover:text-green-900">Blog</Link>
          <Link to="/about" className="block text-green-700 hover:text-green-900">About</Link>
          <Link to="/contact" className="block text-green-700 hover:text-green-900">Contact</Link>
        </div>
      )}

       <Outlet />
    </header>

    
  );
};
