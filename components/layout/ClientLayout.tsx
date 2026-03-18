'use client';

import { useState, useEffect } from 'react';
import PageLoader from '@/components/ui/PageLoader';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  // Safety fallback: force show content after 3s even if PageLoader fails
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
}
