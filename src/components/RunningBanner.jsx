// src/components/RunningBanner.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import "../styles/running-banner.css";

export default function RunningBanner({
  scrollerSelector,
  speed = 0.6,
  direction = 1,
  imageSrc = "/favicon.png",
  imageAlt = "WAKO Design",
  segments = 16,
  logoWidth = 80,
  initialOffset = 0,
  size,
  style = {},
  varyOpacity = true,
  grayscale = true,
  blend = "multiply",
  ...rest
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [loopWidth, setLoopWidth] = useState(0);

  // Detect iOS (includes iPadOS on M1 with touch)
  const isIOS = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || "";
    const iOSDev = /iPad|iPhone|iPod/.test(ua);
    const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    return iOSDev || iPadOS;
  }, []);

  const OPAC = [0.22, 0.32, 0.48, 0.7, 0.48, 0.32];

  const Sequence = () => (
    <>
      {Array.from({ length: segments }).map((_, i) => (
        <img
          key={i}
          className="running-banner__logo"
          src={imageSrc}
          alt={imageAlt}
          width={logoWidth}
          height={size ? (typeof size === "number" ? size : undefined) : "auto"}
          style={{
            ...(size ? { height: typeof size === "number" ? `${size}px` : size, width: "auto" } : undefined),
            opacity: varyOpacity ? OPAC[i % OPAC.length] : 0.8,
            // IMPORTANT: avoid filter/blend on iOS to prevent flicker
            filter: !isIOS && grayscale ? "grayscale(1) contrast(1.05)" : undefined,
            mixBlendMode: !isIOS ? (blend || "normal") : "normal"
          }}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          decoding="async"
          loading="lazy"
          aria-hidden="true"
        />
      ))}
    </>
  );

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const half = trackRef.current.scrollWidth / 2;
      setLoopWidth(half || 0);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    const raf = requestAnimationFrame(measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("load", measure);
    };
  }, []);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const scroller =
      (scrollerSelector && document.querySelector(scrollerSelector)) || window;

    const getScrollY = () =>
      scroller === window
        ? window.scrollY || window.pageYOffset || 0
        : scroller.scrollTop || 0;

    let raf = 0;
    const tick = () => {
      raf = 0;
      if (!trackRef.current || !loopWidth) return;
      const y = getScrollY();
      const x = y * speed * direction + initialOffset;
      const w = loopWidth;
      const wrapped = ((x % w) + w) % w;
      const px = Math.round(wrapped); // pixel-snap
      // Use 2D transform on iOS (avoid 3D compositing glitches)
      trackRef.current.style.transform = isIOS
        ? `translateX(${-px}px)`
        : `translate3d(${-px}px, 0, 0)`;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(tick); };

    schedule();
    const opts = { passive: true };
    if (scroller === window) {
      window.addEventListener("scroll", schedule, opts);
      window.addEventListener("resize", schedule, opts);
    } else {
      scroller.addEventListener("scroll", schedule, opts);
      window.addEventListener("resize", schedule, opts);
    }

    return () => {
      if (scroller === window) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      } else {
        scroller.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, [loopWidth, scrollerSelector, speed, direction, initialOffset, isIOS]);

  return (
    <div
      className={`running-banner section-pad${isIOS ? " running-banner--ios" : ""}`}
      ref={containerRef}
      aria-label={`${imageAlt} marquee`}
      style={{ "--rb-gap": "64px", ...style }}
      {...rest}
    >
      <div className="running-banner__inner" ref={trackRef} aria-hidden="true">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
