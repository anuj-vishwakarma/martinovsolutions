'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, CreditCard, Phone, AlertTriangle } from 'lucide-react';
import { COMPANY, buildWhatsAppUrl, buildTelUrl } from '@/lib/whatsapp';

export function ContactFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-950 pt-24">
      {/* Blueprint background */}
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--accent-electric)/0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900/80 to-ink-950 p-10 lg:p-16"
        >
          <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--accent-electric)/0.08)] blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-gradient-steel sm:text-4xl lg:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 max-w-lg text-base text-ink-400">
                Connect with Martinov Home Solutions on WhatsApp for an instant
                estimate, or call us directly. Our master craftsmen are ready to help.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl('new-system')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:scale-[1.03]"
              >
                <span className="relative z-10">Instant Estimate</span>
                <div className="absolute inset-0 metal-sheen animate-shimmer" />
              </a>
              <a
                href={buildTelUrl()}
                className="flex items-center justify-center gap-2 rounded-full border border-ink-700 px-7 py-3.5 text-sm font-medium text-ink-100 transition hover:border-ink-500 hover:bg-ink-800/60"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid gap-8 pb-16 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900">
                <span className="font-display text-lg font-bold text-gradient-electric">M</span>
              </div>
              <div className="leading-none">
                <p className="font-display text-base font-bold text-ink-50">MARTINOV</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-400">Home Solutions</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              We provide installation, repair & maintenance in Cuyahoga Falls, OH
              and the surrounding areas.
            </p>
            <p className="mt-4 text-xs text-ink-500">{COMPANY.license}</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-ink-400">
              <MapPin className="h-4 w-4 text-[hsl(var(--accent-electric))]" />
              Location
            </h4>
            <p className="text-sm leading-relaxed text-ink-300">{COMPANY.address}</p>
            <p className="mt-2 text-sm text-ink-500">Cuyahoga Falls, OH 44223</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-ink-400">
              <Clock className="h-4 w-4 text-[hsl(var(--accent-electric))]" />
              Hours
            </h4>
            <div className="space-y-1 text-sm text-ink-300">
              <p>{COMPANY.hoursWeekday}</p>
              <p>{COMPANY.hoursSaturday}</p>
              <p className="flex items-center gap-1.5 pt-1 text-[hsl(var(--accent-electric))]">
                <AlertTriangle className="h-3.5 w-3.5" />
                {COMPANY.emergency}
              </p>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-ink-400">
              <CreditCard className="h-4 w-4 text-[hsl(var(--accent-electric))]" />
              Payment Accepted
            </h4>
            <div className="space-y-1 text-sm text-ink-300">
              <p>Cash</p>
              <p>Check</p>
              <p>Financing with approved credit</p>
              <p>Credit Cards</p>
            </div>
          </div>
        </div>

        {/* Service areas */}
        <div className="border-t border-ink-800 py-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ink-500">
            Installation, Repair & Maintenance Service Areas
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {COMPANY.serviceAreas.map((area, i) => (
              <span key={area} className="text-sm text-ink-400">
                {area}
                {i < COMPANY.serviceAreas.length - 1 && (
                  <span className="ml-4 text-ink-700">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ink-500 md:flex-row">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Copyright © 2026 Select On Site, LLC</span>
              <span className="hidden md:inline">·</span>
              <span>Site design and code are property of Select On Site, LLC</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="#" className="transition hover:text-ink-300">Privacy Policy</a>
              <a href="#" className="transition hover:text-ink-300">Site Map</a>
              <a href="#" className="transition hover:text-ink-300">Glossary</a>
              <a href="#careers" className="transition hover:text-ink-300">Careers</a>
              <a href="#filter-shop" className="transition hover:text-ink-300">Filter Shop</a>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-ink-600 md:text-left">
            Product logos and images are the property of their respective manufacturers
          </p>
        </div>
      </div>
    </footer>
  );
}
