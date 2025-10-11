// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import SeoHead from "./components/SeoHead";

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

const CasePage = React.lazy(() => import("./pages/CasePage"));

function Home() {
  return (
    <>
      <SeoHead kind="home" />
      <Hero />
      <Projects />
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

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // ensure we land at top between routes (e.g., when opening a project)
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  useEffect(() => () => document.body.classList.remove("custom-cursor-active"), []);
  // defer custom cursor to improve TTI
  const [cursorReady, setCursorReady] = useState(false);
  useEffect(() => {
    const h = setTimeout(() => setCursorReady(true), 800);
    return () => clearTimeout(h);
  }, []);
  return (
    <BrowserRouter>
       <LangProvider>
         <div className="site bg-white text-black font-body min-h-screen">
           {cursorReady && <CustomCursor />}
           <IntroReveal />
           <Navbar />
           <ScrollToHash />
          <React.Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
             <Route path="/work/:slug" element={<CasePage />} />
             <Route path="*" element={<Navigate to="/" replace />} />
           </Routes>
         </React.Suspense>
           <Footer />
           <img src={bgArt} alt="" className="page-art" aria-hidden="true" />
         </div>
        </LangProvider>
     </BrowserRouter>
   );
 }
