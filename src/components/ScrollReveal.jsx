import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', stagger = 60, threshold = 0.1 }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it hits the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // If there are multiple direct children and we want to stagger them
  useEffect(() => {
    if (revealed && ref.current && stagger > 0) {
      const childElements = ref.current.querySelectorAll('.reveal-child');
      childElements.forEach((child, index) => {
        child.style.transitionDelay = `${index * stagger}ms`;
        child.classList.add('reveal-active');
      });
    }
  }, [revealed, stagger]);

  return (
    <div
      ref={ref}
      className={`reveal-element ${revealed ? 'reveal-active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
