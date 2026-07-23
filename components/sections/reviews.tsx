'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, Factory, Wrench, Clock, MapPin } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const trustSignals = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'License #46724',
    desc: 'Licensed HVAC professionals serving Cuyahoga Falls and surrounding areas.',
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: 'In-House Sheet Metal Shop',
    desc: "Master craftsmen build a full range of HVAC applications in the company's own shop.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Duct Systems',
    desc: 'In-house fabrication ensures a higher level of quality and faster installation.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Emergency Services Available',
    desc: 'Mon - Fri: 7:00am - 5:00pm · Sat: 8:00am - 12:00pm · Emergency services available.',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: '26 Service Areas',
    desc: 'Akron, Aurora, Bath, Brecksville, Brunswick, Canton, Cuyahoga Falls, Hudson, Kent, Medina, Stow, Twinsburg, Wadsworth and more.',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Financing with Approved Credit',
    desc: 'Cash, Check, Financing with approved credit, and Credit Cards accepted.',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(var(--accent-electric)/0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
          >
            Why Choose Martinov
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
          >
            Trusted by Homeowners
            <br />
            <span className="text-gradient-electric">Across Northeast Ohio</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition hover:border-ink-700 hover:bg-ink-900/60"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900 text-[hsl(var(--accent-electric))] transition group-hover:scale-110 group-hover:border-[hsl(var(--accent-electric)/0.4)]">
                {item.icon}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-ink-50">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-400">{item.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={buildWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 text-sm text-ink-200 transition hover:border-[hsl(var(--accent-electric)/0.4)] hover:text-ink-50"
          >
            Connect with us on WhatsApp
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
