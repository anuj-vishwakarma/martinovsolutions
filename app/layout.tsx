import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://martinovhomesolutions.com'),
  title: 'Martinov Home Solutions — Precision HVAC Engineering',
  description:
    'Master craftsmen building precision HVAC, duct systems, and sheet metal fabrication in Cuyahoga Falls, OH. Installation, repair & maintenance for Akron and surrounding areas.',
  openGraph: {
    title: 'Martinov Home Solutions — Precision HVAC Engineering',
    description:
      'Precision HVAC solutions built to perform. Sheet metal fabrication, duct systems, installation, repair & maintenance in Cuyahoga Falls, OH.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-ink-950 text-ink-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
