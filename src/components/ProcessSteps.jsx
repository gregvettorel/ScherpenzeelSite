import React, { useEffect, useRef } from "react";
import Step from "./Step";
import SectionReveal from "./SectionReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import "../styles/process-steps.css";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSteps() {
  const stepsRef = useRef(null);
  const { t } = useLang();
  const rawSteps = t("process.steps");
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".process-steps__row");
      gsap.set(rows, { opacity: 0, y: 60, scale: 0.96 });
      gsap.to(rows, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, stepsRef);
    return () => ctx.revert();
  }, []);

  const images = [step1, step2, step3, step4];

  return (
    <SectionReveal id="how-it-works" className="section section-pad">
      <div className="wrap">
        <h2 className="section-title mb-10">{t("process.title")}</h2>
        <div className="process-steps" ref={stepsRef}>
          {steps.map((s, i) => (
            <Step
              key={s.number || i}
              step={{ ...s, image: images[i % images.length] }}
              alt={i % 2 === 1}
              isLast={i === steps.length - 1}
            />
          ))}
          {!steps.length && null}
        </div>
      </div>
    </SectionReveal>
  );
}