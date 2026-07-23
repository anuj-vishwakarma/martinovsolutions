'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Homeowner · Cuyahoga Falls',
    text: 'Martinov fabricated and installed custom ductwork in our home. The quality and attention to detail was unlike anything we\'d seen from other HVAC companies. Truly master craftsmen.',
    area: 'Cuyahoga Falls',
  },
  {
    name: 'Homeowner · Stow',
    text: 'Called for an emergency repair on a weekend and they responded quickly. Professional, knowledgeable, and fair pricing. We\'ve used them for maintenance ever since.',
    area: 'Stow',
  },
  {
    name: 'Homeowner · Hudson',
    text: 'The in-house sheet metal fabrication made all the difference. Our new system was installed faster and fits perfectly. Highly recommend Martinov Home Solutions.',
    area: 'Hudson',
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
            Customer Reviews
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

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative flex flex-col rounded-2xl border border-ink-800 bg-ink-900/40 p-8 transition hover:border-ink-700 hover:bg-ink-900/60"
            >
              <Quote className="mb-4 h-8 w-8 text-ink-700" />
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[hsl(var(--accent-electric))] text-[hsl(var(--accent-electric))]" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink-300">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ink-700 to-ink-800 font-display text-sm font-bold text-[hsl(var(--accent-electric))]">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink-100">{r.name}</div>
                  <div className="text-xs text-ink-500">{r.area}, OH</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
