// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/Grilian.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your product,<br />ready to <span className="text-blue-600">launch.</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            <a href="#" className="text-blue-600">Design and development</a>, handled by two specialists fully dedicated to your product → from first sketch to final build.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-black text-white text-sm px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Free Advice <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
            </a>
            <a href="mailto:wakodesign@gmail.com" className="border border-black text-sm px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
              wakodesign@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src={heroImage} alt="Developers working" className="w-full max-w-md mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
