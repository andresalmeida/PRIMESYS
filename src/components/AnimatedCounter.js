"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endValue = parseInt(value);

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
