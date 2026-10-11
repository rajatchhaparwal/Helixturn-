import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── inline ScrollReveal ─── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated stat card ─── */
function StatCard({ value, label, icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass stat-card p-6 text-center rounded-2xl"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div
        className="font-heading font-bold mb-1"
        style={{
          fontSize: '2rem',
          background: 'linear-gradient(135deg, #FF8C00, #FFD580)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </div>
      <div className="text-steel-500 text-xs font-heading tracking-wider uppercase">{label}</div>
    </motion.div>
  );
}

const stats = [
  { value: '15+', label: 'Years in Machining', icon: '🏭' },
  { value: '2000+', label: 'Parts / Day', icon: '📦' },
  { value: '99.8%', label: 'Quality Pass Rate', icon: '✅' },
];

const highlights = [
  { icon: '🎯', title: 'Job Work Specialists', desc: 'Material job work with customer-supplied blanks or full material supply from our end.' },
  { icon: '🔩', title: 'Machining Primary', desc: 'CNC turning, milling, hobbing, broaching, grinding — our core. Forging is available as secondary support.' },
  { icon: '📋', title: 'Full Traceability', desc: 'Every batch gets traceability marking, dimensional report, and special protective packaging.' },
  { icon: '🚀', title: '24/7 Operations', desc: 'Round-the-clock production to meet urgent delivery schedules without compromising on quality.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden" style={{ background: '#06080D' }}>
      {/* Background glow */}
      <div className="orb-orange" style={{ width: 600, height: 600, top: '-200px', left: '-200px' }} />

      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <Reveal>
              <div className="eyebrow mb-4">
                <span className="spark-line" />
                About Helixturn
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="section-title mb-6">
                Precision That Powers <br />
                <span className="text-spark">India's Industry.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="section-sub mb-6">
                Based in the industrial heart of{' '}
                <span className="text-steel-200 font-medium">Dewas, Madhya Pradesh</span>,
                Helixturn Engineering is a dedicated CNC machining job-work unit serving automotive,
                agricultural, and heavy engineering OEMs across India.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-steel-500 text-sm leading-relaxed mb-8">
                We specialise in the full machining lifecycle — from rough blank turning to final OD/bore
                grinding and gear grinding — with complete in-house traceability marking and
                special protective packaging before dispatch. Every component leaves our floor
                inspection-verified against your drawing.
              </p>
            </Reveal>

            {/* Material Categorized Cards */}
            <Reveal delay={0.4}>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-steel-500 font-heading uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-spark-500" />
                    Materials &amp; Engineering Grades
                  </p>
                  <span className="text-[10px] text-steel-500 font-mono">Job Work &amp; With-Material</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Alloy Steels Card */}
                  <div
                    className="p-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-spark-500/40"
                    style={{
                      background: 'rgba(255,107,43,0.03)',
                      border: '1px solid rgba(255,107,43,0.18)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-spark-400 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-spark-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Alloy Steels
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-spark-500/10 text-spark-300 border border-spark-500/20">
                        Heat-Treated
                      </span>
                    </div>
                    <p className="text-[11px] text-steel-400 mb-3 leading-relaxed">
                      High-tensile &amp; case-hardening steels for automotive gears, splined shafts, pinions, and high-wear components.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { code: '20MnCr5', note: 'Carburizing Gear Steel' },
                        { code: 'SAE 8620', note: 'High Core Toughness' },
                        { code: '16MnCr5', note: 'Automotive Transmission' },
                        { code: 'EN19 (4140)', note: 'High Tensile Axles' },
                        { code: 'EN24 (4340)', note: 'Heavy Duty Shafts' },
                        { code: 'EN353', note: 'Crown Wheel & Pinion' },
                        { code: '42CrMo4', note: 'Fatigue Resistant' },
                        { code: 'SCM420', note: 'Alloy Pinions' },
                      ].map((item) => (
                        <span
                          key={item.code}
                          title={item.note}
                          className="px-2 py-1 rounded-md text-[11px] font-mono text-spark-300 bg-spark-500/10 border border-spark-500/20 hover:border-spark-500/50 hover:bg-spark-500/20 transition-colors cursor-default"
                        >
                          {item.code}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Non-Alloy / Carbon Steels Card */}
                  <div
                    className="p-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-flux-500/40"
                    style={{
                      background: 'rgba(20,184,166,0.03)',
                      border: '1px solid rgba(20,184,166,0.18)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-flux-400 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-flux-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Non-Alloy &amp; Carbon
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-flux-500/10 text-flux-300 border border-flux-500/20">
                        High Machinability
                      </span>
                    </div>
                    <p className="text-[11px] text-steel-400 mb-3 leading-relaxed">
                      Medium carbon &amp; free-cutting steels for volume blank turning, stepped shafts, flanges, hubs, and cost-efficient blanks.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { code: 'EN8 (AISI 1045)', note: 'Turned Shafts & Pins' },
                        { code: 'EN9 (AISI 1055)', note: 'Surface Hardened' },
                        { code: 'EN1A / 11SMn30', note: 'Free-Cutting High Speed' },
                        { code: 'C45 / C50', note: 'Machine Blanks & Couplings' },
                        { code: 'Mild Steel (IS 2062)', note: 'Structural & Flanges' },
                        { code: '1018 / 1020', note: 'Turned Pins & Bushings' },
                      ].map((item) => (
                        <span
                          key={item.code}
                          title={item.note}
                          className="px-2 py-1 rounded-md text-[11px] font-mono text-flux-300 bg-flux-500/10 border border-flux-500/20 hover:border-flux-500/50 hover:bg-flux-500/20 transition-colors cursor-default"
                        >
                          {item.code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
                }}
                className="btn-spark"
                id="about-contact-btn"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Start a Conversation
              </button>
            </Reveal>
          </div>

          {/* ── Right: Image + stats ── */}
          <div>
            <Reveal variant="fade-right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden mb-6 img-zoom"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <img
                  src="/images/precision-gears-traceability.jpg"
                  alt="Precision machined gears with DIN traceability marking"
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 img-overlay" />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {['DIN 5 Accuracy', 'Laser Traceability', '100% Inspected'].map((b) => (
                    <span key={b} className="tag-pill text-[10px]">{b}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i}>
                  <StatCard {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Highlight cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.1 * i}>
              <div className="glass-hover p-6 rounded-2xl h-full">
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="font-heading font-semibold text-steel-100 text-sm mb-2">{h.title}</h3>
                <p className="text-steel-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="divider mt-20 container-xl" />
    </section>
  );
}
