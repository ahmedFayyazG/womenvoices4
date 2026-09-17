"use client";

import { useEffect, useState } from "react";

type PinkPageLoaderProps = {
  /** Minimum time the loader remains visible, in milliseconds. */
  minimumDuration?: number;
  /** Background colour of the full-screen loader. */
  background?: string;
};

export default function PinkPageLoader({
  minimumDuration = 1800,
  background = "#d94c86",
}: PinkPageLoaderProps) {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let leaveTimer: number | undefined;
    let removeTimer: number | undefined;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, minimumDuration - elapsed);

      leaveTimer = window.setTimeout(() => {
        setLeaving(true);
        document.body.style.overflow = previousOverflow;
        removeTimer = window.setTimeout(() => setVisible(false), 650);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [minimumDuration]);

  if (!visible) return null;

  return (
    <div
      className={`pink-loader${leaving ? " pink-loader--leaving" : ""}`}
      style={{ backgroundColor: background }}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="pink-loader__content">
        <img
          className="pink-loader__dots"
          src="/pink-womens-forum-loader.gif"
          alt=""
          aria-hidden="true"
        />
        <span className="pink-loader__spinner" aria-hidden="true" />
        <span className="sr-only">Loading…</span>
      </div>

      <style jsx>{`
        .pink-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          color: #fff;
          opacity: 1;
          visibility: visible;
          transition: opacity 600ms ease-out, visibility 600ms ease-out;
        }

        .pink-loader--leaving {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .pink-loader__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .pink-loader__dots {
          display: block;
          width: min(76vw, 65vh, 680px);
          height: auto;
          object-fit: contain;
        }

        .pink-loader__spinner {
          width: 34px;
          height: 34px;
          border: 4px solid rgba(255, 255, 255, 0.42);
          border-top-color: rgba(255, 255, 255, 0.92);
          border-radius: 50%;
          animation: spinner-rotate 900ms linear infinite;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes spinner-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .pink-loader__dots {
            width: min(94vw, 64vh);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pink-loader__spinner {
            animation-duration: 2.4s;
          }
        }
      `}</style>
    </div>
  );
}
