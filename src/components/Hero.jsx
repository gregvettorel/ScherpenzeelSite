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

    // 1) stroke lengths + stagger
    const svg = root.querySelector('svg');
    const els = svg?.querySelectorAll('#pencil path, #pencil line, #pencil_icon polyline') ?? [];
    els.forEach((el, i) => {
      let len = 400; try { len = el.getTotalLength(); } catch {}
      el.style.setProperty('--len', len);
      el.style.animationDelay = `${i * 0.03}s`;
    });

    // 2) run draw once, then idle
    root.classList.add('draw-ready');
    const toIdle = setTimeout(() => root.classList.remove('draw-ready'), 1400);

    // 3) synced blink (no drift)
    const blink = () => {
      root.classList.add('blink-now');
      setTimeout(() => root.classList.remove('blink-now'), 140);
    };
    const first = setTimeout(blink, 1800);
    const loop = setInterval(() => Math.random() > 0.35 && blink(), 3100);

    // 4) pause when offscreen
    const io = new window.IntersectionObserver(([e]) => {
      root.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
    }, { threshold: 0.2 });
    io.observe(root);

    // Add click event listener for boing animation
    root.addEventListener('click', () => {
      root.classList.add('boing');
      setTimeout(() => root.classList.remove('boing'), 350);
    });

    // First-load smile
    setTimeout(() => {
      root.classList.add('smile-now');
      setTimeout(() => root.classList.remove('smile-now'), 280);
    }, 2200);

    // Add per-element randomness for natural feel
    const code = document.querySelector('.hero-visual #code_icon');
    if (code) {
      code.style.setProperty('--dev-dur', (5.6 + Math.random() * 1.4) + 's');
      code.style.animationDelay = (Math.random() * 1.2) + 's';
    }
    const pencil = document.querySelector('.hero-visual #pencil_icon');
    if (pencil) {
      pencil.style.animationDelay = (Math.random() * 0.5) + 's';
    }

    return () => { clearTimeout(toIdle); clearTimeout(first); clearInterval(loop); io.disconnect(); };
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
