import React from "react";
import SeoHead from "../components/SeoHead";
import SectionReveal from "../components/SectionReveal";

const CITY = {
  brussel: { nl: "Brussel", en: "Brussels", fr: "Bruxelles" },
  antwerpen: { nl: "Antwerpen", en: "Antwerp", fr: "Anvers" },
  leuven: { nl: "Leuven", en: "Leuven", fr: "Louvain" },
  mechelen: { nl: "Mechelen", en: "Mechelen", fr: "Malines" },
};

export default function LocationPage({ city = "brussel", title, desc }) {
  return (
    <>
      <SeoHead kind="page" title={title} description={desc} canonicalPath={`/webdesign/${city}`} />
      <SectionReveal className="section section-pad">
        <div className="wrap">
          <h1 className="section-title" style={{ marginBottom: 10 }}>{title}</h1>
          <p className="text-muted" style={{ maxWidth: 720 }}>{desc}</p>
          <ul className="project-ul" style={{ maxWidth: 720 }}>
            <li>Webdesign en development (Figma → live)</li>
            <li>Snelheid, SEO‑basis en duidelijke structuur</li>
            <li>Hosting & onderhoud met één aanspreekpunt</li>
          </ul>
        </div>
      </SectionReveal>
    </>
  );
}

// Helper factories you can import three times:
export const WebdesignBrussel = () => (
  <LocationPage
    city="brussel"
    title="Webdesign in Brussel — Wako"
    desc="Websites die presteren voor kmo’s en startups in Brussel. Strategie, design en development in één team."
  />
);
export const WebdesignAntwerpen = () => (
  <LocationPage
    city="antwerpen"
    title="Webdesign in Antwerpen — Wako"
    desc="Professioneel webdesign voor kmo’s en startups in Antwerpen. Snel, helder en gericht op resultaat."
  />
);
export const WebdesignLeuven = () => (
  <LocationPage
    city="leuven"
    title="Webdesign in Leuven — Wako"
    desc="Moderne, snelle websites voor Leuvense kmo’s en startups. Van concept tot lancering."
  />
);