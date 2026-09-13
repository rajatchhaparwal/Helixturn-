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

/* ── Service data ── */
const services = [
  {
    id: 'blank-turning',
    title: 'Blank Turning',
    tag: 'Primary',
    desc: 'CNC turning of forged and cast blanks to precise dimensions before downstream operations. Multi-axis turning centres handle OD, ID, facing, chamfering in one setup.',
    specs: ['OD up to 400mm', 'Chuck: 250mm', 'Hard turning HRC 55–62', 'Tight IT6 tolerances'],
    image: '/images/machines/cnc-turning-center-1.jpg',
    color: '#FF8C00',
  },
  {
    id: 'milling',
    title: 'Milling Process',
    tag: 'CNC',
    desc: 'Vertical and horizontal milling for keyways, slots, flat surfaces, pockets, and complex profiles. CNC machining centres deliver repeatable accuracy across production runs.',
    specs: ['VMC & HMC centres', 'Face, slot & profile milling', 'Indexable carbide tooling', 'Ra 0.8–1.6μm finish'],
    image: '/images/machines/digital-cnc-manufacturing.jpg',
    color: '#14B8A6',
  },
  {
    id: 'broaching',
    title: 'Broaching',
    tag: 'Precision',
    desc: 'Internal and external broaching for keyways, splines, hexagons, and custom profiles. High production rate with micron-level accuracy on each stroke.',
    specs: ['Internal & external', 'Keyway, spline, hex profiles', 'Hardened material capability', 'High-volume production'],
    image: '/images/machines/cnc-lathe-operation.jpg',
    color: '#8B5CF6',
  },
  {
    id: 'facing-drilling',
    title: 'Facing & Drilling',
    tag: 'Setup',
    desc: 'Precision facing to establish datum surfaces, combined with multi-spindle drilling, tapping, reaming, and counterboring on CNC machining centres.',
    specs: ['Datum face milling', 'Multi-spindle drilling', 'Tapping & reaming', 'Counterbore & spot face'],
    image: '/images/machines/cnc-lathe-machine-bay.jpg',
    color: '#FF8C00',
  },
  {
    id: 'hobbing',
    title: 'Hobbing',
    tag: 'Gear',
    desc: 'CNC gear hobbing for spur and helical gears. Generates precise involute profiles at high production rates, ready for post-heat-treatment grinding.',
    specs: ['Spur & helical gears', 'Module 0.5 – 6', 'DIN 8–10 pre-grind class', 'High-speed HSS hobs'],
    image: '/images/machines/turning-center-dewas.jpg',
    color: '#14B8A6',
  },
  {
    id: 'od-grinding',
    title: 'OD Grinding',
    tag: 'Grinding',
    desc: 'CNC cylindrical OD grinding for shafts, pins, and outer diameters of gear blanks. Sub-micron roundness control with consistent surface finish across batches.',
    specs: ['Max length: 1000mm', 'Roundness ≤ 0.002mm', 'Ra 0.4–0.8μm', 'Hardened & soft material'],
    image: '/images/machines/od-grinding-setup.jpg',
    color: '#FF8C00',
  },
  {
    id: 'bore-grinding',
    title: 'Bore Grinding',
    tag: 'Grinding',
    desc: 'Internal bore grinding (ID grinding) for bores, sleeves, and gear bore holes. Achieves H6/H7 tolerance with superb cylindricity for press and interference fits.',
    specs: ['Bore dia: 10–300mm', 'Cylindricity ≤ 0.003mm', 'Blind & through bores', 'H6 / H7 fit classes'],
    image: '/images/machines/od-bore-grinding-1.jpg',
    color: '#14B8A6',
  },
  {
    id: 'hard-part-turning',
    title: 'Hard Part Turning',
    tag: 'Special',
    desc: 'CBN & ceramic insert hard turning of components up to HRC 65. Replaces grinding on many non-critical surfaces, reducing cycle time and cost.',
    specs: ['Hardness up to HRC 65', 'CBN & ceramic inserts', 'Ra 0.4–1.2μm achievable', 'Eliminates regrind step'],
    image: '/images/machines/cnc-turning-process.jpg',
    color: '#8B5CF6',
  },
  {
    id: 'gear-grinding',
    title: 'Gear Grinding',
    tag: 'Premium',
    desc: 'Profile and generating gear grinding for spur, helical, and internal gears after case hardening. Achieves DIN 5 class accuracy with Ra 0.4μm tooth flank finish.',
    specs: ['DIN 5 class accuracy', 'Module 0.5 – 8', 'Flank Ra ≤ 0.4μm', 'Profile & generating method'],
    image: '/images/machines/cnc-precision-grinding.jpg',
    color: '#FF8C00',
  },
  {
    id: 'traceability',
    title: 'Traceability Marking',
    tag: 'Quality',
    desc: 'Dot-peen and laser traceability marking of every component with part number, heat number, operation date, and batch ID for full supply chain traceability.',
    specs: ['Dot-peen & laser methods', 'Part no. / heat no.', 'Batch / date stamping', 'QR & matrix codes'],
    image: '/images/machines/cnc-lathe-jobwork.jpg',
    color: '#14B8A6',
  },
  {
    id: 'packaging',
    title: 'Special Packaging',
    tag: 'Dispatch',
    desc: 'Anti-corrosion VCI packaging, foam-lined trays, and custom crating for long-distance or export dispatch. Inspection certificate included with every batch.',
    specs: ['VCI poly-bag wrapping', 'Foam-cushioned trays', 'Rust-proof oiling option', 'Inspection cert enclosed'],
    image: '/images/machines/lathe-workshop-floor.jpg',
    color: '#8B5CF6',
  },
  {
    id: 'forging',
    title: 'Forging (Secondary)',
    tag: 'Support',
    desc: 'Drop forging and closed-die forging of blanks as a secondary service. Ideal for customers who need both forged blanks and full machining from a single source.',
    specs: ['Drop & closed-die forging', 'Carbon & alloy steels', 'In-house normalising', 'Supply blank + machined'],
    image: '/images/machines/heavy-lathe-machining.jpg',
    color: '#FF8C00',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06080D 0%, #0A0D14 100%)' }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-blue bg-[size:60px_60px] opacity-40 pointer-events-none"/>
      <div className="orb-orange" style={{ width: 800, height: 800, top: '10%', right: '-20%' }}/>

      <div className="container-xl">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="spark-line"/>
            What We Do
            <span className="spark-line" style={{ background: 'linear-gradient(270deg, #FF8C00, transparent)' }}/>
          </div>
          <h2 className="section-title mb-5">
            Full-Spectrum CNC<br/>
            <span className="text-spark">Machining Services</span>
          </h2>
          <p className="section-sub mx-auto">
            From the first cut to final dispatch — every machining operation, quality check,
            and traceability step handled in-house at Dewas.
          </p>
        </Reveal>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={Math.min(i * 0.05, 0.3)}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: 340, border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(active === svc.id ? null : svc.id)}
                id={`service-card-${svc.id}`}
              >
                {/* Background image */}
                <div className="absolute inset-0 img-zoom">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(6,8,13,0.97) 35%, rgba(6,8,13,0.5) 70%, rgba(6,8,13,0.2) 100%)' }}
                />

                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 rounded-lg text-[10px] font-heading font-bold tracking-wider uppercase"
                    style={{
                      background: `${svc.color}20`,
                      color: svc.color,
                      border: `1px solid ${svc.color}30`,
                    }}
                  >
                    {svc.tag}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  {/* Indicator dot */}
                  <div className="w-8 h-0.5 mb-3 rounded-full transition-all duration-300 group-hover:w-12"
                    style={{ background: svc.color }}/>

                  <h3 className="font-heading font-bold text-steel-100 text-lg mb-1 group-hover:text-white transition-colors">
                    {svc.title}
                  </h3>

                  <AnimatePresence>
                    {active === svc.id ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-steel-400 text-xs leading-relaxed mt-2 mb-3">{svc.desc}</p>
                        <ul className="space-y-1">
                          {svc.specs.map((sp) => (
                            <li key={sp} className="flex items-center gap-2 text-[11px] text-steel-300">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }}/>
                              {sp}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-steel-500 text-xs line-clamp-2 mt-1"
                      >
                        {svc.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="mt-3 text-[10px] font-heading text-steel-600 group-hover:text-spark-400 transition-colors">
                    {active === svc.id ? '↑ Show less' : 'Tap to see details →'}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA bar */}
        <Reveal delay={0.2}>
          <div className="mt-16 rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.15)' }}
          >
            <div>
              <h3 className="font-heading font-bold text-steel-100 text-xl mb-1">
                Have a custom requirement?
              </h3>
              <p className="text-steel-500 text-sm">
                Send us your drawing or sample. We'll assess and revert within 24 hours.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
              }}
              className="btn-spark whitespace-nowrap flex-shrink-0"
              id="services-rfq-btn"
            >
              Send RFQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="divider mt-20 container-xl"/>
    </section>
  );
}
