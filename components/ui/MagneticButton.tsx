'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  strength?: number;
  'data-cursor-label'?: string;
}

export default function MagneticButton({
  children,
  href,
  className = '',
  onClick,
  strength = 0.35,
  'data-cursor-label': cursorLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const dataAttrs = cursorLabel ? { 'data-cursor-label': cursorLabel } : {};

  const inner = href ? (
    <a href={href} className={className} onClick={onClick} {...dataAttrs}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={onClick} {...dataAttrs}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
