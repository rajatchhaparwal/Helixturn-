import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* Animated gear SVG accent */
function GearIcon({ size = 160, className = '', speed = 'animate-gear-spin', opacity = 0.06 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${speed}`}
      style={{ opacity, width: size, height: size }}
    >
      <path
        d="M50 5 L53 20 L62 12 L60 27 L74 22 L68 35 L83 35 L74 44 L87 50 L74 56 L83 65 L68 65 L74 78 L60 73 L62 88 L53 80 L50 95 L47 80 L38 88 L40 73 L26 78 L32 65 L17 65 L26 56 L13 50 L26 44 L17 35 L32 35 L26 22 L40 27 L38 12 L47 20 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

/* Stat counter item */
function StatItem({ value, suffix, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center sm:text-left"
    >
      <div className="flex items-end gap-0.5">
        <span className="font-heading font-bold text-3xl md:text-4xl"
          style={{ color: '#FF8C00' }}>
          {value}
        </span>
        <span className="font-heading font-bold text-2xl text-spark-400">{suffix}</span>
      </div>
      <div className="text-xs text-steel-500 font-heading tracking-wider uppercase mt-1">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opac = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  /* Animated headline words */
  const words = ['Turning.', 'Milling.', 'Grinding.', 'Hobbing.', 'Broaching.'];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#06080D' }}
    >
      {/* ── Parallax background image ── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="/images/hero-spindle-machining.jpg"
          alt="CNC precision machining in action"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(6,8,13,0.92) 0%, rgba(6,8,13,0.65) 55%, rgba(6,8,13,0.3) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-48"
          style={{ background: 'linear-gradient(to top, #06080D, transparent)' }} />
      </motion.div>

      {/* ── Gradient mesh glow ── */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] opacity-60 pointer-events-none" />

      {/* ── Decorative gears ── */}
      <div className="absolute top-16 right-8 text-spark-500 pointer-events-none hidden lg:block">
        <GearIcon size={220} speed="animate-gear-spin-slow" opacity={0.05} />
      </div>
      <div className="absolute -bottom-8 right-48 text-flux-500 pointer-events-none hidden xl:block">
        <GearIcon size={140} speed="animate-gear-spin-rev" opacity={0.04} />
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 container-xl flex-1 flex items-center pt-28 pb-24"
        style={{ y: textY, opacity: opac }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="spark-line" />
            <span className="eyebrow text-[11px] tracking-[0.2em]">ADVANCED CNC MACHINING &amp; PRECISION ENGINEERING</span>
            <span className="w-2 h-2 rounded-full bg-spark-500 animate-pulse" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            <span className="text-steel-100">CNC Job Work — </span>
            <br />
            {/* Animated cycling word */}
            <span className="inline-block overflow-hidden" style={{ minWidth: '12rem' }}>
              <motion.span
                key={wordIdx}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-block"
                style={{
                  background: 'linear-gradient(90deg, #FF8C00, #FFD580)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {words[wordIdx]}
              </motion.span>
            </span>
            <br />
            <span className="text-steel-100">Machined to Perfection.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-steel-400 max-w-2xl leading-relaxed mb-10"
          >
            From raw blanks to finished precision components —{' '}
            <span className="text-steel-200 font-medium">turning, milling, hobbing, broaching,
              OD/bore grinding, hard-part turning, gear grinding</span> and full
            traceability marking. All under one roof in HelixTurn Engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <button
              id="hero-explore-btn"
              onClick={() => scrollTo('#services')}
              className="btn-spark"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Our Capabilities
            </button>
            <button
              id="hero-quote-btn"
              onClick={() => scrollTo('#contact')}
              className="btn-ghost"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Request a Quote
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 md:gap-14 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <StatItem value="15+" suffix="" label="Years Experience" delay={0} />
            <StatItem value="2000+" suffix="" label="Components / Day" delay={0.1} />
            <StatItem value="99.8" suffix="%" label="On-Time Delivery" delay={0.2} />
            <StatItem value="100" suffix="%" label="Traceability" delay={0.3} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-heading text-steel-600 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-steel-700 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full"
            style={{ background: '#FF8C00' }}
          />
        </div>
      </motion.div>

      {/* ── Ticker bar at bottom ── */}
      <div className="absolute bottom-0 inset-x-0 z-10 overflow-hidden"
        style={{ background: 'rgba(255,140,0,0.07)', borderTop: '1px solid rgba(255,140,0,0.15)' }}
      >
        <div className="ticker-wrap py-2.5">
          <div className="ticker-inner">
            {[...Array(3)].map((_, r) => (
              <div key={r} className="flex items-center gap-8 mr-8">
                {[
                  'Blank Turning', 'Milling', 'Broaching', 'Facing', 'Drilling',
                  'Hobbing', 'OD Grinding', 'Bore Grinding', 'Hard Part Turning',
                  'Gear Grinding', 'Traceability Marking', 'Special Packaging',
                ].map((s) => (
                  <span key={s} className="flex items-center gap-3 text-xs font-heading text-spark-400 tracking-widest uppercase whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-spark-500 flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
