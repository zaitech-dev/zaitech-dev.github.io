import { useEffect, useRef, useState } from 'react';
import { trackSectionView } from '@/lib/analytics';

export const useScrollAnimationWithTracking = (sectionName?: string) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Track section view only once per session
          if (sectionName && !hasTracked.current) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
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
  }, [sectionName]);

  return { elementRef, isVisible };
};
