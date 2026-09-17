"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = Array.from({ length: 6 }, (_, index) => ({
  src: `/hero/hero-slide-${index + 1}.jpg`,
  alt: `Women’s Voices community event ${index + 1}`,
}));

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <section className="hero hero-slider" aria-labelledby="home-title">
      <div className="hero-slides" aria-live="off">
        {slides.map((slide, index) => (
          <div className={`hero-slide${index === active ? " is-active" : ""}`} key={slide.src} aria-hidden={index !== active}>
            <Image src={slide.src} alt={index === active ? slide.alt : ""} fill priority={index === 0} sizes="100vw" />
          </div>
        ))}
      </div>

      <div className="hero-gradient" />
      <div className="hero-content">
        <span className="hero-kicker">BY WOMEN · FOR WOMEN · SINCE 2013</span>
        <h1 id="home-title">Women&apos;s <em>Voices</em></h1>
        <p>Creating space for women to connect, grow in confidence, build independence and make their voices heard.</p>
        <div className="hero-actions">
          <Link className="hero-primary" href="/about">Discover our work <span aria-hidden="true">→</span></Link>
          <Link className="hero-secondary" href="/contact">Get involved</Link>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-left" type="button" onClick={() => goTo(active - 1)} aria-label="Previous image">←</button>
      <button className="hero-arrow hero-arrow-right" type="button" onClick={() => goTo(active + 1)} aria-label="Next image">→</button>

      <div className="hero-pagination" aria-label="Choose hero image">
        <span className="hero-count">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button key={slide.src} className={index === active ? "is-active" : ""} type="button" onClick={() => goTo(index)} aria-label={`Show image ${index + 1}`} aria-current={index === active ? "true" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
