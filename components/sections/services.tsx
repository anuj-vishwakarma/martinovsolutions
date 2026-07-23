'use client';

import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Layers, Factory, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const services = [
  {
    icon: <Wrench className="h-7 w-7" />,
    title: 'Installation',
    desc: 'We provide installation in Cuyahoga Falls, OH and the surrounding areas.',
    intent: 'new-system' as const,
    tag: 'New Systems',
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: 'Repair',
    desc: 'We provide repair service in Cuyahoga Falls, OH and the surrounding areas.',
    intent: 'repair' as const,
    tag: 'Service Calls',
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: 'Maintenance',
    desc: 'We provide maintenance in Cuyahoga Falls, OH and the surrounding areas.',
    intent: 'maintenance' as const,
    tag: 'Preventative',
  },
  {
    icon: <Factory className="h-7 w-7" />,
    title: 'Sheet Metal Fabrication',
    desc: 'Master craftsmen build a full range of HVAC applications in the company\'s own shop.',
    intent: 'product-knowledge' as const,
    tag: 'In-House Shop',
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--ink-800)/0.4),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
            >
              Services Built on
              <br />
              <span className="text-gradient-electric">Precision Engineering</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-sm leading-relaxed text-ink-400"
          >
            We provide installation, repair, and maintenance in Cuyahoga Falls, OH
            and the surrounding areas.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={buildWhatsAppUrl(s.intent)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition duration-500 hover:border-[hsl(var(--accent-electric)/0.3)] hover:bg-ink-900/70"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent-electric)/0.08),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Tag */}
              <span className="absolute right-4 top-4 rounded-full border border-ink-700 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-ink-400">
                {s.tag}
              </span>

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900 text-[hsl(var(--accent-electric))] transition duration-500 group-hover:scale-110 group-hover:border-[hsl(var(--accent-electric)/0.4)]">
                {s.icon}
              </div>

              <h3 className="relative mb-3 font-display text-xl font-bold text-ink-50">
                {s.title}
              </h3>
              <p className="relative mb-6 flex-1 text-sm leading-relaxed text-ink-400">
                {s.desc}
              </p>

              <div className="relative flex items-center gap-2 text-sm font-medium text-[hsl(var(--accent-electric))]">
                Connect on WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>

              {/* Bottom line */}
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
