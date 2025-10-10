import React, { useEffect } from "react";
import { useLang } from "../context/LangContext";

const BASE_URL = "https://thisiswako.com";
const absUrl = (p = "/") => (p.startsWith("/") ? `${BASE_URL}${p}` : `${BASE_URL}/`);
const withLang = (path, code) => {
  const u = new URL(absUrl(path));
  u.searchParams.set("lang", code);
  return u.toString();
};

export default function SeoHead({
  kind = "home",
  title,
  description,
  canonicalPath = "/",
  image = "/wako-og.png",
  breadcrumbs,
  type = "website",
}) {
  const { lang } = useLang();

  const homeTitle = {
    en: "Wako — Web design & development in Brussels, Antwerp, Leuven, Mechelen",
    nl: "Wako — Webdesign & development in Brussel, Antwerpen, Leuven, Mechelen",
    fr: "Wako — Webdesign & développement à Bruxelles, Anvers, Louvain, Malines",
  }[lang];

  const homeDesc = {
    en: "Two specialists building high‑performing websites and brands for SMEs and startups in Brussels, Antwerp, Leuven and Mechelen.",
    nl: "Twee specialisten voor websites en brands die presteren — voor kmo’s en startups in Brussel, Antwerpen, Leuven en Mechelen.",
    fr: "Deux spécialistes pour créer des sites et des marques performants — pour PME et startups à Bruxelles, Anvers, Louvain et Malines.",
  }[lang];

  const pageTitle = title || (kind === "home" ? homeTitle : undefined);
  const pageDesc = description || (kind === "home" ? homeDesc : undefined);
  const canonical = absUrl(canonicalPath);

  useEffect(() => {
    // remove older tags from this component
    document.head.querySelectorAll("[data-seo='wako']").forEach(n => n.remove());

    if (pageTitle) document.title = pageTitle;

    const add = (tag, attrs = {}, text) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => v != null && el.setAttribute(k, String(v)));
      el.setAttribute("data-seo", "wako");
      if (text) el.textContent = text;
      document.head.appendChild(el);
      return el;
    };

    if (pageDesc) add("meta", { name: "description", content: pageDesc });
    add("link", { rel: "canonical", href: canonical });

    // hreflang
    add("link", { rel: "alternate", hrefLang: "x-default", href: absUrl(canonicalPath) });
    add("link", { rel: "alternate", hrefLang: "en", href: withLang(canonicalPath, "en") });
    add("link", { rel: "alternate", hrefLang: "nl", href: withLang(canonicalPath, "nl") });
    add("link", { rel: "alternate", hrefLang: "fr", href: withLang(canonicalPath, "fr") });

    // Open Graph
    add("meta", { property: "og:type", content: type });
    add("meta", { property: "og:url", content: canonical });
    if (pageTitle) add("meta", { property: "og:title", content: pageTitle });
    if (pageDesc) add("meta", { property: "og:description", content: pageDesc });
    add("meta", { property: "og:image", content: `${BASE_URL}${image}` });

    // Twitter
    add("meta", { name: "twitter:card", content: "summary_large_image" });
    if (pageTitle) add("meta", { name: "twitter:title", content: pageTitle });
    if (pageDesc) add("meta", { name: "twitter:description", content: pageDesc });
    add("meta", { name: "twitter:image", content: `${BASE_URL}${image}` });

    // JSON‑LD: Organization
    add("script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Wako",
      url: BASE_URL,
      logo: `${BASE_URL}/wako-icon.png`,
      sameAs: [
        "https://www.instagram.com/thisiswako",
        "https://www.linkedin.com",
        "https://dribbble.com"
      ]
    }));

    // JSON‑LD: LocalBusiness (adds explicit NAP)
    add("script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Wako",
      url: BASE_URL,
      telephone: "+1 234 567 890",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressCountry: "Belgium"
      }
    }));

    // JSON‑LD: Local/areas served
    add("script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Wako",
      url: BASE_URL,
      areaServed: [
        { "@type": "City", name: "Brussels" },
        { "@type": "City", name: "Antwerp" },
        { "@type": "City", name: "Leuven" },
        { "@type": "City", name: "Mechelen" },
      ],
    }));

    // JSON‑LD: Breadcrumbs (cases)
    if (breadcrumbs?.length) {
      add("script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: absUrl(b.urlPath),
        })),
      }));
    }

    // JSON-LD: WebSite (helps branded queries “wako”)
    add("script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": BASE_URL,
      "name": "Wako",
      "inLanguage": ["nl","en","fr"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }));

    return () => {
      document.head.querySelectorAll("[data-seo='wako']").forEach(n => n.remove());
    };
  }, [pageTitle, pageDesc, canonical, canonicalPath, image, type, breadcrumbs, lang]);

  return null;
}