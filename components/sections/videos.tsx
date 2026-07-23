'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const videos = [
  { title: 'Sheet Metal Fabrication', desc: "Master craftsmen build a full range of HVAC applications in the company's own shop." },
  { title: 'Duct Systems', desc: 'In-house fabrication ensures a higher level of quality and faster installation.' },
  { title: 'Installation', desc: 'We provide installation in Cuyahoga Falls, OH and the surrounding areas.' },
];

export function Videos() {
  return (
    <section id="videos" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,hsl(var(--ink-800)/0.4),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
            >
              Videos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
            >
              See Our Craftsmanship
              <span className="text-gradient-electric"> in Action</span>
            </motion.h2>
          </div>
          <motion.a
            href={buildWhatsAppUrl('product-knowledge')}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2.5 text-sm text-ink-200 transition hover:border-[hsl(var(--accent-electric)/0.4)] hover:text-ink-50"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 transition duration-500 hover:border-[hsl(var(--accent-electric)/0.3)]"
            >
              {/* Video placeholder */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-ink-800 bg-gradient-to-br from-ink-800/40 to-ink-900/60">
                <div className="absolute inset-0 blueprint-grid-fine opacity-30" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 bg-ink-900/60 text-[hsl(var(--accent-electric))] backdrop-blur-sm transition group-hover:border-[hsl(var(--accent-electric)/0.5)] group-hover:glow-electric"
                >
                  <Play className="h-6 w-6 fill-current" />
                </motion.div>
                {/* Scan line on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent-electric))] to-transparent opacity-0 transition group-hover:opacity-100 group-hover:animate-scan" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-bold text-ink-50">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink-400">{v.desc}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
