// src/App.js
import React from "react";
import "./index.css";
import bgArt from "./assets/backgroundlogo.png";

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
import ScrollBanner from "./components/ScrollBanner";

function App() {
  return (
    <div className="site bg-white text-black font-body min-h-screen">
      <Loader />
      <Navbar />
            <ScrollBanner
        sections={[
          { id: "hero", label: "Home" },
          { id: "portfolio", label: "Projects" },
          { id: "about", label: "About" },
          { id: "services-section", label: "Services" },
          { id: "how-it-works", label: "Process" },
          { id: "team", label: "Team" },
        ]}
      />
      <Hero />
      <Projects />
      <AboutSection />
      <RunningBanner />
      <Services />
      <ProcessSteps />
      <TeamLetsTalk />
      <Footer />
            <img src={bgArt} alt="" className="page-art" aria-hidden="true" />
    </div>
  );
}

export default App;
