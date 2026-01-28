import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TimelineOrbProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function TimelineOrb({ containerRef }: TimelineOrbProps) {
  const prefersReducedMotion = useReducedMotion();
  const [animationName, setAnimationName] = useState<string>('');
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // Si l'utilisateur préfère le mouvement réduit, on ne montre pas l'orbe animée
  if (prefersReducedMotion) {
    return null;
  }

  useEffect(() => {
    const updateAnimation = () => {
      if (!containerRef.current) return;

      const points = containerRef.current.querySelectorAll('[data-timeline-point]');
      if (points.length === 0) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const positions: number[] = [];

      // Calculate horizontal position from first point
      let leftPosition = 20; // Fallback
      if (points[0]) {
        const firstPointRect = points[0].getBoundingClientRect();
        const pointCenterX = firstPointRect.left + firstPointRect.width / 2;
        // +6px to compensate for margin-left: -6px
        leftPosition = pointCenterX - containerRect.left + 6;
      }

      points.forEach((point) => {
        const rect = point.getBoundingClientRect();
        // Point gold is 8px (w-2 h-2), orb is 12px now
        // Both should align center to center
        const pointCenter = rect.top + rect.height / 2;
        const relativeTop = pointCenter - containerRect.top - 6; // -6 to center the 12px orb
        positions.push(relativeTop);
      });

      // Reverse so we start from bottom (visually last point)
      positions.reverse();

      // Create keyframes
      const pauseDuration = 5; // 5% pause - longer to see it stop
      const moveDuration = 6; // 6% to move - slower, smoother
      const segmentDuration = pauseDuration + moveDuration;

      let keyframes = '';

      // Going up
      positions.forEach((pos, i) => {
        const startPercent = i * segmentDuration;
        const pullStartPercent = startPercent + pauseDuration - 1;
        const endPausePercent = startPercent + pauseDuration;

        // Pause
        keyframes += `
          ${startPercent}%, ${pullStartPercent}% {
            top: ${pos}px;
            animation-timing-function: linear;
          }
        `;

        if (i < positions.length - 1) {
          // Mouvement direct et fluide - pas de bounce back
          const movePercent = startPercent + pauseDuration + moveDuration;
          keyframes += `
            ${movePercent}% {
              top: ${positions[i + 1]}px;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
          `;
        }
      });

      const topPercent = positions.length * segmentDuration;

      // Pause at top
      keyframes += `
        ${topPercent}%, ${topPercent + 7}% {
          top: ${positions[positions.length - 1]}px;
          animation-timing-function: linear;
        }
      `;

      // Going down
      for (let i = positions.length - 1; i >= 0; i--) {
        const offset = positions.length - i - 1;
        const startPercent = topPercent + 7 + offset * segmentDuration;
        const pullStartPercent = startPercent + pauseDuration - 1;
        const endPausePercent = startPercent + pauseDuration;

        // Pause
        keyframes += `
          ${startPercent}%, ${pullStartPercent}% {
            top: ${positions[i]}px;
            animation-timing-function: linear;
          }
        `;

        if (i > 0) {
          // Mouvement direct et fluide - pas de bounce back
          const movePercent = startPercent + pauseDuration + moveDuration;
          keyframes += `
            ${movePercent}% {
              top: ${positions[i - 1]}px;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
          `;
        }
      }

      // Final pause before loop
      const finalPercent = topPercent + 7 + (positions.length - 1) * segmentDuration + pauseDuration;
      keyframes += `
        ${finalPercent}%, 100% {
          top: ${positions[0]}px;
        }
      `;

      // Create and inject style
      const animName = `timeline-orb-${Date.now()}`;
      const css = `
        @keyframes ${animName} {
          ${keyframes}
        }
        .timeline-orb-animated {
          animation: ${animName} 30s linear infinite;
          left: ${leftPosition}px;
        }
      `;

      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }

      const styleEl = document.createElement('style');
      styleEl.innerHTML = css;
      document.head.appendChild(styleEl);
      styleRef.current = styleEl;

      setAnimationName('timeline-orb-animated');
    };

    // Initial update
    setTimeout(updateAnimation, 100);

    // Update on resize
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
      if (styleRef.current && document.head.contains(styleRef.current)) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div className={`timeline-orb ${animationName}`} />
  );
}
