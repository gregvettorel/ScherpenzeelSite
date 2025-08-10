// src/App.js
import React from "react";
import './output.css';

// ✅ New component imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RunningBanner from "./components/RunningBanner";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";

// Later you'll add:
  // import Hero from "./components/Hero";
  // import Portfolio from "./components/Portfolio";
  // import Services from "./components/Services";
  // import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <RunningBanner />
      {/**
      <AboutSection />
      */}
      <Services />

      {/* Add new sections below as you create them */}
      {/* <Hero /> */}
      {/* <Portfolio /> */}
      {/* <Services /> */}
      {/* <ContactSection /> */}

      <Footer />
    </div>
  );
}

export default App;
