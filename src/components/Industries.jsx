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

const industries = [
  {
    name: 'Automotive',
    desc: 'Transmission gears, differential components, axle shafts, and drivetrain parts for commercial vehicles and passenger cars.',
    img: '/images/machines/turning-machine-jobwork.jpg',
    parts: ['Transmission Gears', 'Differential Gears', 'Input / Output Shafts', 'Pinion Shafts'],
    color: '#FF8C00',
  },
  {
    name: 'Agricultural Equipment',
    desc: 'Tractor gearbox gears, PTO shafts, combine harvester drivetrain components — engineered for field reliability.',
    img: '/images/machines/cnc-turning-heavy.jpg',
    parts: ['Tractor Gear Sets', 'PTO Shafts', 'Harvester Drives', 'Bevel Gears'],
    color: '#14B8A6',
  },
  {
    name: 'Industrial Gearboxes',
    desc: 'Helical, spur, and worm gear sets for speed reducers, gearbox assemblies used in conveyors, pumps, and industrial drives.',
    img: '/images/machines/cnc-precision-grinding.jpg',
    parts: ['Helical Gear Sets', 'Worm Gears', 'Shaft Assemblies', 'Output Flanges'],
    color: '#8B5CF6',
  },
  {
    name: 'Heavy Engineering',
    desc: 'Large-module gears for mining equipment, earth movers, cranes, and material handling machinery requiring heavy-duty precision.',
    img: '/images/machines/od-bore-grinding-2.jpg',
    parts: ['Large Module Gears', 'Slew Ring Components', 'Drive Shafts', 'Crown Wheels'],
    color: '#FF8C00',
  },
  {
    name: 'Defence & Aerospace',
    desc: 'High-reliability gears and precision components for defence vehicles, actuator systems, and mission-critical power transmission.',
    img: '/images/machines/cylindrical-grinding-machine.jpg',
    parts: ['Actuator Gears', 'Turret Drive Gears', 'High-Reliability Shafts', 'Splined Components'],
    color: '#14B8A6',
  },
  {
    name: 'General Engineering',
    desc: 'Precision machined components for pumps, compressors, machine tools, and material handling equipment across all sectors.',
    img: '/images/machines/cnc-lathe-machine-bay.jpg',
    parts: ['Pump Shafts', 'Compressor Parts', 'Bearing Housings', 'Precision Bushings'],
    color: '#8B5CF6',
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-pad relative overflow-hidden"
      style={{ background: '#06080D' }}
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] opacity-40 pointer-events-none"/>

      <div className="container-xl">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="spark-line"/>
            Industries We Serve
            <span className="spark-line" style={{ background: 'linear-gradient(270deg, #FF8C00, transparent)' }}/>
          </div>
          <h2 className="section-title mb-5">
            Powering Every Sector<br/>
            <span className="text-spark">That Demands Precision.</span>
          </h2>
          <p className="section-sub mx-auto">
            From tractor fields to automotive factories — our machined components work where
            performance and reliability are non-negotiable.
          </p>
        </Reveal>

        {/* Industry grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={Math.min(i * 0.08, 0.3)}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ height: 320, border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,8,13,0.95) 40%, rgba(6,8,13,0.55) 100%)' }}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  {/* Color bar */}
                  <div className="w-8 h-0.5 mb-3 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: ind.color }}/>

                  <h3 className="font-heading font-bold text-steel-100 text-lg mb-2">{ind.name}</h3>
                  <p className="text-steel-400 text-xs leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {ind.desc}
                  </p>

                  {/* Parts tags */}
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {ind.parts.map((part) => (
                      <span key={part}
                        className="text-[10px] font-heading px-2.5 py-1 rounded-lg"
                        style={{
                          background: `${ind.color}15`,
                          color: ind.color,
                          border: `1px solid ${ind.color}25`,
                        }}
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Wide CTA strip */}
        <Reveal delay={0.3} className="mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/images/machines/digital-cnc-manufacturing.jpg"
                alt="Helixturn manufacturing"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 gradient-mesh"/>
            </div>
            <div
              className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ border: '1px solid rgba(255,140,0,0.15)' }}
            >
              <div className="text-center md:text-left">
                <h3 className="font-heading font-bold text-steel-100 text-2xl mb-2">
                  Your Industry, Our Precision.
                </h3>
                <p className="text-steel-500 text-sm max-w-lg">
                  Whether you supply the blanks or need us to source the material — we handle
                  full CNC machining with inspection and traceability. Let's talk.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#contact');
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
                  }}
                  className="btn-spark"
                  id="industries-cta-btn"
                >
                  Discuss Your Requirement
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="divider mt-20 container-xl"/>
    </section>
  );
}
