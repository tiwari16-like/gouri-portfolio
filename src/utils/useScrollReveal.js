import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight IntersectionObserver hook for scroll-triggered section reveals.
 * Ensures elements already visible or rendered under reduced-motion stay visible.
 */
export function useScrollReveal(threshold = 0.02) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: '0px 0px -16px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return { ref, isVisible };
}
