"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  "/hero/hero-slide-1.jpg",
  "/hero/hero-slide-2.jpg",
  "/hero/hero-slide-3.jpg",
  "/hero/hero-slide-4.jpg",
  "/hero/hero-slide-5.jpg",
  "/hero/hero-slide-6.jpg",
];

const INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActive(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
  };

  return (
    <div className="hero-slider" aria-hidden="true">
      {slides.map((src, index) => (
        <div
          key={src}
          className={
            index === active
              ? "hero-slide hero-slide-active"
              : "hero-slide"
          }
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-slide-img"
          />
        </div>
      ))}
      <div className="hero-slider-dots">
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            className={
              index === active
                ? "hero-slider-dot hero-slider-dot-active"
                : "hero-slider-dot"
            }
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
