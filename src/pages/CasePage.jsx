import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cases } from "../data/cases";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WakoButton from "../components/WakoButton";
import AboutChip from "../components/AboutChip";
import { useLang } from "../context/LangContext";
import SeoHead from "../components/SeoHead";
import EnvelopeIcon from "../components/EnvelopeIcon";

gsap.registerPlugin(ScrollTrigger);

export default function CasePage() {
  const { slug } = useParams();
  const data = cases[slug];
  const nav = useNavigate();
  const rootRef = useRef(null);
  const { t, lang } = useLang();

  useEffect(() => {
    if (!data) return;
    document.body.classList.add("case-page");
    return () => document.body.classList.remove("case-page");
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!data) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [".navbar", ".case-hero", ".explainer-wrap", ".case-info", ".olc", ".enjoy-more", ".footer"],
        { opacity: 0, y: 80 }
      );
      gsap.to(".navbar", { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" });
      gsap.to(".case-hero", { opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "expo.out" });
      gsap.to(".explainer-wrap", { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: "expo.out" });
      gsap.to(".case-info", { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: "expo.out" });
      gsap.to(".olc", { opacity: 1, y: 0, duration: 0.9, delay: 0.4, ease: "expo.out" });
      gsap.to(".enjoy-more", { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: "expo.out" });
      gsap.to(".footer", { opacity: 1, y: 0, duration: 0.9, delay: 0.6, ease: "expo.out" });

      const explainerEl = document.getElementById("explainer");
      if (explainerEl) {
        if (!explainerEl.dataset.split) {
          const txt = explainerEl.textContent.trim().replace(/\s+/g, " ");
          explainerEl.innerHTML = txt.split(" ").map(w => `<span class="word">${w}</span>`).join(" ");
          explainerEl.dataset.split = "1";
        }
        const words = explainerEl.querySelectorAll(".word");
        gsap.set(words, { y: 14, opacity: 0 });
        gsap.to(words, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: { each: 0.06, from: "start" },
          scrollTrigger: { trigger: explainerEl, start: "top 72%", once: true },
          onComplete: () => gsap.set(words, { clearProps: "transform,opacity" })
        });
      }

      const section = document.querySelector("[data-olc-cards]");
      if (section) {
        const main = section.querySelector(".olc__main");
        const cards = Array.from(section.querySelectorAll(".olc__card"));
        cards.forEach((card, i) => {
          card.style.setProperty("--offset", `${i * 25}px`);
          card.style.zIndex = String(100 + i);
        });

        let start = 0, end = 1;
        const clamp01 = v => Math.max(0, Math.min(1, v));
        const map = (v, a, b, c, d) => c + (d - c) * (Math.max(0, Math.min(1, (v - a) / Math.max(1e-6, b - a))));

        const measure = () => {
          const r = main.getBoundingClientRect();
          const y = window.scrollY || window.pageYOffset;
          start = r.top + y;
          end = start + main.offsetHeight - window.innerHeight;
        };

        let target = 0, smooth = 0;
        const render = () => {
          const y = window.scrollY || window.pageYOffset;
          target = clamp01((y - start) / Math.max(1, end - start));
          smooth += (target - smooth) * 0.13;

          cards.forEach((card, i) => {
            const n = cards.length;
            const targetScale = 1 - (n - i) * 0.05;
            const rangeStart = i / n;
            const s = smooth <= rangeStart ? 1 : map(smooth, rangeStart, 1, 1, targetScale);
            const fade = s < 0.92 ? map(s, targetScale, 0.92, 0, 1) : 1;
            card.style.transform = `scale(${s})`;
            card.style.opacity = fade;
          });

          requestAnimationFrame(render);
        };

        measure();
        render();
        window.addEventListener("resize", measure);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  const L = (data.i18n && (data.i18n[lang] || data.i18n.en)) || null;
  const title = L?.title ?? data.title;
  const subtitle = L?.subtitle ?? data.subtitle;
  const explainer = L?.explainer ?? data.explainer;
  const deliverables = Array.isArray(L?.deliverables) ? L.deliverables
                    : Array.isArray(data.deliverables) ? data.deliverables
                    : [];
  const features = Array.isArray(L?.features) ? L.features
                : Array.isArray(data.features) ? data.features
                : [];
  const story = {
    challenge: L?.story?.challenge ?? data.story?.challenge ?? "",
    approach:  L?.story?.approach  ?? data.story?.approach  ?? "",
    outcome:   L?.story?.outcome   ?? data.story?.outcome   ?? "",
  };
  const results = Array.isArray(L?.results) ? L.results
                : Array.isArray(data.results) ? data.results
                : [];
  const stackTags = Array.isArray(data.stackTags) ? data.stackTags : [];

  const studySuffix = ({ en: "case study", nl: "case study", fr: "étude de cas" }[lang]) || "case study";
  const abs = (p) => (typeof window !== "undefined" ? `${window.location.origin}${p}` : p);

  const labels = {
    nl: { challenge: "Uitdaging", approach: "Aanpak", outcome: "Resultaat", related: "Gerelateerde diensten:" },
    en: { challenge: "Challenge", approach: "Approach", outcome: "Outcome", related: "Related services:" },
    fr: { challenge: "Défi", approach: "Approche", outcome: "Résultat", related: "Services liés :" }
  }[lang] || { challenge: "Challenge", approach: "Approach", outcome: "Outcome", related: "Related services:" };

  return (
    <>
      <SeoHead
        kind="case"
        type="article"
        title={`${title} — ${studySuffix} | Wako`}
        description={subtitle}
        canonicalPath={`/work/${slug}`}
        breadcrumbs={[
          { name: "Home", urlPath: "/" },
          { name: "Work", urlPath: "/#portfolio" },
          { name: title, urlPath: `/work/${slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: title,
          headline: title,
          description: subtitle,
          inLanguage: lang,
          author: { "@type": "Organization", name: "Wako" },
          datePublished: data.year ? `${data.year}-01-01` : undefined,
          image: data.hero ? abs(data.hero) : undefined,
          url: abs(`/work/${slug}`)
        }}
      />
      <main ref={rootRef}>
        {/* HERO */}
        <header className="case-hero section-pad" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div className="case">
              <figure className="case-hero__media">
                <img src={data.hero} alt={`${title} — ${studySuffix}`} loading="eager" />
                <figcaption className="case-hero__caption">
                  <h1 className="section-title case-hero__title" style={{ color: "#fff", textShadow: "0 20px 46px rgba(0,0,0,.6)" }}>
                    {title}
                  </h1>
                  <p className="subtitle case-hero__subtitle" style={{ color: "rgba(255,255,255,.95)" }}>
                    {data.heroLead || subtitle}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        {/* Explainer */}
        <section className="explainer-wrap section section-pad" style={{ background: "var(--surface)" }}>
          <div className="wrap explainer-flex">
            <div className="explainer hero__lead" id="explainer">
              {explainer}
            </div>
            <div className="explainer-cta">
              {Array.isArray(data.ctas) && data.ctas.length > 0 ? (
                data.ctas
                  .filter(c => c.label !== "Code")
                  .map((cta, i) => (
                    <WakoButton
                      key={i}
                      as="a"
                      href={cta.href}
                      target="_blank"
                      rel="noreferrer"
                      variant={cta.variant ?? (i === 0 ? "solid" : "ghost")}
                    >
                      {cta.label}
                    </WakoButton>
                  ))
              ) : (
                <>
                  {data.figmaUrl ? (
                    <WakoButton as="a" href={data.figmaUrl} target="_blank" rel="noreferrer" variant="solid">
                      {t("case.figma")}
                    </WakoButton>
                  ) : null}
                  <WakoButton as="a" href="mailto:thisiswako@gmail.com" variant="ghost" showArrow={false}>
                    {lang === "nl" ? "Vraag een prijsindicatie" : lang === "fr" ? "Demander une estimation" : "Request a quote"} <EnvelopeIcon size={20} />
                  </WakoButton>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Journey (Uitdaging / Aanpak / Resultaat) */}
        {(story.challenge || story.approach || story.outcome || results.length) && (
          <section className="case-journey section section-pad" style={{ background: "var(--surface)" }}>
            <div className="wrap">
              {story.challenge && (
                <div className="case-info__row">
                  <div className="case-info__label">{labels.challenge}</div>
                  <div className="case-info__value"><p>{story.challenge}</p></div>
                </div>
              )}
              {story.approach && (
                <div className="case-info__row">
                  <div className="case-info__label">{labels.approach}</div>
                  <div className="case-info__value"><p>{story.approach}</p></div>
                </div>
              )}
              {(story.outcome || results.length > 0) && (
                <div className="case-info__row">
                  <div className="case-info__label">{labels.outcome}</div>
                  <div className="case-info__value">
                    {story.outcome && <p>{story.outcome}</p>}
                    {results.length > 0 && (
                      <div className="case-kpis">
                        {results.map((r, i) => <span key={i}>{r}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Info grid */}
        <section className="case-info section section-pad" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div className="case-info__row">
              <div className="case-info__label">{t("case.year")}</div>
              <div className="case-info__value">{data.year}</div>
            </div>
            {results.length > 0 && (
              <div className="case-info__row">
                <div className="case-info__label">{t("case.results")}</div>
                <div className="case-info__value">
                  {results.map((r, i) => (<span key={i}>{r}<br /></span>))}
                </div>
              </div>
            )}
            <div className="case-info__row">
              <div className="case-info__label">{t("case.deliverables")}</div>
              <div className="case-info__value">
                {deliverables.map((d, i) => (<span key={i}>{d}<br /></span>))}
              </div>
            </div>
            <div className="case-info__row">
              <div className="case-info__label">{t("case.stack")}</div>
              <div className="case-info__value case-info__tags">
                {stackTags.map(tg => (<AboutChip key={tg}>{tg}</AboutChip>))}
              </div>
            </div>
            {features.length > 0 && (
              <div className="case-info__row">
                <div className="case-info__label">{t("case.features")}</div>
                <div className="case-info__value">
                  {features.map((f, i) => (<span key={i}>{f}<br /></span>))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* OLC: stacked sticky cards */}
        <section className="olc section section-pad" data-olc-cards>
          <div className="wrap">
            <div className="olc__main">
              {Array.isArray(data.cards) &&
                data.cards.map((c, i) => (
                  <div key={i} className="olc__card-container">
                    <figure className="olc__card">
                      {c.type === "video" ? (
                        <video
                          src={c.src}
                          muted
                          playsInline
                          loop
                          autoPlay
                          preload="metadata"
                          aria-label={`${title} — short product demo`}
                        />
                      ) : (
                        <img
                          src={c.src}
                          alt={`${title} — screen ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </figure>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Enjoy more */}
        <section className="enjoy-more section section-pad">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h3 className="section-title" style={{ color: "var(--ink)", fontWeight: 800, marginBottom: "0.2em" }}>
              {t("case.enjoyed")}
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "1.5em", fontSize: "1.1rem" }}>{t("case.explore")}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <WakoButton as="button" variant="solid" onClick={() => nav(data.nextHref || "/")}>
                {t("case.next")}
              </WakoButton>
              <WakoButton as="a" href="mailto:thisiswako@gmail.com" variant="ghost" showArrow={false}>
                {lang === "nl" ? "Plan een gratis gesprek" : lang === "fr" ? "Planifier un appel gratuit" : "Book a free call"}
              </WakoButton>
            </div>
            <p className="case-related" style={{ marginTop: 16, color: "var(--muted)" }}>
              {labels.related} <a href="/webdesign-brussel">Webdesign Brussel</a> · <a href="/3d-integraties">3D op het web</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}