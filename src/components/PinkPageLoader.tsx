"use client";

import { useEffect, useState } from "react";

type PinkPageLoaderProps = {
  background?: string;
  minimumDuration?: number;
};

export default function PinkPageLoader({
  background = "#c91f71",
  minimumDuration = 1500,
}: PinkPageLoaderProps) {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), minimumDuration);
    const unmountTimer = setTimeout(
      () => setMounted(false),
      minimumDuration + 400,
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [minimumDuration]);

  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pink-loader${fading ? " pink-loader-fade" : ""}`}
      style={{ background }}
    >
      <span className="pink-loader-mark">Women’s Voices</span>
    </div>
  );
}
