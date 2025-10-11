import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function WakoButton({
  children,
  as = "a",
  variant = "solid",
  href,
  onClick,
  className = "",
  sfx = false,                 // default OFF for performance
  hoverSound,
  clickSound,
  volume = 0.25,
  rate = 1,
  showArrow = "auto", // NEW: "auto" | true | false
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (unlocked) return;
    const unlock = () => setUnlocked(true);
    window.addEventListener("pointerdown", unlock, { once: true, passive: true });
    window.addEventListener("keydown", unlock, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [unlocked]);

  // Load audio only when needed
  const [hoverAudio, setHoverAudio] = useState(null);
  const [clickAudio, setClickAudio] = useState(null);
  useEffect(() => {
    if (!sfx) return;
    let stop = false;
    const load = async () => {
      const [h, c] = await Promise.all([
        hoverSound ? Promise.resolve({ default: hoverSound }) : import("../assets/sfx/hover2mp3.mp3"),
        clickSound ? Promise.resolve({ default: clickSound }) : import("../assets/sfx/press.mp3"),
      ]);
      if (stop) return;
      const ha = new Audio(h.default); ha.preload = "auto"; ha.volume = volume; ha.playbackRate = rate;
      const ca = new Audio(c.default); ca.preload = "auto"; ca.volume = volume; ca.playbackRate = rate;
      setHoverAudio(ha); setClickAudio(ca);
    };
    load();
    return () => { stop = true; };
  }, [sfx, hoverSound, clickSound, volume, rate]);

  const play = (audio) => {
    if (!audio) return;
    audio.currentTime = 0;
    const p = audio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  // muis-spotlight + magnet effect
  const handlePointerMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    // licht magnetisch verplaatsen op basis van delta tov center
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / rect.width;  // -0.5..0.5
    const dy = (y - cy) / rect.height;
    el.style.setProperty("--magX", `${dx * 4}px`);
    el.style.setProperty("--magY", `${dy * 4}px`);
  };

  // Enhance icon children with hovered prop
  const enhancedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child) &&
    child.type &&
    ["ArrowDraw", "EnvelopeIcon", "PhoneIcon"].includes(child.type.name)
      ? React.cloneElement(child, { hovered })
      : child
  );

  // Detect trailing icon to auto-hide the built-in arrow
  const childArray = React.Children.toArray(children);
  const last = childArray[childArray.length - 1];
  const knownIconNames = new Set(["ArrowDraw", "EnvelopeIcon", "PhoneIcon"]);
  const lastIsKnownIcon =
    React.isValidElement(last) &&
    last.type &&
    knownIconNames.has(last.type.name);
  const lastIsSvg =
    React.isValidElement(last) &&
    (last.type === "svg" || last.type?.name === "svg");
  const hasTrailingIcon = lastIsKnownIcon || lastIsSvg;

  const shouldShowArrow =
    showArrow === true ? true : showArrow === false ? false : !hasTrailingIcon;

  const Comp = motion[as] || motion.a;

  const base =
    "wako-btn" +
    (variant === "ghost" ? " wako-btn--ghost" : " wako-btn--solid") +
    (shouldShowArrow ? " has-arrow" : " no-arrow") + // NEW helper class
    (className ? " " + className : "");

  return (
    <Comp
      ref={btnRef}
      href={href}
      className={base}
      onPointerMove={handlePointerMove}
      onHoverStart={() => { setHovered(true); if (unlocked) play(hoverAudio); }}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => { if (unlocked) play(hoverAudio); }}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") play(clickAudio); }}
      onPointerDown={() => { if (!unlocked) setUnlocked(true); }}
      onClick={(e) => { onClick?.(e); play(clickAudio); }}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.985, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      {...props}
    >
      <span className="wb-fill" aria-hidden />

      {/* 3-col grid keeps label centered regardless of arrow */}
      <span className="wb-inner">
        <span className="wb-label">{enhancedChildren}</span>

        {shouldShowArrow && (
          <span className="wb-arrow" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        )}
      </span>
    </Comp>
  );
}


WakoButton.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["a", "button"]),
  variant: PropTypes.oneOf(["solid", "ghost"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  sfx: PropTypes.bool,
  hoverSound: PropTypes.any,
  clickSound: PropTypes.any,
  volume: PropTypes.number,
  rate: PropTypes.number,
  showArrow: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["auto"])]),
};
