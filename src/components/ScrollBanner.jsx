import React, { useEffect, useRef, useState } from "react";
import "../styles/scroll-banner.css";

const ScrollBanner = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");
  const [label, setLabel] = useState(
    sections.find((s) => s.id === sections[0]?.id)?.label || ""
  );
  const [phase, setPhase] = useState("in"); // "in" | "out"
  const pendingLabelRef = useRef(null);

  // Observe sections in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          if (id && id !== activeId) setActiveId(id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [sections, activeId]);

  // When the active section changes, slide out, swap label, slide in
  useEffect(() => {
    const newLabel = sections.find((s) => s.id === activeId)?.label || "";
    if (newLabel && newLabel !== label) {
      pendingLabelRef.current = newLabel;
      setPhase("out");
    }
  }, [activeId, sections, label]);

  const onTransitionEnd = () => {
    if (phase === "out" && pendingLabelRef.current) {
      // swap the text after sliding out
      setLabel(pendingLabelRef.current);
      pendingLabelRef.current = null;
      // slide back in
      setPhase("in");
    }
  };

  return (
    <div
      className={`scroll-banner ${phase === "out" ? "is-out" : "is-in"}`}
      onTransitionEnd={onTransitionEnd}
      aria-live="polite"
    >
      <div className="scroll-banner__text">{label}</div>
    </div>
  );
};

export default ScrollBanner;
