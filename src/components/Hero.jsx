// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { ReactComponent as HeroArt } from '../assets/hero.svg'; // <- inline SVG as a component
import '../styles/hero-anim.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  useEffect(() => {
    const root = document.querySelector('.hero-visual');
    if (!root) return;
    const svg = root.querySelector('svg');
    if (!svg) return;

    // Per-finger randomness
    const fingers = svg.querySelectorAll('#fingersilian path, #fingersgreg path');
    fingers.forEach(f => {
      const depth = (5 + Math.random()*3).toFixed(1) + 'deg';      // 5–8deg
      const speed = (1.02 + Math.random()*0.18).toFixed(2) + 's';  // 1.02–1.20s
      const jitter = (Math.random()*0.18 - 0.09).toFixed(3) + 's'; // ±90ms
      f.style.setProperty('--press-depth', depth);
      f.style.animationDelay = `calc(var(--press-delay, 0s) + ${jitter})`;
      f.style.setProperty('--press-speed', speed);
    });

    // Occasional typing burst
    const burst = () => {
      root.classList.add('typing-burst');
      setTimeout(() => root.classList.remove('typing-burst'), 900);
    };
    const t1 = setTimeout(burst, 1800 + Math.random()*600);
    const loop = setInterval(() => burst(), 4000 + Math.random()*3000);

    return () => { clearTimeout(t1); clearInterval(loop); };
  }, []);

  return (
    <section className="pt-24 pb-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="font-title text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your product,<br />ready to <span className="text-blue-600">launch.</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            <a href="/services" className="text-blue-600">Design and development</a>, handled by two specialists fully dedicated to your product → from first sketch to final build.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-black text-white text-sm px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Free Advice <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
            </a>
            <a href="mailto:wakodesign@gmail.com" className="border border-black text-sm px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
              wakodesign@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Inline SVG so we can animate internal IDs */}
        <div className="flex-1 hero-visual">
          <HeroArt className="w-full max-w-md mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
