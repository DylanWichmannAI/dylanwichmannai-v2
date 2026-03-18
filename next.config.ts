import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  // Next.js 16 uses Turbopack by default — no webpack config needed
  turbopack: {},
};

export default nextConfig;
