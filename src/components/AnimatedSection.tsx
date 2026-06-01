"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
};

const AnimatedSection: React.FC<Props> = ({ children, threshold = 0.15, className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
