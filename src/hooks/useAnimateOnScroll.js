import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref and inView state
 */
export const useAnimateOnScroll = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once animated, stop observing
          if (options.once !== false) {
            observer.unobserve(ref);
          }
        } else if (options.once === false) {
          setInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.rootMargin, options.once]);

  return { ref: setRef, inView };
};
