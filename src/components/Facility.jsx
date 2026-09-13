import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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

const machines = [
  {
    name: 'CNC Turning Centres',
    specs: 'Chuck: 250mm | Spindle: 4500 RPM | Max OD: 400mm',
    desc: 'Multi-axis CNC lathes for blank turning, facing, grooving, and hard part turning in one setup. High material removal rate with sub-micron repeatability.',
    image: '/images/machines/cnc-lathe-operation.jpg',
    tag: 'Turning',
    count: '12 Machines',
  },
  {
    name: 'CNC Gear Hobbing Machines',
    specs: 'Module: 0.5–6 | Max Dia: 300mm | DIN 8 pre-grind',
    desc: 'Automated gear hobbing for spur and helical gears, ready for post-heat-treatment precision grinding. High-speed HSS and coated carbide hobs.',
    image: '/images/machines/turning-center-dewas.jpg',
    tag: 'Gear',
    count: '6 Machines',
  },
  {
    name: 'CNC OD Cylindrical Grinders',
    specs: 'Max Length: 1000mm | Roundness: ≤0.002mm | Ra 0.4μm',
    desc: 'Precision OD grinding for shafts, pins, and gear blanks with in-process gauging for real-time accuracy control. Consistent finish across production batches.',
    image: '/images/machines/od-grinding-setup.jpg',
    tag: 'Grinding',
    count: '8 Machines',
  },
  {
    name: 'CNC Gear Grinding Machines',
    specs: 'DIN 5 Class | Module: 0.5–8 | Flank Ra ≤ 0.4μm',
    desc: 'Profile and generating gear grinding machines for post-HT finishing. Achieves DIN 5 class accuracy on spur and helical gears with CBN and vitrified wheels.',
    image: '/images/machines/cnc-precision-grinding.jpg',
    tag: 'Gear Grinding',
    count: '4 Machines',
  },
  {
    name: 'CNC Milling Centres (VMC)',
    specs: 'Table: 1000×500mm | Spindle: 12000 RPM | ATC: 24T',
    desc: 'Vertical machining centres for milling, drilling, tapping, counterboring, and complex 3D profile machining with automatic tool change.',
    image: '/images/machines/digital-cnc-manufacturing.jpg',
    tag: 'Milling',
    count: '8 Machines',
  },
  {
    name: 'Internal Bore Grinders',
    specs: 'Bore: 10–300mm | Cylindricity: ≤0.003mm | H6/H7 class',
    desc: 'CNC internal grinding for bores, sleeves, and gear bore holes. Achieves interference and press fit tolerances for assembled gear transmissions.',
    image: '/images/machines/od-bore-grinding-1.jpg',
    tag: 'ID Grinding',
    count: '6 Machines',
  },
  {
    name: 'Broaching Machines',
    specs: 'Force: up to 50T | Internal & external profiles',
    desc: 'Vertical and horizontal broaching for keyways, splines, internal hexagons, and custom profiles. High-production-rate with consistent dimensional accuracy.',
    image: '/images/machines/cnc-lathe-machine-bay.jpg',
    tag: 'Broaching',
    count: '4 Machines',
  },
  {
    name: 'Quality Lab & CMM',
    specs: 'Accuracy: 1.5μm | Volume: 700×700×500mm | Climate Controlled',
    desc: 'Coordinate measuring machine for 3D dimensional verification, gear profile measurement, and surface roughness testing. Every batch fully inspected.',
    image: '/images/quality-inspection.jpg',
    tag: 'Inspection',
    count: '2 CMMs',
  },
];

export default function Facility() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="facility"
      className="section-pad relative overflow-hidden"
      style={{ background: '#0A0D14' }}
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] opacity-50 pointer-events-none"/>

      <div className="container-xl">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="spark-line"/>
            Our Facility
            <span className="spark-line" style={{ background: 'linear-gradient(270deg, #FF8C00, transparent)' }}/>
          </div>
          <h2 className="section-title mb-5">
            Purpose-Built for<br/>
            <span className="text-spark">Precision at Scale</span>
          </h2>
          <p className="section-sub mx-auto">
            50+ CNC machines across dedicated bays — turning, hobbing, milling, grinding,
            and inspection — all under one climate-controlled roof in Dewas.
          </p>
        </Reveal>

        {/* Featured facility image */}
        <Reveal className="mb-10">
          <div className="relative rounded-2xl overflow-hidden img-zoom"
            style={{ height: 380, border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <img
              src="/images/facility-wide.jpg"
              alt="Helixturn precision machining facility in Dewas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 img-overlay"/>

            {/* Facility badges */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-3">
              {[
                { icon: '🏭', text: '30,000 sq.ft Floor Area' },
                { icon: '❄️', text: 'Climate-Controlled QC Lab' },
                { icon: '⚡', text: '24/7 Operations' },
              ].map((b) => (
                <div key={b.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading text-steel-100"
                  style={{ background: 'rgba(6,8,13,0.85)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
                >
                  <span>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            {/* Stats overlay bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6"
              style={{ background: 'linear-gradient(to top, rgba(6,8,13,0.95), transparent)' }}
            >
              <div className="flex flex-wrap gap-8">
                {[
                  { v: '50+', l: 'CNC Machines' },
                  { v: '12+', l: 'Machine Types' },
                  { v: '200+', l: 'Parts/Day Capacity' },
                  { v: '100%', l: 'Traceability' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-heading font-bold text-2xl" style={{ color: '#FF8C00' }}>{s.v}</div>
                    <div className="text-steel-500 text-xs font-heading tracking-wider uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Machine selector + detail panel */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: machine list */}
          <div className="lg:col-span-2 space-y-2">
            {machines.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.04}>
                <button
                  id={`facility-machine-${i}`}
                  onClick={() => setSelected(i)}
                  className="w-full text-left rounded-xl px-5 py-4 transition-all duration-300"
                  style={{
                    background: selected === i ? 'rgba(255,140,0,0.08)' : 'rgba(255,255,255,0.02)',
                    border: selected === i ? '1px solid rgba(255,140,0,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading font-semibold text-sm"
                        style={{ color: selected === i ? '#FF8C00' : '#B8C8DC' }}>
                        {m.name}
                      </div>
                      <div className="text-steel-600 text-xs font-mono mt-0.5">{m.count}</div>
                    </div>
                    <span
                      className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: selected === i ? 'rgba(255,140,0,0.15)' : 'rgba(255,255,255,0.04)',
                        color: selected === i ? '#FF8C00' : '#607FA0',
                        border: `1px solid ${selected === i ? 'rgba(255,140,0,0.2)' : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl overflow-hidden h-full"
                style={{ border: '1px solid rgba(255,255,255,0.06)', minHeight: 420 }}
              >
                <div className="relative h-56 img-zoom">
                  <img
                    src={machines[selected].image}
                    alt={machines[selected].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 img-overlay"/>
                  {/* Scan line effect */}
                  <div className="scan-line"/>
                </div>

                <div className="p-6" style={{ background: '#10141F' }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-steel-100 text-lg">{machines[selected].name}</h3>
                    <span className="tag-pill">{machines[selected].tag}</span>
                  </div>
                  <div
                    className="font-mono text-[11px] px-3 py-2 rounded-lg mb-4"
                    style={{ background: 'rgba(255,140,0,0.07)', color: '#FF8C00', border: '1px solid rgba(255,140,0,0.15)' }}
                  >
                    {machines[selected].specs}
                  </div>
                  <p className="text-steel-400 text-sm leading-relaxed">{machines[selected].desc}</p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                      <span className="text-xs text-steel-500 font-heading">Online & In Production</span>
                    </div>
                    <span className="text-steel-700">·</span>
                    <span className="text-xs text-steel-600 font-mono">{machines[selected].count}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Photo gallery strip */}
        <Reveal delay={0.2} className="mt-10">
          <p className="eyebrow mb-4 text-[11px]">
            <span className="spark-line"/>
            Machine Gallery
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {[
              '/images/machines/cnc-lathe-operation.jpg',
              '/images/machines/turning-machine-jobwork.jpg',
              '/images/machines/cylindrical-grinding-machine.jpg',
              '/images/machines/cnc-grinding-solutions.jpg',
              '/images/machines/od-bore-grinding-2.jpg',
              '/images/machines/cnc-turning-heavy.jpg',
            ].map((img, i) => (
              <motion.div
                key={img}
                className="rounded-xl overflow-hidden img-zoom"
                style={{ height: 90, border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={img} alt={`Machine ${i + 1}`} className="w-full h-full object-cover" loading="lazy"/>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="divider mt-20 container-xl"/>
    </section>
  );
}
