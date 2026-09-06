import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="CNC Gear Grinding"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-40" />

      {/* Animated Gear Accent */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-gear-spin">
          <path
            d="M100 10 L108 40 L130 20 L125 50 L155 40 L140 65 L170 65 L148 82 L175 95 L148 100 L170 118 L140 115 L155 140 L125 130 L130 160 L108 140 L100 170 L92 140 L70 160 L75 130 L45 140 L60 115 L30 118 L52 100 L25 95 L52 82 L30 65 L60 65 L45 40 L75 50 L70 20 L92 40 Z"
            fill="currentColor"
            className="text-industrial-400"
          />
          <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="4" className="text-industrial-400" />
        </svg>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="section-label">
            <span className="w-8 h-px bg-industrial-500" />
            CNC turning &bull; Dewas, MP
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-steel-100 leading-[1.1] mb-6"
          >
            Precision Gear turning.
            <br />
            <span className="gradient-text">Engineered in India.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-steel-400 max-w-2xl leading-relaxed mb-10"
          >
            Tolerances down to <span className="text-steel-200 font-semibold">DIN 5 class</span>. 
            Materials from <span className="text-steel-200 font-semibold">20MnCr5 to SAE 8620</span>. 
            Turnaround in <span className="text-steel-200 font-semibold">24*7 working days</span>.
            Built for automotive, agriculture, and heavy engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, '#services')}
              className="btn-primary"
            >
              Explore Capabilities
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="btn-secondary"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-8 md:gap-12 border-t border-graphite-600/30 pt-8"
          >
            {[
              { value: 'DIN 5', label: 'Grinding Class' },
              { value: '±0.005mm', label: 'Tolerance' },
              { value: '7–14 Days', label: 'Turnaround' },
              { value: '100%', label: 'Inspected' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-2xl font-heading font-bold text-industrial-400">
                  {stat.value}
                </div>
                <div className="text-sm text-steel-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-graphite-950 to-transparent" />
    </section>
  );
}
