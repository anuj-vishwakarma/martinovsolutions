'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { About } from '@/components/sections/about';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { Reviews } from '@/components/sections/reviews';
import { Financing } from '@/components/sections/financing';
import { ContactFooter } from '@/components/sections/contact-footer';
import { ChatWidget } from '@/components/chat-widget';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Process />
      <Services />
      <Products />
      <Reviews />
      <Financing />
      <ContactFooter />
      <ChatWidget />
    </main>
  );
}
