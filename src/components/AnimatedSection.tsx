import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const elementRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div ref={elementRef} className={className}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;