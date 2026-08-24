"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { EventSlide } from "@/data/event-slides";

/** How long a slide holds before the carousel steps on. */
const HOLD_MS = 3500;
/** Must match the transform transition on .events-track in globals.css. */
const SLIDE_MS = 600;

/**
 * "Events that Bloomed" carousel — three photographs across on desktop, two
 * on tablet, one on phones, stepping one slide at a time and looping.
 *
 * JavaScript drives the stepping rather than a CSS keyframe loop. A keyframe
 * loop is switched off outright by `prefers-reduced-motion: reduce` — on for
 * anyone with Windows animation effects disabled — which left the previous
 * version frozen with no way to move it. Here reduced motion only drops the
 * sliding movement: the slides still change and the arrows still work.
 *
 * How many slides are visible is decided in CSS (`--per`), not here, so there
 * is no resize listener and nothing that can differ between the server render
 * and the browser. The slide list is rendered three times over and the index
 * is silently re-centred on the middle copy whenever it drifts out, which is
 * what makes the loop seamless in both directions.
 */
export function Slideshow({
  slides,
  label = "Events we styled",
}: {
  slides: EventSlide[];
  label?: string;
}) {
  const count = slides.length;
  // Start on the middle copy so there is a run of slides either side of the
  // opening position to slide in from.
  const [index, setIndex] = useState(count);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);

  const reel = useMemo(() => [...slides, ...slides, ...slides], [slides]);
  const active = ((index % count) + count) % count;

  // Only the slides about to be needed get a `src`. `loading="lazy"` cannot do
  // this job here: every slide sits inside the clipped frame, so the browser
  // defers the lot and they arrive blank when their turn comes round. Four
  // covers the widest layout (three across) plus the one queued behind it.
  const [fetched, setFetched] = useState<number[]>(() => [0, 1, 2, 3].map((n) => n % count));
  useEffect(() => {
    setFetched((prev) => {
      const want = [0, 1, 2, 3].map((n) => (active + n) % count);
      return want.every((n) => prev.includes(n)) ? prev : [...new Set([...prev, ...want])];
    });
  }, [active, count]);

  const step = useCallback((by: number) => setIndex((i) => i + by), []);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => step(1), HOLD_MS);
    return () => window.clearInterval(id);
  }, [paused, count, step]);

  // Re-centre on the middle copy once a slide has finished moving, with the
  // transition off so the jump is invisible.
  //
  // Deliberately a timer rather than a `transitionend` listener: when there is
  // no transition to end — reduced motion, or a background tab, where the
  // browser stops running them — that event never fires, and the index walks
  // off the end of the reel until nothing is left in frame. A timer fires
  // either way.
  useEffect(() => {
    if (index >= count * 2 || index < count) {
      const id = window.setTimeout(() => {
        setInstant(true);
        setIndex((i) => (i >= count * 2 ? i - count : i + count));
      }, SLIDE_MS);
      return () => window.clearTimeout(id);
    }
  }, [index, count]);

  // Put the transition back once the re-centred position has been painted.
  useEffect(() => {
    if (!instant) return;
    const id = window.setTimeout(() => setInstant(false), 60);
    return () => window.clearTimeout(id);
  }, [instant]);

  if (count === 0) return null;

  return (
    <div
      className="events-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="events-viewport">
        <div
          className={`events-track${instant ? " is-instant" : ""}`}
          style={{ "--i": index } as React.CSSProperties}
        >
          {reel.map((s, i) => {
            const n = i % count;
            return (
              <div className="events-slide" key={`${s.src}-${i}`} aria-hidden={n !== active}>
                {fetched.includes(n) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.src}
                    alt={i < count * 2 && i >= count ? s.alt : ""}
                    width={s.width}
                    height={s.height}
                    fetchPriority={n === 0 ? "high" : "auto"}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous slide"
            className="events-arrow left-0 sm:-left-2"
          >
            <Chevron className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next slide"
            className="events-arrow right-0 sm:-right-2"
          >
            <Chevron />
          </button>
        </>
      )}
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
