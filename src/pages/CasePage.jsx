import React, { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cases } from "../data/cases";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WakoButton from "../components/WakoButton";

gsap.registerPlugin(ScrollTrigger);

export default function CasePage() {
  const { slug } = useParams();
  const data = cases[slug];
  const nav = useNavigate();
  const rootRef = useRef(null);

  useEffect(() => {
    if (!data) return;
    document.body.classList.add("case-page");
    return () => document.body.classList.remove("case-page");
  }, [data]);

  useEffect(() => {
    if (!data) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.set([".navbar", ".case-hero", ".explainer-wrap", ".case-info", ".olc", ".enjoy-more", ".footer"], { opacity: 0, y: 80 });
      gsap.to(".navbar", { opacity: 1, y: 0, duration: .7, ease: "expo.out" });
      gsap.to(".case-hero", { opacity: 1, y: 0, duration: .9, delay: .1, ease: "expo.out" });
      gsap.to(".explainer-wrap", { opacity: 1, y: 0, duration: .9, delay: .2, ease: "expo.out" });
      gsap.to(".case-info", { opacity: 1, y: 0, duration: .9, delay: .3, ease: "expo.out" });
      gsap.to(".olc", { opacity: 1, y: 0, duration: .9, delay: .4, ease: "expo.out" });
      gsap.to(".enjoy-more", { opacity: 1, y: 0, duration: .9, delay: .5, ease: "expo.out" });
      gsap.to(".footer", { opacity: 1, y: 0, duration: .9, delay: .6, ease: "expo.out" });

      // ---------- Explainer: auto <span> + smooth reveal ----------
      const explainerEl = document.getElementById("explainer");
      if (explainerEl) {
        if (!explainerEl.dataset.split) {
          const txt = explainerEl.textContent.trim().replace(/\s+/g, " ");
          explainerEl.innerHTML = txt.split(" ").map(w => `<span class="word">${w}</span>`).join(" ");
          explainerEl.dataset.split = "1";
        }
        const words = explainerEl.querySelectorAll(".word");

        // Only set transform/opacity (no blur/scale/color)
        gsap.set(words, { y: 14, opacity: 0 });

        gsap.to(words, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: { each: 0.06, from: "start" },
          scrollTrigger: { trigger: explainerEl, start: "top 72%", once: true },
          // IMPORTANT: remove the inline styles GSAP added
          onComplete: () => gsap.set(words, { clearProps: "transform,opacity" })
        });
      }

      // Stacked sticky cards
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
        const map = (v, a, b, c, d) => (c + (d - c) * (Math.max(0, Math.min(1, (v - a) / Math.max(1e-6, b - a)))));

        const measure = () => {
          const r = main.getBoundingClientRect();
          const y = window.scrollY || window.pageYOffset;
          start = r.top + y; end = start + main.offsetHeight - window.innerHeight;
        };

        let target = 0, smooth = 0;
        const render = () => {
          const y = window.scrollY || window.pageYOffset;
          target = clamp01((y - start) / Math.max(1, end - start));
          smooth += (target - smooth) * 0.13;

          cards.forEach((card, i) => {
            const n = cards.length;
            const targetScale = 1 - ((n - i) * 0.05);
            const rangeStart = i / n;
            const s = (smooth <= rangeStart) ? 1 : map(smooth, rangeStart, 1, 1, targetScale);
            const fade = (s < 0.92) ? map(s, targetScale, 0.92, 0, 1) : 1;
            card.style.transform = `scale(${s})`;
            card.style.opacity = fade;
          });

          requestAnimationFrame(render);
        };

        measure(); render();
        window.addEventListener("resize", measure);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <main ref={rootRef}>


      {/* HERO */}
      <header className="case-hero section section-pad" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <div className="case">
            <figure className="case-hero__media">
              <img src={data.hero} alt={`${data.title} hero`} loading="eager" />
              <figcaption className="case-hero__caption">
                <h1
                  className="section-title"
                  style={{ color: "#fff", textShadow: "0 20px 46px rgba(0,0,0,.6)" }}
                  dangerouslySetInnerHTML={{
                    __html: data.title.replace(": ", ": <span class='soft-break'>") + "</span>",
                  }}
                />
                <p className="subtitle" style={{ color: "rgba(255,255,255,.95)" }}>
                  {data.subtitle}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* Explainer */}
      <section className="explainer-wrap section section-pad" style={{ background: "var(--surface)" }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4vw",
            alignItems: "center",
          }}
        >
          <div className="explainer" id="explainer">
            {data.explainer}
          </div>
          <div className="explainer-cta">
            {Array.isArray(data.ctas) && data.ctas.length > 0 ? (
              data.ctas.map((cta, i) => (
                <WakoButton
                  key={i}
                  as="a"
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  variant={cta.variant || "solid"}
                >
                  {cta.label}
                </WakoButton>
              ))
            ) : (
              data.figmaUrl && (
                <WakoButton as="a" href={data.figmaUrl} target="_blank" rel="noreferrer" variant="solid">
                  Figma
                </WakoButton>
              )
            )}
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="case-info section section-pad" style={{ background: "var(--surface)" }}>
        <div className="wrap"
        // removed: style={{ maxWidth: "1100px" }}
        >
          <div className="case-info__row">
            <div className="case-info__label">Year</div>
            <div className="case-info__value">{data.year}</div>
          </div>
          <div className="case-info__row">
            <div className="case-info__label">Deliverables</div>
            <div className="case-info__value">
              {data.deliverables.map((d, i) => (<span key={i}>{d}<br /></span>))}
            </div>
          </div>
          <div className="case-info__row">
            <div className="case-info__label">Stack</div>
            <div className="case-info__value case-info__tags">
              {data.stackTags.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <div className="case-info__row">
            <div className="case-info__label">Features</div>
            <div className="case-info__value">
              {data.features.map((f, i) => (<span key={i}>{f}<br /></span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards Parallax */}
      <section className="olc section section-pad" data-olc-cards>
        <div className="wrap">
          <div className="olc__main">
            {data.cards.map((c, i) => (
              <div className="olc__card-container" key={i}>
                <figure className="olc__card">
                  {c.type === "video" ? (
                    <video src={c.src} autoPlay muted loop playsInline />
                  ) : (
                    <img src={c.src} alt="" />
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
            Enjoyed it?
          </h3>
          <p style={{ color: "var(--muted)", marginBottom: "1.5em", fontSize: "1.1rem" }}>Explore more projects!</p>
          <WakoButton
            as="button"
            variant="solid"
            onClick={() => nav(data.nextHref || "/")}
          >
            Next project →
          </WakoButton>
        </div>
      </section>
    </main>
  );
}