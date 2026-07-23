'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Boxes } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const products = [
  {
    title: 'Furnaces',
    desc: 'High-efficiency heating systems engineered for Ohio winters. Built to deliver consistent, reliable warmth.',
    specs: ['High AFUE Ratings', 'Variable Speed', 'Quiet Operation'],
  },
  {
    title: 'Air Conditioners',
    desc: 'Precision-cooled comfort with energy-efficient condensing units designed for peak performance.',
    specs: ['SEER2 Rated', 'Two-Stage Cooling', 'Sound-Insulated'],
  },
  {
    title: 'Heat Pumps',
    desc: 'Year-round comfort from a single system — efficient heating in winter, cooling in summer.',
    specs: ['Dual Function', 'Inverter Tech', 'Ultra-Efficient'],
  },
  {
    title: 'Indoor Air Quality',
    desc: 'Healthier home solutions — advanced filtration, ventilation, and humidity control systems.',
    specs: ['HEPA Filtration', 'UV Treatment', 'Smart Sensors'],
  },
  {
    title: 'Duct Systems',
    desc: 'Custom-fabricated in our shop. Precision-engineered ductwork for optimal airflow and efficiency.',
    specs: ['In-House Fabrication', 'Custom Fit', 'Leak-Free'],
  },
  {
    title: 'Thermostats',
    desc: 'Smart control systems that put precision comfort at your fingertips — anytime, anywhere.',
    specs: ['Wi-Fi Connected', 'Learning AI', 'Zone Control'],
  },
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(var(--accent-cyan)/0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
            >
              Our Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
            >
              Engineered for
              <span className="text-gradient-electric"> Performance</span>
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
            Ask About a Product
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 transition duration-500 hover:border-[hsl(var(--accent-electric)/0.3)]"
            >
              {/* Visual top */}
              <div className="relative h-44 overflow-hidden border-b border-ink-800 bg-gradient-to-br from-ink-800/40 to-ink-900/60">
                <div className="absolute inset-0 blueprint-grid-fine opacity-30" />
                {/* Animated wireframe icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="text-ink-700 transition group-hover:text-[hsl(var(--accent-electric)/0.4)]"
                  >
                    <Boxes className="h-20 w-20" strokeWidth={0.5} />
                  </motion.div>
                </div>
                {/* Scan line on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent-electric))] to-transparent opacity-0 transition group-hover:opacity-100 group-hover:animate-scan" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-bold text-ink-50">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-ink-400">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.specs.map((spec) => (
                    <span key={spec} className="rounded-full border border-ink-700/60 bg-ink-800/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-ink-400">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
