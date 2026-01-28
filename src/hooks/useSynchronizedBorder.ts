import { useEffect, useRef, useState } from 'react';

export function useSynchronizedBorder() {
  const ref = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  useEffect(() => {
    const updatePosition = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Pour un gradient synchronisé, on calcule la position de l'élément
      // par rapport au viewport. Avec background-size: 100vw 100vh,
      // le gradient couvre exactement le viewport et on décale simplement
      // chaque fenêtre pour qu'elle affiche la bonne portion du gradient.
      const xPercent = (rect.left / window.innerWidth) * 100;
      const yPercent = (rect.top / window.innerHeight) * 100;

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
