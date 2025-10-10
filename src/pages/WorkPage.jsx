import React from "react";
import SeoHead from "../components/SeoHead";
import Projects from "../components/Projects";
import SectionReveal from "../components/SectionReveal";
import { useLang } from "../context/LangContext";

export default function WorkPage() {
  const { t } = useLang();
  return (
    <>
      <SeoHead
        kind="page"
        title="Work | Wako"
        description="Een selectie van recente projecten: branding, webdesign, 3D en development."
        canonicalPath="/work"
      />
      <SectionReveal className="section section-pad">
        <div className="wrap">
          <h1 className="section-title">{t("projects.title")}</h1>
        </div>
      </SectionReveal>
      <Projects showTitle={false} />
    </>
  );
}