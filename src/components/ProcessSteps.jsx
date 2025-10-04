
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

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Discover", desc: "We start with a conversation to understand your goals, audience, and vision. This helps us create a clear plan for your project.", image: step1 },
  { number: "02", title: "Design",   desc: "We translate your vision into a tailored visual concept in Figma. You'll see exactly how your product will look and function before we start building.", image: step2 },
  { number: "03", title: "Develop",  desc: "Once you approve the design, we turn it into a fully functional product with attention to detail and smooth performance.", image: step3 },
  { number: "04", title: "Launch",   desc: "Your product goes live, ready to make an impact. We stay available for adjustments, optimizations, and ongoing improvements.", image: step4 },
];

export default function ProcessSteps() {
  const stepsRef = useRef(null);

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

  return (
    <SectionReveal id="how-it-works" className="section section-pad">
      <div className="wrap">
        <h2 className="section-title mb-10">How it works</h2>
        <div className="process-steps" ref={stepsRef}>
          {steps.map((s, i) => (
            <Step
              key={s.number}
              step={s}
              alt={i % 2 === 1}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}