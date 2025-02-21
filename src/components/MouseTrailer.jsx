import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseTrailer = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to(circle, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(circle, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', moveCircle);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed w-8 h-8 bg-indigo-600 rounded-full pointer-events-none mix-blend-difference z-50 opacity-0"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default MouseTrailer;