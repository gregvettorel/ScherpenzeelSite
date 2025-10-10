// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import CasePage from "./pages/CasePage"; // NEW
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import { WebdesignBrussel, WebdesignAntwerpen, WebdesignLeuven } from "./pages/LocationPage";

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
             <Route path="/services" element={<ServicesPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/process" element={<ProcessPage />} />
             <Route path="/contact" element={<ContactPage />} />
             <Route path="/work" element={<WorkPage />} />
             <Route path="/work/:slug" element={<CasePage />} />
             <Route path="/webdesign/brussel" element={<WebdesignBrussel />} />
             <Route path="/webdesign/antwerpen" element={<WebdesignAntwerpen />} />
             <Route path="/webdesign/leuven" element={<WebdesignLeuven />} />
           </Routes>
           <Footer />
           <img src={bgArt} alt="" className="page-art" aria-hidden="true" />
         </div>
        </LangProvider>
     </BrowserRouter>
   );
 }
