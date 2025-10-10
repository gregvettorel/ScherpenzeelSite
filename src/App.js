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
import { LangProvider } from "./context/LangContext";

import CasePage from "./pages/CasePage"; // NEW

function Home() {
  return (
    <>
      <Hero />
      <Projects />

      {/** three banners tussen secties, kunnen we moven */}
      <RunningBanner speed={0.8} direction={1} initialOffset={0} size={60} />
      <RunningBanner speed={0.6} direction={1} initialOffset={180} size={20} />    
      <RunningBanner speed={0.9} direction={1} initialOffset={160} />

      <About />
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
      <LangProvider>
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
      </LangProvider>
    </BrowserRouter>
  );
}
