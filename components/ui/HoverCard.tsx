'use client';

import { motion } from 'framer-motion';

interface HoverCardProps {
  number: string;
  title: string;
  description: string;
  price: string;
  index: number;
}

export default function HoverCard({
  number,
  title,
  description,
  price,
  index,
}: HoverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8 }}
      style={{ opacity: 1 }}
      className="group relative p-8 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#1A6BFF]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#1A6BFF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Number */}
      <span className="text-[#1A6BFF] text-sm font-mono font-medium">{number}</span>

      {/* Title */}
      <h3
        className="text-2xl font-semibold text-[#0A0A0A] mt-3 mb-3"
        style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{description}</p>

      {/* Price + Arrow */}
      <div className="flex items-center justify-between">
        <span className="text-[#9CA3AF] text-sm">{price}</span>
        <div className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#1A6BFF] group-hover:bg-[#1A6BFF] transition-all duration-300">
          <span className="text-[#9CA3AF] group-hover:text-white text-sm transition-all duration-300 inline-block group-hover:rotate-45">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
