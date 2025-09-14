import React, { useEffect, useRef, useState } from "react";
import "../styles/custom-cursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isTouchDevice()) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.32;
      cursorY += (mouseY - cursorY) * 0.32;
      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      requestAnimationFrame(animateCursor);
    };

    // Grow over any clickable
    const clickableSelector = "a, button, [role='button'], .wako-btn, .project-card, .project-card-link, .nav__link, .nav__brand";

    // Arrow only on project cards or true external links
    const arrowSelector = ".project-card-link, .project-card, a[target='_blank'], a[rel~='external'], [data-cursor='external']";

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const clickable = !!e.target.closest(clickableSelector);
      setIsHovering(clickable);

      const arrowTarget = e.target.closest(arrowSelector);
      const isExternal =
        arrowTarget &&
        arrowTarget.tagName === "A" &&
        !/^mailto:|^tel:/i.test(arrowTarget.getAttribute("href") || "");
      const isProject = !!e.target.closest(".project-card-link, .project-card");
      setShowArrow(isProject || isExternal);

      // High-contrast over marked areas (nav or any [data-cursor-contrast] container)
      const needsContrast = !!e.target.closest(".nav, .navbar, [data-cursor-contrast='true']");
      cursorRef.current?.classList.toggle("contrast", needsContrast);
    };

    const onUp = () => setShowArrow(false);

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseup", onUp, { passive: true });
    animateCursor();

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (isTouchDevice()) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${isHovering ? " hover" : ""}${showArrow ? " arrow" : ""}`}
      aria-hidden="true"
    >
      {showArrow && (
        <svg className="cursor-arrow" width="18" height="18" viewBox="0 0 24 24">
          <path d="M7 17L17 7M17 7H9M17 7v8" stroke="#0579FE" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}