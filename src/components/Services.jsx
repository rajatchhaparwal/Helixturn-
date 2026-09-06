import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Gear Grinding',
    description:
      'Profile and generating grinding of spur, helical, and internal gears. Achieving DIN 5 class accuracy with surface finish down to Ra 0.4μm on hardened steels.',
    specs: [
      'Module range: 0.5 – 8',
      'Max diameter: 400mm',
      'DIN 3–7 class accuracy',
      'Profile & generating methods',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="8" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" strokeLinecap="round" />
      </svg>
    ),
    accent: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Precision Machining',
    description:
      'CNC turning, milling, and cylindrical grinding for gear blanks, shafts, and precision components. Sub-micron accuracy with repeatable quality across production runs.',
    specs: [
      'CNC turning up to 250mm',
      'Cylindrical grinding ±0.001mm',
      'Hard turning HRC 55–62',
      'Batch & prototype runs',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="20" height="20" rx="2" />
        <path d="M6 16h20M16 6v20" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    ),
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Surface Finishing',
    description:
      'Controlled surface finishing to achieve required Ra values. Post-grinding lapping and honing for critical mating surfaces in power transmission applications.',
    specs: [
      'Surface finish Ra 0.2–1.6μm',
      'Honing & lapping available',
      'Deburring & edge treatment',
      'Phosphate coating prep',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28 L28 4" strokeLinecap="round" />
        <path d="M8 24 C12 20, 16 24, 20 20 C24 16, 24 12, 28 8" strokeLinecap="round" />
        <path d="M4 24 C8 20, 12 24, 16 20 C20 16, 20 12, 24 8" strokeLinecap="round" />
      </svg>
    ),
    accent: 'from-indigo-500 to-blue-700',
  },
  {
    title: 'Custom Solutions',
    description:
      'End-to-end capability from gear blank to finished, inspected component. We work from customer drawings or reverse-engineer from samples with full dimensional reports.',
    specs: [
      'Drawing-to-delivery',
      'Reverse engineering',
      'CMM inspection reports',
      'Material certification',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" strokeLinejoin="round" />
        <circle cx="16" cy="24" r="4" />
        <path d="M16 20v-2" strokeLinecap="round" />
      </svg>
    ),
    accent: 'from-sky-500 to-blue-700',
  },
];

const materials = [
  'EN8', 'EN19', 'EN24', 'EN36', '20MnCr5', 'SAE 8620',
  '16MnCr5', 'EN353', 'SCM420', '42CrMo4',
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative gear-pattern">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-industrial-500" />
              Capabilities
              <span className="w-8 h-px bg-industrial-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              What We
              <span className="gradient-text"> Deliver</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              From rough gear blanks to finished, inspection-verified gears — our capabilities 
              cover the full spectrum of precision gear manufacturing.
            </p>
          </ScrollReveal>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card-hover p-8 group h-full"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} p-3 text-white mb-6 
                  transition-shadow duration-500 group-hover:shadow-lg group-hover:shadow-industrial-600/20`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-heading font-semibold text-steel-100 mb-3 group-hover:text-industrial-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Specs */}
                <ul className="space-y-2">
                  {service.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-steel-300">
                      <div className="w-1.5 h-1.5 bg-industrial-500 rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Materials We Handle */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/3">
                <h3 className="text-xl font-heading font-semibold text-steel-100 mb-2">
                  Materials We Handle
                </h3>
                <p className="text-sm text-steel-400">
                  Case-hardened, through-hardened, and nitrided alloy steels — ready for precision grinding.
                </p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-3">
                {materials.map((mat) => (
                  <motion.span
                    key={mat}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-graphite-700/50 border border-graphite-600/40 rounded-lg text-sm font-mono text-industrial-300 
                      hover:border-industrial-600/50 hover:bg-industrial-900/20 transition-colors duration-300 cursor-default"
                  >
                    {mat}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 mx-auto w-full max-w-7xl" />
    </section>
  );
}
