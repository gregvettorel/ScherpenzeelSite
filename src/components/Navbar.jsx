// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 text-sm">
      {/* Left logo */}
      <div className="flex items-center gap-2 shrink-0">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Center navigation */}
      <ul className="hidden md:flex gap-8 font-medium text-sm">
        <li><a href="#portfolio" className="hover:opacity-70">Portfolio</a></li>
        <li><a href="#how-it-works" className="hover:opacity-70">How it Works</a></li>
        <li><a href="#pricing" className="hover:opacity-70">Pricing</a></li>
        <li><a href="#about" className="hover:opacity-70">About</a></li>
      </ul>

      {/* Right items */}
      <div className="flex items-center gap-6">
        <a href="#work" className="font-semibold text-sm">Work</a>
        <a
          href="#contact"
          className="px-4 py-1 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
