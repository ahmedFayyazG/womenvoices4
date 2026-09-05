"use client";

import { useEffect, useRef, useState } from "react";

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    function syncMotion() {
      if (preference.matches) video?.pause();
      else void video?.play().catch(() => {});
    }
    syncMotion();
    preference.addEventListener("change", syncMotion);
    return () => preference.removeEventListener("change", syncMotion);
  }, []);

  return (
    <div className="hero-film">
      <video ref={videoRef} muted loop playsInline preload="none" poster="/hero-poster.webp" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src="/VideoVM-optimized.webm" type="video/webm" />
        <source src="/VideoVM-optimized.mp4" type="video/mp4" />
      </video>
      <div className="film-caption"><span>Connection starts<br /><strong>with each other.</strong></span><button type="button" onClick={() => { if (playing) videoRef.current?.pause(); else void videoRef.current?.play().catch(() => {}); }} aria-label={playing ? "Pause community film" : "Play community film"}>{playing ? "Pause film Ⅱ" : "Play film ▷"}</button></div>
    </div>
  );
}
