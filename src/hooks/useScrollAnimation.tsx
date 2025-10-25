import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && shouldAnimate) {
            // Element is coming into view and ready to animate
            setIsVisible(true);
            setShouldAnimate(false);
          } else if (!entry.isIntersecting && !shouldAnimate) {
            // Element has left the viewport after being animated
            // Reset animation state but keep content visible
            setShouldAnimate(true);
            // Don't set isVisible to false - this prevents blank sections
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [shouldAnimate, options.threshold, options.rootMargin]);

  return { elementRef, isVisible, hasAnimated: !shouldAnimate };
}