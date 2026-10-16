"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function GalleryGrid({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbRef = useRef<HTMLButtonElement>(null);
  const total = images.length;
  const isOpen = active !== null;

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  useEffect(() => {
    thumbRef.current?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <>
      <div className="gallery-masonry">
        {images.map((src, index) => (
          <figure className="gallery-tile" key={src}>
            <button
              type="button"
              className="gallery-tile-open"
              aria-label={`Open photo ${index + 1} of ${total}`}
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setActive(index);
              }}
            >
              <Image src={src} alt={`Women’s Voices community moment ${index + 1}`} fill sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw" priority={index < 4} />
            </button>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </figure>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button ref={closeRef} type="button" className="lightbox-close" aria-label="Close photo viewer" onClick={close}>×</button>
          <button type="button" className="lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image key={images[active]} src={images[active]} alt={`Women’s Voices community moment ${active + 1}`} fill sizes="100vw" priority />
          </div>
          <button type="button" className="lightbox-nav lightbox-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
          <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-count">{active + 1} / {total}</span>
            <div className="lightbox-thumbs" role="list">
              {images.map((src, index) => (
                <button
                  key={src}
                  ref={index === active ? thumbRef : undefined}
                  type="button"
                  role="listitem"
                  className={index === active ? "lightbox-thumb on" : "lightbox-thumb"}
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                >
                  <Image src={src} alt="" fill sizes="96px" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
