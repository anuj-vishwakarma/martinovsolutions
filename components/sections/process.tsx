'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ChevronRight, Wind, Gauge, Cog, Boxes, Layers } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const steps = [
  {
    n: '01',
    icon: <Layers className="h-6 w-6" />,
    title: 'Sheet Metal Fabrication',
    desc: 'Master craftsmen build a full range of HVAC applications in the company\'s own shop — ensuring a higher level of quality and faster installation.',
  },
  {
    n: '02',
    icon: <Wind className="h-6 w-6" />,
    title: 'Duct Systems',
    desc: 'In-house fabrication means precise, custom-fit ductwork engineered for optimal airflow and efficiency in your home.',
  },
  {
    n: '03',
    icon: <Gauge className="h-6 w-6" />,
    title: 'Precision Measurement',
    desc: 'Every component is measured and fabricated to exact specifications — no generic off-the-shelf parts, just engineered solutions.',
  },
  {
    n: '04',
    icon: <Cog className="h-6 w-6" />,
    title: 'Expert Installation',
    desc: 'Our certified technicians install with craftsmanship honed across 26+ service areas in Northeast Ohio.',
  },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      {/* Blueprint background */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(var(--accent-electric)/0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
          >
            The Manufacturing Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
          >
            From Sheet Metal to
            <span className="text-gradient-electric"> Precision Installation</span>
          </motion.h2>
        </div>

        {/* Interactive timeline */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Steps list */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className={`group flex w-full items-center gap-5 rounded-2xl border p-5 text-left transition duration-300 ${
                  active === i
                    ? 'border-[hsl(var(--accent-electric)/0.3)] bg-ink-900/70'
                    : 'border-ink-800 bg-ink-900/30 hover:border-ink-700 hover:bg-ink-900/50'
                }`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition ${
                  active === i
                    ? 'border-[hsl(var(--accent-electric)/0.4)] bg-gradient-to-br from-[hsl(var(--accent-electric)/0.2)] to-transparent text-[hsl(var(--accent-electric))]'
                    : 'border-ink-700 bg-ink-800/50 text-ink-400'
                }`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-500">{step.n}</span>
                    <h3 className={`font-display text-lg font-bold transition ${active === i ? 'text-ink-50' : 'text-ink-300'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 shrink-0 transition ${active === i ? 'rotate-90 text-[hsl(var(--accent-electric))]' : 'text-ink-600'}`} />
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/40 p-8 lg:p-10">
            {/* Animated wireframe */}
            <div className="absolute right-0 top-0 h-64 w-64 opacity-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--accent-electric) / 0.3)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--accent-cyan) / 0.2)" strokeWidth="0.5" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke="hsl(var(--accent-electric) / 0.2)" strokeWidth="0.5" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="hsl(var(--accent-electric) / 0.2)" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <span className="font-mono text-6xl font-bold text-ink-800">{steps[active].n}</span>
              <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl border border-ink-700 bg-ink-800/50 text-[hsl(var(--accent-electric))]">
                {steps[active].icon}
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-ink-50">
                {steps[active].title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
                {steps[active].desc}
              </p>

              <a
                href={buildWhatsAppUrl('product-knowledge')}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2.5 text-sm text-ink-200 transition hover:border-[hsl(var(--accent-electric)/0.4)] hover:text-ink-50"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Progress dots */}
            <div className="relative mt-10 flex gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-10 bg-[hsl(var(--accent-electric))]' : 'w-2 bg-ink-700 hover:bg-ink-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
