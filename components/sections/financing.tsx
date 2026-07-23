'use client';

import { motion } from 'framer-motion';
import { CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const paymentMethods = ['Cash', 'Check', 'Financing with approved credit', 'Credit Cards'];

export function Financing() {
  return (
    <section id="financing" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 blueprint-grid-fine opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(var(--accent-electric)/0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
            >
              Financing & Payment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl lg:text-6xl"
            >
              Invest in Comfort
              <br />
              <span className="text-gradient-electric">Without the Upfront Cost</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 max-w-md text-base leading-relaxed text-ink-400"
            >
              We offer financing with approved credit so you can get the precision
              HVAC system your home deserves — with payment options that fit your budget.
            </motion.p>

            <motion.a
              href={buildWhatsAppUrl('financing')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Financing Options
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 metal-sheen animate-shimmer" />
            </motion.a>
          </div>

          {/* Right: Payment card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/50 p-8 backdrop-blur-sm"
          >
            <div className="absolute right-0 top-0 h-48 w-48 opacity-10">
              <CreditCard className="h-full w-full text-[hsl(var(--accent-electric))]" strokeWidth={0.5} />
            </div>

            <h3 className="mb-2 font-display text-sm uppercase tracking-wider text-ink-400">Payment Accepted</h3>
            <div className="space-y-3">
              {paymentMethods.map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-800/40 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-electric))]" />
                  <span className="text-sm text-ink-200">{m}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-ink-800 pt-4">
              <p className="text-xs uppercase tracking-wider text-ink-500">Hours</p>
              <div className="mt-2 space-y-1 text-sm text-ink-300">
                <p>Mon - Fri: 7:00am - 5:00pm</p>
                <p>Sat: 8:00am - 12:00pm</p>
                <p className="text-[hsl(var(--accent-electric))]">Emergency Services Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
