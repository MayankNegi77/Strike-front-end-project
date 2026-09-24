import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Provides a professional, hardware-accelerated scroll-driven opening animation
 * that reveals page sections smoothly as the user scrolls down.
 * Compatible with all modern browsers, desktop, and mobile devices.
 */
export default function ScrollReveal({
  children,
  className = '',
  animation = 'scroll-open',
  delay = 0,
}) {
  const domRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Add indicator class to document so CSS can apply initial state safely
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('scroll-animations-active');
    }

    const node = domRef.current;
    if (!node) return;

    // Check if element is already within or near the viewport on load
    const rect = node.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.88) {
      setIsRevealed(true);
      return;
    }

    const isMobile = window.innerWidth <= 768;
    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -60px 0px',
      threshold: isMobile ? 0.05 : 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-box ${animation} ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
