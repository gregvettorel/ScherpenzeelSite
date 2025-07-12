'use client';

import '../styles/hero.css';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/videos/respireblendeer.mkv"
      />

      {/* Overlay for contrast */}
      <div className="hero-overlay-filter" />

      {/* Foreground content */}
      <div className="hero-overlay">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          We Create Expert Teams<br />For Digital Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hero-subtitle"
        >
          Your vision, our expert team. Powered by cutting-edge technology and driven by innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hero-cta"
        >
          <a href="#consultation" className="hero-cta-button primary">
            Book a Consultation
          </a>
          <a href="#services" className="hero-cta-button">
            View Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
