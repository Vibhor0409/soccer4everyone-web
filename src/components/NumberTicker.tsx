"use client";

// Adapted from 21st.dev "Number Ticker" (danielpetho): counts up once when it scrolls into view.
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export default function NumberTicker({ target, className = "", delay = 0 }: { target: number; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  // Start at the final value so the real number shows without JS and under reduced motion.
  const count = useMotionValue(target);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("en-US"));

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    count.set(0);
    const c = animate(count, target, { duration: 2.2, ease: [0.23, 1, 0.32, 1], delay });
    return () => c.stop();
  }, [inView, target, delay, count]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className}`}>
      {rounded}
    </motion.span>
  );
}
