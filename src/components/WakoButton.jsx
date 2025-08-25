import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import defaultHoverSfx from "../assets/sfx/hover2mp3.mp3";
import defaultClickSfx from "../assets/sfx/press.mp3";

export default function WakoButton({
  children,
  as = "a",
  variant = "solid",
  href,
  onClick,
  className = "",
  sfx = true,
  hoverSound = defaultHoverSfx,
  clickSound = defaultClickSfx,
  volume = 0.25,
  rate = 1,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

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

  const Comp = motion[as] || motion.a;

  const base =
    "wako-btn" +
    (variant === "ghost" ? " wako-btn--ghost" : " wako-btn--solid") +
    (className ? " " + className : "");

  const hoverAudio = useMemo(() => {
    if (!sfx || !hoverSound) return null;
    const a = new Audio(hoverSound);
    a.preload = "auto";
    a.volume = volume;
    a.playbackRate = rate;
    return a;
  }, [sfx, hoverSound, volume, rate]);

  const clickAudio = useMemo(() => {
    if (!sfx || !clickSound) return null;
    const a = new Audio(clickSound);
    a.preload = "auto";
    a.volume = volume;
    a.playbackRate = rate;
    return a;
  }, [sfx, clickSound, volume, rate]);

  const play = (audio) => {
    if (!audio) return;
    audio.currentTime = 0;
    const p = audio.play();             // ✅ handle promise to avoid console error
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  // Enhance icon children with hovered prop
  const enhancedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child) &&
    child.type &&
    ["ArrowDraw", "EnvelopeIcon", "PhoneIcon"].includes(child.type.name)
      ? React.cloneElement(child, { hovered })
      : child
  );

  return (
    <Comp
      href={href}
      className={base}
      onHoverStart={() => {
        setHovered(true);
        if (unlocked) play(hoverAudio); // 🔒 only after a user gesture
      }}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => {
        if (unlocked) play(hoverAudio);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") play(clickAudio); // keyboard click
      }}
      onPointerDown={() => {
        // ensures this very interaction counts as a gesture
        if (!unlocked) setUnlocked(true);
      }}
      onClick={(e) => {
        if (onClick) onClick(e);
        play(clickAudio); // click is always user-initiated
      }}
      whileHover={{
        scale: 1.06,
        boxShadow:
          variant === "ghost"
            ? "0 2px 12px rgba(24,119,255,0.08)"
            : "0 4px 24px rgba(24,119,255,0.10)",
        y: -2,
      }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      {...props}
    >
      {enhancedChildren}
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
};
