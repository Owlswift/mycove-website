"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades/slides a section into place the first time it enters the
 * viewport. Content renders fully in the markup either way (no
 * layout shift for crawlers or no-JS), this only adds the `.is-visible`
 * class that `.reveal` in globals.css transitions in.
 */
export default function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
  style,
  direction = "left",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Which side the element visibly slides in from. */
  direction?: "left" | "right" | "up";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
