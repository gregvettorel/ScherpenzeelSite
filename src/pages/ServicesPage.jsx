import React from "react";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";
import SectionReveal from "../components/SectionReveal";
import { useLang } from "../context/LangContext";

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <SeoHead
        kind="page"
        title="Services | Wako"
        description="Webdesign, development en branding. Websites die snel laden en converteren."
        canonicalPath="/services"
      />
      <SectionReveal className="section section-pad">
        <div className="wrap">
          <h1 className="section-title">{t("services.title")}</h1>
        </div>
      </SectionReveal>
      <Services />
    </>
  );
}