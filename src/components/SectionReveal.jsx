import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SectionReveal({ children, delay = 0, y = 40, as: Tag = "section", ...props }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,0.61,0.36,1], delay } }
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}