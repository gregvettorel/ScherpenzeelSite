'use client';

import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          SCHERPENZEEL
        </a>
        
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-nav-item">
            <a href="#services" className="navbar-nav-link">Services</a>
          </div>
          <div className="navbar-nav-item">
            <a href="#work" className="navbar-nav-link">Work</a>
          </div>
          <div className="navbar-nav-item">
            <a href="#about" className="navbar-nav-link">About</a>
          </div>
          <div className="navbar-nav-item">
            <a href="#contact" className="navbar-nav-link">Contact</a>
          </div>
        </nav>

        <a href="#consultation" className="navbar-cta">
          Book Consultation
        </a>

        <button 
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
