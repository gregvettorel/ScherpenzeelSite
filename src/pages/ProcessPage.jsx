import React from "react";
import SeoHead from "../components/SeoHead";
import ProcessSteps from "../components/ProcessSteps";
import SectionReveal from "../components/SectionReveal";
import { useLang } from "../context/LangContext";

export default function ProcessPage() {
  const { t } = useLang();
  return (
    <>
      <SeoHead
        kind="page"
        title="Process | Wako"
        description="Van kennismaking tot lancering: duidelijke stappen en snelle iteraties."
        canonicalPath="/process"
      />
      <SectionReveal className="section section-pad">
        <div className="wrap">
          <h1 className="section-title">{t("process.title")}</h1>
        </div>
      </SectionReveal>
      <ProcessSteps />
    </>
  );
}