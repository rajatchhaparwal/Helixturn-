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
  { value: '15+',   label: 'Years in Machining', icon: '🏭' },
  { value: '50+',   label: 'CNC Machines',        icon: '⚙️' },
  { value: '200+',  label: 'Parts / Day',          icon: '📦' },
  { value: '99.8%', label: 'Quality Pass Rate',    icon: '✅' },
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
      <div className="orb-orange" style={{ width: 600, height: 600, top: '-200px', left: '-200px' }}/>

      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <Reveal>
              <div className="eyebrow mb-4">
                <span className="spark-line"/>
                About Helixturn
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="section-title mb-6">
                Precision That Powers <br/>
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

            {/* Material tags */}
            <Reveal delay={0.4}>
              <div className="mb-8">
                <p className="text-xs text-steel-600 font-heading uppercase tracking-widest mb-3">
                  Materials We Machine
                </p>
                <div className="flex flex-wrap gap-2">
                  {['EN8', 'EN19', 'EN24', 'EN36', '20MnCr5', 'SAE 8620', '16MnCr5', 'EN353', '42CrMo4', 'SCM420'].map((m) => (
                    <span key={m}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-flux-400"
                      style={{ background: 'rgba(20,184,166,0.07)', border: '1px solid rgba(20,184,166,0.15)' }}
                    >
                      {m}
                    </span>
                  ))}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
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
                <div className="absolute inset-0 img-overlay"/>
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
                  <StatCard {...s}/>
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

      <div className="divider mt-20 container-xl"/>
    </section>
  );
}
