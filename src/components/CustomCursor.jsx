import React, { useEffect, useRef, useState } from "react";
import "../styles/custom-cursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Safer: only treat as touch if the primary pointer is coarse AND doesn’t hover
  const isTouchDevice = () =>
    window.matchMedia &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isTouchDevice()) return;
    // Hide OS cursor while custom cursor is active
    document.body.classList.add("custom-cursor-active");

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
    const clickableSelector =
      "a, button, [role='button'], .wako-btn, .project-card, .project-card-link, .nav__link, .nav__brand, .services-toggle";

    // Arrow on project cards, true external links, and Services toggles (to suggest “open”)
    const arrowSelector =
      ".project-card-link, .project-card, .services-toggle, a[target='_blank'], a[rel~='external'], [data-cursor='external']";

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
      const isService = !!e.target.closest(".services-toggle");
      setShowArrow(isProject || isExternal || isService);

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
      document.body.classList.remove("custom-cursor-active");
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