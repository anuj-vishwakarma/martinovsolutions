'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { buildWhatsAppUrl, buildTelUrl } from '@/lib/whatsapp';

const guides = [
  { label: 'New System', intent: 'new-system' as const },
  { label: 'Repair', intent: 'repair' as const },
  { label: 'Replace', intent: 'replace' as const },
  { label: 'Energy Bill Concerns', intent: 'energy-bill' as const },
  { label: 'Healthier Home', intent: 'healthier-home' as const },
  { label: 'Maintenance', intent: 'maintenance' as const },
  { label: 'Product Knowledge', intent: 'product-knowledge' as const },
];

const stats = [
  { value: '46724', label: 'License #', icon: <ShieldCheck className="h-4 w-4" /> },
  { value: '26', label: 'Service Areas', icon: <Wrench className="h-4 w-4" /> },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const unitX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const unitY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouse}
      className="grain relative min-h-[100svh] w-full overflow-hidden bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--ink-800)/0.6),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(var(--accent-electric)/0.08),transparent_50%)]" />

        {/* Blueprint grid */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 blueprint-grid opacity-40"
        />

        {/* Animated scan line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent-electric)/0.4)] to-transparent animate-scan" />

        {/* Floating CAD measurement marks */}
        <div className="absolute left-[8%] top-[30%] hidden font-mono text-[10px] text-ink-600 xl:block">
          <div className="flex items-center gap-1">
            <span className="h-px w-12 bg-ink-700" />
            <span>2400mm</span>
          </div>
        </div>
        <div className="absolute right-[12%] top-[60%] hidden font-mono text-[10px] text-ink-600 xl:block">
          <div className="flex flex-col items-center gap-1">
            <span>Ø 450</span>
            <span className="h-12 w-px bg-ink-700" />
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-24 pb-16"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 py-1.5 text-xs text-ink-300 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent-electric))] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--accent-electric))]" />
              </span>
              Master craftsmen · In-house sheet metal fabrication
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
              {['Precision', 'HVAC', 'Solutions'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-4 inline-block text-gradient-steel"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-2 block text-2xl font-medium text-ink-400 sm:text-3xl lg:text-4xl"
              >
                Built to Perform.
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              Installation, repair & maintenance in Cuyahoga Falls, OH and the
              surrounding areas. Master craftsmen build a full range of
              HVAC applications in the company's own shop.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={buildWhatsAppUrl('new-system')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Instant Estimate
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 metal-sheen animate-shimmer" />
              </a>
              <a
                href={buildTelUrl()}
                className="group flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/40 px-7 py-3.5 text-sm font-medium text-ink-100 backdrop-blur-sm transition hover:border-ink-500 hover:bg-ink-800/60"
              >
                <Phone className="h-4 w-4 text-[hsl(var(--accent-electric))]" />
                234-255-2320
              </a>
            </motion.div>

            {/* Guides */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-500">
                Click Our Guides Below for Help
              </p>
              <div className="flex flex-wrap gap-2">
                {guides.map((g, i) => (
                  <motion.a
                    key={g.label}
                    href={buildWhatsAppUrl(g.intent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.05 }}
                    className="group flex items-center gap-1.5 rounded-full border border-ink-700/60 bg-ink-900/40 px-3.5 py-1.5 text-xs text-ink-300 transition hover:border-[hsl(var(--accent-electric)/0.4)] hover:bg-ink-800/60 hover:text-ink-50"
                  >
                    {g.label}
                    <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D HVAC unit */}
          {mounted && (
            <motion.div
              style={{ rotateY, rotateX, x: unitX, y: unitY }}
              className="perspective-1000 relative hidden preserve-3d lg:block"
            >
              <HvacUnit3D />
            </motion.div>
          )}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800/60"
        >
          {stats.map((s) => (
            <div key={s.label} className="group relative bg-ink-950/80 p-5 transition hover:bg-ink-900/80">
              <div className="mb-2 text-[hsl(var(--accent-electric))]">{s.icon}</div>
              <div className="font-display text-2xl font-bold text-ink-50">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-ink-400">{s.label}</div>
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--accent-electric))] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-ink-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-ink-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

/** CSS/SVG-based pseudo-3D HVAC unit with animated airflow */
function HvacUnit3D() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative aspect-square w-full max-w-md"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[hsl(var(--accent-electric)/0.1)] blur-3xl" />

      {/* Outer ring */}
      <div className="absolute inset-0 rounded-3xl border border-ink-700/50 bg-gradient-to-br from-ink-800/40 to-ink-900/60 backdrop-blur-sm" />

      {/* Rotating wireframe ring */}
      <div className="absolute inset-8 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(var(--accent-electric) / 0.2)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="hsl(var(--accent-cyan) / 0.15)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main unit body */}
      <div className="absolute inset-16 rounded-2xl border border-ink-600/40 bg-gradient-to-br from-ink-700/30 via-ink-800/40 to-ink-900/60">
        {/* Fan grille */}
        <div className="absolute inset-4 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative h-full w-full"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              {/* Outer ring */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="hsl(var(--ink-500) / 0.4)" strokeWidth="2" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="hsl(var(--ink-600) / 0.3)" strokeWidth="1" />
              {/* Fan blades */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <path
                  key={angle}
                  d="M 100 100 Q 120 80 140 100 Q 130 70 100 60 Q 85 80 100 100 Z"
                  fill="hsl(var(--ink-400) / 0.15)"
                  stroke="hsl(var(--accent-electric) / 0.3)"
                  strokeWidth="0.5"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}
              {/* Hub */}
              <circle cx="100" cy="100" r="12" fill="hsl(var(--ink-600) / 0.5)" stroke="hsl(var(--accent-electric) / 0.4)" strokeWidth="1" />
              <circle cx="100" cy="100" r="5" fill="hsl(var(--accent-electric) / 0.6)" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Airflow streams */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent-electric))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent-electric))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent-cyan))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M ${350 + i * 5} ${150 + i * 25} Q ${300} ${160 + i * 25} ${250} ${180 + i * 20}`}
            fill="none"
            stroke="url(#flow)"
            strokeWidth="1.5"
            strokeDasharray="100"
            style={{
              animation: `airflow ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>

      {/* Corner tech marks */}
      {[
        'top-0 left-0',
        'top-0 right-0',
        'bottom-0 left-0',
        'bottom-0 right-0',
      ].map((pos) => (
        <div key={pos} className={`absolute ${pos} h-8 w-8`}>
          <div className="absolute h-full w-px bg-ink-600/50" />
          <div className="absolute h-px w-full bg-ink-600/50" />
        </div>
      ))}

      {/* Floating spec label */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-4 top-1/4 rounded-lg border border-ink-700/60 bg-ink-900/80 px-3 py-2 text-[10px] backdrop-blur-sm"
      >
        <div className="font-mono text-ink-400">SPEC</div>
        <div className="font-display text-sm font-bold text-[hsl(var(--accent-electric))]">High-Eff.</div>
      </motion.div>
    </motion.div>
  );
}
