import React from "react";
import SeoHead from "../components/SeoHead";
import About from "../components/AboutSection";
import TeamLetsTalk from "../components/TeamLetsTalk";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        kind="page"
        title="About | Wako"
        description="Wako is a web studio from Brussels — two makers handling design and development."
        canonicalPath="/about"
      />
      <About />
      <TeamLetsTalk />
    </>
  );
}