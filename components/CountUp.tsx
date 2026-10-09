"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a stat's numeric portion up from 0 when it scrolls into view —
 * `value` is the full display string (e.g. "5000+", "99.9%", "4.8/5"),
 * parsed into a leading number plus whatever prefix/suffix surrounds it.
 * Anyone who's asked for reduced motion just sees the final value.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => {
    const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    return m ? `${m[1]}0${m[3]}` : value;
  });

  useEffect(() => {
    // Recomputed here, not read from outer scope — a fresh array from
    // `value.match()` on every render was the bug: it's a new object
    // identity each time, so putting it in the dependency array below
    // re-ran this effect on every animation-frame re-render (setDisplay
    // triggers one), creating a new IntersectionObserver each time that
    // immediately re-fired (the element was already in view) and
    // restarted the count from zero in an infinite loop.
    const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const prefix = match[1];
    const target = parseFloat(match[2].replace(/,/g, ""));
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
    const suffix = match[3];
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 3500;
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          const formatted = decimals
            ? current.toFixed(decimals)
            : Math.round(current).toLocaleString("en-NG");
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
