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

    // 0) Prepare entrance state
    root.classList.add('draw-ready');

    // 1) Stroke-draw lengths + slight stagger
    const drawables = svg.querySelectorAll('#pencil_icon path, #pencil_icon line, #pencil_icon polyline');
    drawables.forEach((el, i) => {
      let len = 400;
      try { len = el.getTotalLength(); } catch {}
      el.style.setProperty('--len', len);
      el.style.animationDelay = `${0.035 * i}s`;
      el.style.animationDuration = `${0.85 + Math.random() * 0.35}s`;
    });

    // After entrance, switch to idle loops
    const idleTimer = setTimeout(() => {
      root.classList.remove('draw-ready');
      root.classList.add('is-idle');
    }, 1600);

    // 2) Synchronized blink for ALL eyes (Ilian + Gregory)
    const blink = () => {
      root.classList.add('blink-now');
      setTimeout(() => root.classList.remove('blink-now'), 140); // shorter, natural blink
    };
    // First blink shortly after draw
    const firstBlink = setTimeout(blink, 1900);
    // Natural, non-regular cadence
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.35) blink();
    }, 3200 + Math.random() * 900);

    // Cleanup
    return () => {
      clearTimeout(idleTimer);
      clearTimeout(firstBlink);
      clearInterval(blinkInterval);
    };
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
