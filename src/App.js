// src/App.js
import React, { useEffect } from "react";
import "./index.css";
import "./styles/intro.css";
import "./styles/custom-cursor.css";
import bgArt from "./assets/backgroundlogo.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RunningBanner from "./components/RunningBanner";
import Services from "./components/Services";
import TeamLetsTalk from "./components/TeamLetsTalk";
import ProcessSteps from "./components/ProcessSteps"; 
import IntroReveal from "./components/IntroReveal";
import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    return () => document.body.classList.remove("custom-cursor-active");
  }, []);

  return (
    <div className="site bg-white text-black font-body min-h-screen">
      <CustomCursor />
      <IntroReveal />
      <Navbar />
      <Hero />
      <Projects />
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
