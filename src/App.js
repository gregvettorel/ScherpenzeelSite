// src/App.js
import React from "react";
import './output.css';

// ✅ New component imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Later you'll add:
  // import Hero from "./components/Hero";
  // import Portfolio from "./components/Portfolio";
  // import Services from "./components/Services";
  // import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Navbar />

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
