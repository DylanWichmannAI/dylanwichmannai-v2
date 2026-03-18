'use client';

import { useEffect, useRef, useState } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';

const NAV_LINKS = ['Work', 'Services', 'Process', 'Pricing'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
          >
            DW
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                className="text-white/60 hover:text-white transition-colors text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton
              href="mailto:admin@dylanwichmannai.com"
              className="px-5 py-2.5 bg-[#1A6BFF] text-white text-sm font-medium rounded-full hover:bg-[#0055E0] transition-colors"
            >
              Book a Call
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
            className="text-white text-5xl font-bold hover:text-[#1A6BFF] transition-colors"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              animationDelay: `${i * 0.08}s`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
            }}
          >
            {item}
          </a>
        ))}
        <a
          href="mailto:admin@dylanwichmannai.com"
          onClick={() => setMenuOpen(false)}
          className="text-white text-5xl font-bold hover:text-[#1A6BFF] transition-colors"
          style={{
            fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
            animationDelay: `${NAV_LINKS.length * 0.08}s`,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ease ${NAV_LINKS.length * 0.07}s, transform 0.4s ease ${NAV_LINKS.length * 0.07}s`,
          }}
        >
          Book a Call
        </a>
      </div>
    </>
  );
}
