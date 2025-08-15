// src/components/Hero.jsx
import React from "react";
import { ReactComponent as HeroVisual } from "../assets/hero.svg";
import "../styles/hero-anim.css";

export default function Hero() {
  return (
    <section className="section" id="hero">
      <div className="wrap" style={{display:"flex",gap:"40px",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{flex:1,minWidth:300}}>
          <h1 style={{fontSize:"var(--h1)",lineHeight:"var(--lh-tight)",fontWeight:800,margin:"0 0 16px"}}>
            Your product,<br/>ready to <span style={{color:"var(--brand)"}}>launch.</span>
          </h1>
          <p className="text-muted" style={{fontSize:"18px",margin:"0 0 28px"}}>
            <a className="link-blue" href="/services">Design and development</a>, handled by two specialists
            fully dedicated to your product → from first sketch to final build.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href="/contact" className="btn-solid">Free Advice</a>
            <a href="mailto:wakodesign@gmail.com" className="btn-ghost">wakodesign@gmail.com</a>
          </div>
        </div>

        <div style={{flex:1,display:"grid",placeItems:"center"}}>
          <HeroVisual className="hero-visual" />
        </div>
      </div>
    </section>
  );
}