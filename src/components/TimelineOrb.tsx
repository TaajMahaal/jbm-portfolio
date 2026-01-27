import React, { useEffect, useState, useRef } from 'react';

interface TimelineOrbProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function TimelineOrb({ containerRef }: TimelineOrbProps) {
  const [animationName, setAnimationName] = useState<string>('');
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const updateAnimation = () => {
      if (!containerRef.current) return;

      const points = containerRef.current.querySelectorAll('[data-timeline-point]');
      if (points.length === 0) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const positions: number[] = [];

      points.forEach((point) => {
        const rect = point.getBoundingClientRect();
        // Point gold is 8px (w-2 h-2), orb is 8px
        // Both should align center to center
        const pointCenter = rect.top + rect.height / 2;
        const relativeTop = pointCenter - containerRect.top - 4; // -4 to center the 8px orb
        positions.push(relativeTop);
      });

      // Reverse so we start from bottom (visually last point)
      positions.reverse();

      // Create keyframes
      const pauseDuration = 5; // 5% pause - longer to see it stop
      const moveDuration = 6; // 6% to move - slower, smoother
      const segmentDuration = pauseDuration + moveDuration;

      console.log('Timeline positions (bottom to top):', positions);
      console.log('Pause duration:', pauseDuration, '%, Move duration:', moveDuration, '%');
      console.log('Segment duration:', segmentDuration, '%');

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
          // Pull (elastic stretch)
          keyframes += `
            ${endPausePercent}% {
              top: ${pos}px;
              animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
            }
          `;

          // Overshoot before arriving
          const overshootPercent = startPercent + pauseDuration + moveDuration - 0.5;
          const overshootAmount = (positions[i + 1] - pos) * 0.1; // 10% overshoot
          keyframes += `
            ${overshootPercent}% {
              top: ${positions[i + 1] + overshootAmount}px;
              animation-timing-function: cubic-bezier(0.25, 0, 0.5, 1);
            }
          `;

          // Settle on point (elastic bounce back)
          const snapPercent = startPercent + pauseDuration + moveDuration;
          keyframes += `
            ${snapPercent}% {
              top: ${positions[i + 1]}px;
              animation-timing-function: cubic-bezier(0.34, 1.2, 0.64, 1);
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
          // Pull
          keyframes += `
            ${endPausePercent}% {
              top: ${positions[i]}px;
              animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
            }
          `;

          // Overshoot before arriving
          const overshootPercent = startPercent + pauseDuration + moveDuration - 0.5;
          const overshootAmount = (positions[i] - positions[i - 1]) * 0.1; // 10% overshoot
          keyframes += `
            ${overshootPercent}% {
              top: ${positions[i - 1] - overshootAmount}px;
              animation-timing-function: cubic-bezier(0.25, 0, 0.5, 1);
            }
          `;

          // Settle on point (elastic bounce back)
          const snapPercent = startPercent + pauseDuration + moveDuration;
          keyframes += `
            ${snapPercent}% {
              top: ${positions[i - 1]}px;
              animation-timing-function: cubic-bezier(0.34, 1.2, 0.64, 1);
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

      console.log('Top percent:', topPercent);
      console.log('Final percent:', finalPercent);
      console.log('Generated keyframes length:', keyframes.length);

      // Create and inject style
      const animName = `timeline-orb-${Date.now()}`;
      const css = `
        @keyframes ${animName} {
          ${keyframes}
        }
        .timeline-orb-animated {
          animation: ${animName} 30s linear infinite;
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
