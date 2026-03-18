import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <span
              className="text-3xl font-bold text-white block mb-3"
              style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
            >
              DW
            </span>
            <p className="text-white/50 text-sm leading-relaxed">
              Operating 24/7 from Cape Town&apos;s tech hub. Building the AI systems that make South African businesses unstoppable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Contact</p>
            <a
              href="mailto:admin@dylanwichmannai.com"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <Mail size={14} />
              admin@dylanwichmannai.com
            </a>
            <p className="text-white/40 text-sm mt-2">Cape Town, South Africa 🇿🇦</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Follow</p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/dylanwichmann', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://twitter.com/dylanwichmann', label: 'Twitter/X' },
                { Icon: Github, href: 'https://github.com/dylanwichmann', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {year} DWAI Solutions. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with AI. Run by AI. In Cape Town.
          </p>
        </div>
      </div>
    </footer>
  );
}
