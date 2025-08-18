import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function WakoButton({
  children,
  as = "a",
  variant = "solid", // "solid" | "ghost"
  href,
  onClick,
  className = "",
  ...props
}) {
  const Comp = motion[as] || motion.a;
  const base =
    "wako-btn" +
    (variant === "ghost" ? " wako-btn--ghost" : " wako-btn--solid") +
    (className ? " " + className : "");

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={base}
      whileHover={{
        scale: 1.06,
        boxShadow:
          variant === "ghost"
            ? "0 2px 12px rgba(24,119,255,0.08)"
            : "0 4px 24px rgba(24,119,255,0.10)",
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
        y: 1,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      {...props}
    >
      {children}
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
};