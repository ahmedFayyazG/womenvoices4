"use client";

import Image from "next/image";

const heroSlides = [
  "/hero/hero-slide-1.jpg",
  "/hero/hero-slide-2.jpg",
  "/hero/hero-slide-3.jpg",
  "/hero/hero-slide-4.jpg",
  "/hero/hero-slide-5.jpg",
  "/hero/hero-slide-6.jpg",
];

export default function HeroMediaSlider() {
  return (
    <div className="hero-media-slider" aria-hidden="true">
      {heroSlides.map((src, index) => (
        <div
          className="hero-media-slide"
          key={src}
          style={{ animationDelay: `${index * 5}s` }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
