/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hoveredType, setHoveredType] = useState<'normal' | 'interactive' | 'magnetic'>('normal');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    const updateHoverState = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], .interactive-hover');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (el.classList.contains('magnetic-item')) {
            setHoveredType('magnetic');
          } else {
            setHoveredType('interactive');
          }
        });
        el.addEventListener('mouseleave', () => {
          setHoveredType('normal');
        });
      });
    };

    updateHoverState();

    // Re-check for new elements occasionally (MutationObserver is safer)
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer follow circle with mix-blend-mode */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#CCFF00] pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoveredType === 'interactive' ? 1.8 : hoveredType === 'magnetic' ? 2.4 : 1,
          backgroundColor: hoveredType === 'interactive' ? 'rgba(204, 255, 0, 0.2)' : hoveredType === 'magnetic' ? 'rgba(204, 255, 0, 0.4)' : 'rgba(204, 255, 0, 0)',
          borderColor: hoveredType === 'normal' ? '#CCFF00' : '#CCFF00',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner solid Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#CCFF00] rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoveredType !== 'normal' ? 0.5 : 1,
        }}
      />
    </>
  );
}
