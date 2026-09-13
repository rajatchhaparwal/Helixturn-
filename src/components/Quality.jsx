import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const processSteps = [
  {
    step: '01',
    title: 'Incoming Inspection',
    desc: 'Material verification, hardness testing, and dimensional checks on all incoming blanks and raw stock. Non-conforming material is quarantined immediately.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'CNC Machining',
    desc: 'Precision turning, milling, hobbing, broaching per the approved operation sheet. In-process gauging at every critical station for real-time accuracy control.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.499-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Heat Treatment',
    desc: 'Case hardening, through hardening, and nitriding co-ordinated with approved external heat treatment partners. Heat chart and hardness report provided for every batch.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Precision Grinding',
    desc: 'OD grinding, bore grinding, and gear grinding on CNC machines after heat treatment. Final dimensions verified to drawing with CMM measurement on 100% of batches.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5"/>
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Final Inspection & CMM',
    desc: 'Full 3D CMM inspection of dimensions, gear profile accuracy (DIN class), surface roughness, and concentricity. Inspection report generated and attached to batch.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    step: '06',
    title: 'Traceability & Dispatch',
    desc: 'Dot-peen or laser traceability marking, VCI protective packaging, inspection certificate, and material heat number records dispatched with every batch.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
      </svg>
    ),
  },
];

const metrics = [
  { label: 'Gear Profile Accuracy', value: 'DIN 5 Class' },
  { label: 'Surface Roughness (Grinding)', value: 'Ra ≤ 0.4μm' },
  { label: 'OD Roundness', value: '≤ 0.002mm' },
  { label: 'Bore Cylindricity', value: '≤ 0.003mm' },
  { label: 'Batch Inspection Rate', value: '100% CMM' },
  { label: 'Traceability Coverage', value: 'Full — Heat No. + Batch + Date' },
  { label: 'On-Time Delivery Rate', value: '99.8%' },
  { label: 'Customer Rejection Rate', value: '< 0.05%' },
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0D14 0%, #06080D 100%)' }}
    >
      <div className="orb-orange" style={{ width: 700, height: 700, bottom: '-200px', left: '-150px' }}/>

      <div className="container-xl">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="spark-line"/>
            Quality & Process
            <span className="spark-line" style={{ background: 'linear-gradient(270deg, #FF8C00, transparent)' }}/>
          </div>
          <h2 className="section-title mb-5">
            Precision is Not a<br/>
            <span className="text-spark">Department. It's Culture.</span>
          </h2>
          <p className="section-sub mx-auto">
            Every component that leaves Helixturn has been through a defined,
            documented process — with inspection checkpoints at every stage.
          </p>
        </Reveal>

        {/* Process steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <motion.div
                className="glass-hover rounded-2xl p-6 h-full relative overflow-hidden group"
                whileHover={{ y: -4 }}
              >
                {/* Step number watermark */}
                <div
                  className="absolute -right-3 -top-3 text-7xl font-heading font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(255,140,0,0.05)' }}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-spark-400"
                  style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}
                >
                  {step.icon}
                </div>

                {/* Connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[60px] -right-[10px] w-5 h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(255,140,0,0.4), transparent)' }}
                  />
                )}

                <div
                  className="text-[10px] font-mono mb-2"
                  style={{ color: '#FF8C00' }}
                >
                  Step {step.step}
                </div>
                <h3 className="font-heading font-semibold text-steel-100 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-steel-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Metrics + Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* QC Image */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden img-zoom"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <img
                src="/images/quality-inspection.jpg"
                alt="CMM quality inspection at Helixturn"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 img-overlay"/>
              {/* Scan line */}
              <div className="scan-line"/>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(255,140,0,0.15)' }}>
                      <svg className="w-4 h-4 text-spark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-steel-100 text-xs font-heading font-semibold">100% CMM Inspection</p>
                      <p className="text-steel-500 text-[11px]">Full dimensional report with every batch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Metrics table */}
          <Reveal delay={0.2}>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-steel-100 text-xl mb-5">
                Inspection & Accuracy Benchmarks
              </h3>
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <span className="text-steel-400 text-xs font-heading">{m.label}</span>
                  <span
                    className="font-heading font-bold text-xs px-3 py-1 rounded-lg"
                    style={{ color: '#FF8C00', background: 'rgba(255,140,0,0.08)' }}
                  >
                    {m.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Trust badge row */}
        <Reveal delay={0.3} className="mt-16">
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: 'rgba(255,140,0,0.04)', border: '1px solid rgba(255,140,0,0.12)' }}
          >
            <p className="text-steel-500 text-xs font-heading uppercase tracking-widest mb-6">
              Serving Clients In
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                '🚗 Automotive OEMs',
                '🌾 Agri Equipment',
                '⚙️ Industrial Gearboxes',
                '🏗️ Heavy Engineering',
                '🛡️ Defence Sector',
                '🔧 General Engineering',
              ].map((tag) => (
                <span key={tag}
                  className="px-5 py-2.5 rounded-xl text-sm font-heading text-steel-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="divider mt-20 container-xl"/>
    </section>
  );
}
