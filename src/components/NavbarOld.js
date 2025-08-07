'use client';

import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

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
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          SCHERPENZEEL
        </Link>

        {/* Navigation */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="navbar-nav-item">

                      <Link to="/services" className="navbar-nav-link">Services</Link>
</div>
          <div className="navbar-nav-item">
            <Link to="/calendar" className="navbar-nav-link">Calendar</Link>
          </div>
        </nav>

        {/* Call to Action */}
        <a href="#consultation" className="navbar-cta">
          Book Consultation
        </a>

        {/* Mobile toggle */}
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
