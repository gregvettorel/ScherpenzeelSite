import React, { useState } from 'react';
import '../styles/services.css';
import { motion, AnimatePresence } from 'framer-motion';

const serviceData = [
  {
    title: 'Design',
    description: `We craft bold and timeless brand identities, UI/UX systems, and visuals that resonate.`,
  },
  {
    title: 'Websites',
    description: `From sleek landing pages to fully custom web platforms, we build lightning-fast, responsive experiences.`,
  },
  {
    title: 'Digital Experts',
    description: `We help businesses grow with strategy, SEO, analytics, and content that converts.`,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-page">
      <h1 className="services-title">WHAT DO WE DO</h1>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <button
              className={`service-header ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >
              <h2>{service.title}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="service-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <p>{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
