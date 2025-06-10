import React, { useState, useEffect } from "react";
import { Link ,NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `transition-all ${isActive ? "text-[#D27FFF] neon-hover" : "hover:text-[#D27FFF] neon-hover"}`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-inner-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-[#6AD4F3] tracking-widest neon-glow">
            NΞ⧉NAV
          </div>
          <div className="md:hidden z-50">
            <button
              className="text-[#6AD4F3] text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
          <ul className="hidden md:flex space-x-8 text-[#6AD4F3] text-lg font-semibold">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink></li>
            <li><NavLink to="/contactus" className={navLinkClass}>Contact Us</NavLink></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[30px] flex items-center justify-center transition-opacity duration-300 animate-fade-in">
          <ul className="text-[#6AD4F3] text-3xl space-y-10 text-center font-extrabold">
            <li><NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/dashboard" onClick={toggleMenu} className={navLinkClass}>Dashboard</NavLink></li>
            <li><NavLink to="/contactus" onClick={toggleMenu} className={navLinkClass}>Contact Us</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
