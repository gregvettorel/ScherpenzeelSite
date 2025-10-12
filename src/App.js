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
      <RunningBanner
        imageSrc="/favicon.png"
        speed={0.65}
        direction={1}
        initialOffset={0}
        size={28}
        segments={18}
        grayscale={false}
        blend="normal"
        style={{ paddingTop: "5%" }}
      />
      <RunningBanner
        imageSrc="/favicon.png"
        speed={0.9}
        direction={-1}
        initialOffset={180}
        size={22}
        segments={16}
        style={{ opacity: 0.95, paddingBottom: "5%" }}
        grayscale={false}
        blend="normal"
      />
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
    // disable browser scroll restore
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {}
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (hash) {
      const id = hash.slice(1);
      // wait a tick so DOM for the target exists
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      // double-tap toTop to beat late layout shifts/resources
      requestAnimationFrame(() => {
        toTop();
        requestAnimationFrame(toTop);
      });
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
