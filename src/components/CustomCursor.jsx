import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/custom-cursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [isRing, setIsRing] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [isTap, setIsTap] = useState(false);
  const location = useLocation();

  // Safer: only treat as touch if the primary pointer is coarse AND doesn’t hover
  const isTouchDevice = () =>
    window.matchMedia &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isTouchDevice()) return;
    // Hide OS cursor while custom cursor is active
    document.body.classList.add("custom-cursor-active");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, rafId = 0;

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.32;
      cursorY += (mouseY - cursorY) * 0.32;
      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      rafId = requestAnimationFrame(animate);
    };

    // Grow over any clickable
    const clickableSelector =
      "a, button, [role='button'], .wako-btn, .project-card, .project-card-link, .nav__link, .nav__brand, .services-toggle";

    // Arrow on project cards, true external links, and Services toggles (to suggest “open”)
    const arrowSelector =
      ".project-card-link, .project-card, .services-toggle, a[target='_blank'], a[rel~='external'], [data-cursor='external']";

    const reset = () => {
      setIsHovering(false);
      setShowArrow(false);
      setIsRing(false);
      setIsDrag(false);
      setIsTap(false);
      cursorRef.current?.removeAttribute("data-label");
    };

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
      const drag = !!e.target.closest(".services-media canvas, .tagmarquee, [data-cursor='drag']");
      const toggle = e.target.closest(".services-toggle");
      const tap = !!toggle || !!e.target.closest("[data-cursor='tap']");
      const inNav = !!e.target.closest(".nav, .nav__link, .drawer__link, .nav__brand");
      setIsDrag(drag);
      setIsTap(tap);
      setShowArrow(!drag && !tap && (isProject || isExternal || isService));

      // Limit ring to navbar/explicit contrast zones; buttons can grow with .hover
      const ring = inNav || !!e.target.closest("[data-cursor-contrast='true']");
      setIsRing(ring);

      // Dynamic label: Open/Hide on Services toggle
      if (cursorRef.current) {
        if (toggle) {
          const acc = toggle.closest(".services-accordion");
          const opened = !!acc && acc.classList.contains("open");
          cursorRef.current.setAttribute("data-label", opened ? "Close" : "Open");
        } else {
          cursorRef.current.removeAttribute("data-label");
        }
        if (drag) cursorRef.current.removeAttribute("data-label"); // no label while dragging
      }
    };

    const onDown = reset;          // collapse when pressing
    const onLeave = reset;         // leaving window
    const onClick = reset;         // navigating via Link/anchor

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave, { passive: true });
    document.addEventListener("click", onClick, true);

    animate();

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  // Reset state on route change (e.g., clicking “Swear”)
  useEffect(() => {
    if (isTouchDevice()) return;
    setIsHovering(false);
    setShowArrow(false);
    setIsRing(false);
    setIsDrag(false);
    setIsTap(false);
    cursorRef.current?.removeAttribute("data-label");
  }, [location.pathname]);

  if (isTouchDevice()) return null;

  return (
    <div
      ref={cursorRef}
      className={
        `custom-cursor` +
        (isHovering ? " hover" : "") +
        (showArrow ? " arrow" : "") +
        (isRing ? " ring" : "") +
        (isDrag ? " drag" : "") +
        (isTap ? " tap" : "")
      }
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