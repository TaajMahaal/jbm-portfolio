import { useEffect, useRef, useState } from 'react';

export function useSynchronizedBorder() {
  const ref = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  useEffect(() => {
    const updatePosition = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Calculate position as percentage of viewport
      // The gradient should be positioned so that the top-left corner of the viewport
      // is the bright point (0% 0%) and bottom-right is the dark point (100% 100%)
      // Negative offset to align with viewport gradient
      // When window is at top-left (0,0), we want gradient to start there (bright)
      // When window is at bottom-right, we want gradient to end there (dark)
      const xPercent = -(rect.left / window.innerWidth) * 100;
      const yPercent = -(rect.top / window.innerHeight) * 100;

      setBackgroundPosition(`${xPercent}% ${yPercent}%`);
    };

    // Initial calculation
    updatePosition();

    // Update on scroll and resize
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    // Use ResizeObserver to detect when the element itself changes size/position
    const resizeObserver = new ResizeObserver(updatePosition);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, backgroundPosition };
}
