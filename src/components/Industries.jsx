import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const industries = [
  {
    name: 'Automotive',
    description: 'Transmission gears, differential components, and drivetrain parts for commercial and passenger vehicles.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="16" width="28" height="12" rx="3" />
        <circle cx="12" cy="28" r="3" />
        <circle cx="28" cy="28" r="3" />
        <path d="M10 16l3-8h14l3 8" strokeLinejoin="round" />
        <line x1="20" y1="8" x2="20" y2="16" />
      </svg>
    ),
  },
  {
    name: 'Agriculture',
    description: 'Tractor transmission gears, harvester components, and agricultural equipment drivetrain parts.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="28" cy="26" r="10" />
        <circle cx="28" cy="26" r="5" />
        <circle cx="10" cy="30" r="6" />
        <circle cx="10" cy="30" r="3" />
        <path d="M16 30h7M10 16v8M6 16h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Heavy Engineering',
    description: 'Industrial gearbox components, mining equipment gears, and heavy-duty power transmission parts.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="20" width="12" height="16" rx="1" />
        <rect x="20" y="12" width="12" height="24" rx="1" />
        <path d="M10 4v16M26 4v8" strokeLinecap="round" />
        <path d="M7 4h6M23 4h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Power Transmission',
    description: 'Speed reducers, multipliers, and custom gearbox assemblies for industrial automation and conveyor systems.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="8" />
        <circle cx="14" cy="14" r="3" />
        <circle cx="28" cy="28" r="6" />
        <circle cx="28" cy="28" r="2" />
        <path d="M20 18l4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Defence & Aerospace',
    description: 'High-reliability components for defence vehicles, actuator gears, and mission-critical power systems.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4l4 12h-8l4-12z" strokeLinejoin="round" />
        <path d="M12 16h16v4H12z" strokeLinejoin="round" />
        <path d="M16 20v12M24 20v12" strokeLinecap="round" />
        <path d="M14 36h12" strokeLinecap="round" />
        <path d="M8 24l4-4M32 24l-4-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'General Engineering',
    description: 'Precision machined components for pumps, compressors, and material handling equipment.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6l2 4-2 2-2-2 2-4zM10 14l4 2-1 3-3-1-1-4zM30 14l-4 2 1 3 3-1 1-4z" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="8" />
        <circle cx="20" cy="22" r="3" />
        <path d="M20 30v6M14 34h12" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding relative gear-pattern">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-industrial-500" />
              Industries
              <span className="w-8 h-px bg-industrial-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Industries We
              <span className="gradient-text"> Serve</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              From automotive drivetrains to agricultural transmissions — our precision ground gears 
              work in systems where reliability is non-negotiable.
            </p>
          </ScrollReveal>
        </div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 0.08} variant="fade-up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card-hover p-8 group h-full flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-industrial-700/30 to-industrial-900/30 
                  border border-industrial-600/20 flex items-center justify-center text-industrial-400 mb-6
                  group-hover:border-industrial-500/40 group-hover:shadow-lg group-hover:shadow-industrial-600/10 
                  transition-all duration-500">
                  {industry.icon}
                </div>

                <h3 className="text-lg font-heading font-semibold text-steel-100 mb-3 
                  group-hover:text-industrial-400 transition-colors duration-300">
                  {industry.name}
                </h3>

                <p className="text-sm text-steel-400 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 mx-auto w-full max-w-7xl" />
    </section>
  );
}
