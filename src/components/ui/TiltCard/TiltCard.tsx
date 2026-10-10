import React, { useCallback, useRef, useEffect } from 'react';

/**
 * Lightweight CSS-3D tilt card.
 * - Writes CSS variables directly to the DOM node inside rAF (zero React re-renders).
 * - Disabled automatically on touch devices and when the user prefers reduced motion.
 */

const canTilt = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** max rotation in degrees */
  max?: number;
  /** how far the card lifts toward the viewer on hover (px) */
  lift?: number;
  /** show the pointer spotlight + gradient border */
  glare?: boolean;
};

export const TiltCard: React.FC<TiltCardProps> = ({
  max = 8,
  lift = 12,
  glare = true,
  className = '',
  children,
  onPointerMove,
  onPointerLeave,
  onPointerEnter,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      onPointerMove?.(e);
      const el = ref.current;
      if (!el || !canTilt()) return;
      const { clientX, clientY } = e;
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const r = el.getBoundingClientRect();
        const px = (clientX - r.left) / r.width;
        const py = (clientY - r.top) / r.height;
        el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
        el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
      });
    },
    [max, onPointerMove]
  );

  const handleEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      onPointerEnter?.(e);
      const el = ref.current;
      if (!el || !canTilt()) return;
      el.classList.add('is-tilting');
      el.style.setProperty('--lift', `${lift}px`);
    },
    [lift, onPointerEnter]
  );

  const handleLeave = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      onPointerLeave?.(e);
      const el = ref.current;
      if (!el) return;
      if (frame.current) cancelAnimationFrame(frame.current);
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--lift', '0px');
    },
    [onPointerLeave]
  );

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {glare && (
        <>
          <span className="tilt-glare" aria-hidden />
          <span className="tilt-border" aria-hidden />
        </>
      )}
      {children}
    </div>
  );
};

export default TiltCard;
