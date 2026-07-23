'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, Wrench, FileBadge } from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck className="h-6 w-6" />, label: 'License #46724', sub: 'State Certified' },
  { icon: <Award className="h-6 w-6" />, label: 'Master Craftsmen', sub: 'In-house Fabrication' },
  { icon: <Factory className="h-6 w-6" />, label: 'Sheet Metal Shop', sub: 'Full Range HVAC Applications' },
  { icon: <FileBadge className="h-6 w-6" />, label: 'Manufacturer Partners', sub: 'Top Product Lines' },
  { icon: <Wrench className="h-6 w-6" />, label: 'Emergency Services', sub: 'Available 7 Days' },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-ink-800/60 bg-ink-950 py-12">
      <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-ink-500"
        >
          Trusted · Certified · Engineered
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-ink-900/60 text-[hsl(var(--accent-electric))] transition group-hover:border-[hsl(var(--accent-electric)/0.4)] group-hover:glow-electric">
                {item.icon}
              </div>
              <div>
                <div className="font-display text-sm font-bold text-ink-100">{item.label}</div>
                <div className="text-xs text-ink-500">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
