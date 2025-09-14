// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./styles/intro.css";
import "./styles/custom-cursor.css";
import "./styles/case.css"; // NEW
import bgArt from "./assets/backgroundlogo.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RunningBanner from "./components/RunningBanner";
import Services from "./components/Services";
import TeamLetsTalk from "./components/TeamLetsTalk";
import ProcessSteps from "./components/ProcessSteps";
import About from "./components/AboutSection";
import IntroReveal from "./components/IntroReveal";
import CustomCursor from "./components/CustomCursor";

import CasePage from "./pages/CasePage"; // NEW

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <RunningBanner />
      <Services />
      <ProcessSteps />
      <TeamLetsTalk />
    </>
  );
}

export default function App() {
  useEffect(() => () => document.body.classList.remove("custom-cursor-active"), []);

  return (
    <BrowserRouter>
      <div className="site bg-white text-black font-body min-h-screen">
        <CustomCursor />
        <IntroReveal />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CasePage />} />
        </Routes>

        <Footer />
        <img src={bgArt} alt="" className="page-art" aria-hidden="true" />
      </div>
    </BrowserRouter>
  );
}
