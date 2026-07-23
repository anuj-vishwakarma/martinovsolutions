'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { COMPANY, buildWhatsAppUrl, buildTelUrl } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Videos', href: '#videos' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Financing', href: '#financing' },
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Filter Shop', href: '#filter-shop' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="relative z-50 hidden border-b border-ink-800/60 bg-ink-950/80 backdrop-blur-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-ink-400">
          <div className="flex items-center gap-6">
            <span className="font-display tracking-wider text-ink-300">{COMPANY.license}</span>
            <a href={buildTelUrl()} className="flex items-center gap-2 transition hover:text-ink-100">
              <Phone className="h-3 w-3" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ink-500">Instant Estimate</span>
            <span className="h-3 w-px bg-ink-700" />
            <a href={buildWhatsAppUrl('general')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[hsl(var(--accent-electric))] transition hover:text-[hsl(var(--accent-cyan))]">
              <MessageCircle className="h-3 w-3" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-800/60 bg-ink-950/85 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900">
              <span className="font-display text-lg font-bold text-gradient-electric">M</span>
              <div className="absolute inset-0 metal-sheen animate-shimmer opacity-30" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight text-ink-50">MARTINOV</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-400">Home Solutions</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-3 py-2 text-sm text-ink-300 transition hover:text-ink-50"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={buildTelUrl()}
              className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 text-sm text-ink-200 transition hover:border-ink-600 hover:text-ink-50"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={buildWhatsAppUrl('new-system')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] px-5 py-2 text-sm font-semibold text-ink-950 transition hover:scale-[1.03]"
            >
              <span className="relative z-10">Instant Estimate</span>
              <div className="absolute inset-0 metal-sheen animate-shimmer" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-ink-300 transition hover:bg-ink-800 hover:text-ink-50"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-3 flex gap-3">
                  <a href={buildTelUrl()} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-700 px-4 py-3 text-sm text-ink-200">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a href={buildWhatsAppUrl('new-system')} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] px-4 py-3 text-sm font-semibold text-ink-950">
                    <MessageCircle className="h-4 w-4" /> Estimate
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
