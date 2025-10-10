import React from "react";
import SeoHead from "../components/SeoHead";
import About from "../components/AboutSection";
import TeamLetsTalk from "../components/TeamLetsTalk";
import SectionReveal from "../components/SectionReveal";
import { useLang } from "../context/LangContext";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <SeoHead
        kind="page"
        title="About | Wako"
        description="Wako is a web studio from Brussels — two makers handling design and development."
        canonicalPath="/about"
      />
      <SectionReveal className="section section-pad">
        <div className="wrap">
          <h1 className="section-title">{t("about.title")}</h1>
        </div>
      </SectionReveal>
      <About />
      <TeamLetsTalk />
    </>
  );
}