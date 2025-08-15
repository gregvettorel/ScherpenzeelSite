// src/App.js
import React from "react";

// ✅ New component imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RunningBanner from "./components/RunningBanner";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import TeamLetsTalk from "./components/TeamLetsTalk";
import ProcessSteps from "./components/ProcessSteps"; 
import Loader from "./components/Loader";

function App() {
  return (
    <div className="bg-white text-black font-body min-h-screen">
      {/* was: font-sans */}
      <Loader />
      <Navbar />
      <Hero />
      <Projects />
      <RunningBanner />
      <AboutSection />
      <Services />
      <ProcessSteps />
      <TeamLetsTalk />
   

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
