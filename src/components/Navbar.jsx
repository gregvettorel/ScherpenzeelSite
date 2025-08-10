// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="pt-8 pb-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
        {/* Left logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img src="/logo_site.png" alt="Logo" className="h-10" />
        </div>

        {/* Center navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          <li><a href="#portfolio" className="hover:opacity-70">Portfolio</a></li>
          <li><a href="#how-it-works" className="hover:opacity-70">What We Offer</a></li>
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
      </div>
    </nav>
  );
}

export default Navbar;
