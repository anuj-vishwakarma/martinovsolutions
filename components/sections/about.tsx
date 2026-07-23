'use client';

import { motion } from 'framer-motion';
import { Factory, Wrench, Users, MapPin } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const highlights = [
  { icon: <Factory className="h-5 w-5" />, label: 'Sheet Metal Fabrication', desc: 'Full range of HVAC applications in the company\'s own shop' },
  { icon: <Wrench className="h-5 w-5" />, label: 'Duct Systems', desc: 'In-house fabrication ensures a higher level of quality and faster installation' },
  { icon: <Users className="h-5 w-5" />, label: 'Installation, Repair & Maintenance', desc: 'In Cuyahoga Falls, OH and the surrounding areas' },
  { icon: <MapPin className="h-5 w-5" />, label: '100 Cochran Rd', desc: 'Cuyahoga Falls, OH 44223' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--ink-800)/0.4),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-800/40 to-ink-950">
              <div className="absolute inset-0 blueprint-grid opacity-30" />

              {/* Stylized factory illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="h-full w-full opacity-40">
                  {/* Factory structure */}
                  <rect x="80" y="120" width="240" height="140" fill="none" stroke="hsl(var(--accent-electric) / 0.4)" strokeWidth="1" />
                  <rect x="80" y="80" width="60" height="40" fill="none" stroke="hsl(var(--accent-cyan) / 0.3)" strokeWidth="1" />
                  <rect x="260" y="60" width="60" height="60" fill="none" stroke="hsl(var(--accent-electric) / 0.3)" strokeWidth="1" />
                  {/* Roof lines */}
                  <line x1="80" y1="120" x2="320" y2="120" stroke="hsl(var(--accent-electric) / 0.5)" strokeWidth="1" />
                  {/* Ductwork */}
                  <path d="M 100 200 L 100 160 L 160 160 L 160 200" fill="none" stroke="hsl(var(--accent-cyan) / 0.4)" strokeWidth="1" strokeDasharray="4 2" />
                  <path d="M 220 200 L 220 140 L 280 140 L 280 200" fill="none" stroke="hsl(var(--accent-cyan) / 0.4)" strokeWidth="1" strokeDasharray="4 2" />
                  {/* Smoke / airflow */}
                  <motion.circle
                    cx="290"
                    cy="50"
                    r="8"
                    fill="none"
                    stroke="hsl(var(--accent-electric) / 0.3)"
                    strokeWidth="0.5"
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="300"
                    cy="40"
                    r="6"
                    fill="none"
                    stroke="hsl(var(--accent-cyan) / 0.3)"
                    strokeWidth="0.5"
                    animate={{ y: [0, -15, 0], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                  {/* Dimension marks */}
                  <text x="200" y="280" fill="hsl(var(--ink-500))" fontSize="8" fontFamily="monospace" textAnchor="middle">100 COCHRAN RD</text>
                </svg>
              </div>

              {/* Floating glass card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 left-6 rounded-xl border border-ink-700/60 bg-ink-900/80 px-5 py-3 backdrop-blur-md"
              >
                <p className="font-mono text-[10px] text-ink-500">FACILITY</p>
                <p className="font-display text-lg font-bold text-ink-50">100 Cochran Rd</p>
                <p className="text-xs text-ink-400">Cuyahoga Falls, OH</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent-electric))]"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold leading-tight text-gradient-steel sm:text-5xl"
            >
              Master Craftsmen.
              <br />
              <span className="text-gradient-electric">In-House Fabrication.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 max-w-md text-base leading-relaxed text-ink-400"
            >
              Martinov Home Solutions provides installation, repair, and maintenance
              in Cuyahoga Falls, OH and the surrounding areas. Master craftsmen
              build a full range of HVAC applications in the company's own shop.
              In-house fabrication ensures a higher level of quality and faster
              installation.
            </motion.p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-ink-800 bg-ink-900/40 p-4 transition hover:border-ink-700"
                >
                  <div className="mt-0.5 text-[hsl(var(--accent-electric))]">{h.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-ink-100">{h.label}</p>
                    <p className="text-xs text-ink-500">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={buildWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--accent-electric))] transition hover:text-[hsl(var(--accent-cyan))]"
            >
              Connect with our team
              <span aria-hidden>→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
