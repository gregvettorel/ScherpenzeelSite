'use client';

import '../styles/hero.css';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Beyond Boundaries<br />In Sound & Vision
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="hero-subtitle"
      >
        Immersive brand storytelling for tomorrow's culture.
      </motion.p>
    </section>
  );
}