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

    const hoverSelectors = [
      "a", "button", "input", "textarea", "select", "[role='button']", ".hoverable"
    ];
    const handlePointerOver = e => {
      if (hoverSelectors.some(sel => e.target.closest(sel))) setIsHovering(true);
      if (e.target.closest(".wako-btn, .project-card, .olc__card, .btn--pill, .case-nav__back")) setShowArrow(true);
    };
    const handlePointerOut = e => {
      if (hoverSelectors.some(sel => e.target.closest(sel))) setIsHovering(false);
      if (e.target.closest(".wako-btn, .project-card, .olc__card, .btn--pill, .case-nav__back")) setShowArrow(false);
    };

    // NEW: Always reset arrow on mouseup (after click)
    const handleMouseUp = () => setShowArrow(false);

    document.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("mouseup", handleMouseUp);
    animateCursor();

    return () => {
      document.removeEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("mouseup", handleMouseUp);
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