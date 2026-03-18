'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const cursorSize = hovered ? 56 : 12;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        setHovered(true);
        const el = target.closest('[data-cursor-label]') as HTMLElement | null;
        setLabel(el?.dataset.cursorLabel ?? '');
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        setHovered(false);
        setLabel('');
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter, true);
    document.addEventListener('mouseout', onLeave, true);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter, true);
      document.removeEventListener('mouseout', onLeave, true);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorSize, mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center rounded-full"
      style={{ left: smoothX, top: smoothY, opacity: visible ? 1 : 0 }}
      animate={{ width: cursorSize, height: cursorSize }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className="w-full h-full rounded-full bg-white" />
      {label && (
        <span className="absolute text-black text-[10px] font-medium whitespace-nowrap">
          {label}
        </span>
      )}
    </motion.div>
  );
}
