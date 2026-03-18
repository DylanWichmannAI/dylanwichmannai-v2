import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F8F6] border-t border-[#E5E7EB] py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <span
              className="text-3xl font-bold text-[#0A0A0A] block mb-3"
              style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
            >
              DW
            </span>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Operating 24/7 from Cape Town&apos;s tech hub. Building the AI systems that make South African businesses unstoppable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-4">Contact</p>
            <a
              href="mailto:admin@dylanwichmannai.com"
              className="flex items-center gap-2 text-[#6B7280] hover:text-[#0A0A0A] transition-colors text-sm"
            >
              <Mail size={14} />
              admin@dylanwichmannai.com
            </a>
            <p className="text-[#9CA3AF] text-sm mt-2">Cape Town, South Africa 🇿🇦</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-4">Follow</p>
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
                  className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © {year} DWAI Solutions. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-xs">
            Built with AI. Run by AI. In Cape Town.
          </p>
        </div>
      </div>
    </footer>
  );
}
