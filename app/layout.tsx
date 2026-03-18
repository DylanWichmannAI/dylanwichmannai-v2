import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/ui/CustomCursor';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dylanwichmannai.com'),
  title: 'Dylan Wichmann — Cape Town AI Consultant | DWAI Solutions',
  description:
    "Cape Town's leading AI consultant. Deploy custom AI agent systems that automate 80% of your operations. Built on your hardware, under your control.",
  keywords: [
    'AI consultant',
    'Cape Town',
    'AI agents',
    'workflow automation',
    'OpenClaw',
    'SMB AI',
    'South Africa AI',
  ],
  openGraph: {
    title: "Dylan Wichmann — Cape Town's Leading AI Consultant",
    description:
      'Custom AI agent systems deployed on your Mac. Automate 80% of your operations.',
    url: 'https://dylanwichmannai.com',
    siteName: 'DWAI Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dylan Wichmann — Cape Town AI Consultant',
    description: 'Custom AI agent systems that automate your operations.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dylanwichmannai.com' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400&display=swap"
        />
      </head>
      <body className="bg-white text-[#0A0A0A] font-sans overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
