import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const machines = [
  {
    name: 'CNC Gear Grinding Machine',
    specs: 'Max Module: 8 | Max Diameter: 400mm',
    description: 'High-precision profile and generating grinding for spur and helical gears up to DIN 5 class accuracy.',
    image: '/images/cnc-machine.jpg',
  },
  {
    name: 'CNC Cylindrical Grinder',
    specs: 'Max Length: 1000mm | Roundness: 0.001mm',
    description: 'Precision OD/ID grinding for shafts, bushings, and gear blanks with sub-micron roundness control.',
    image: '/images/gear-closeup.jpg',
  },
  {
    name: 'CNC Turning Center',
    specs: 'Chuck: 250mm | Spindle: 4000 RPM',
    description: 'Hard turning and finish machining of gear blanks and precision components in hardened steels.',
    image: '/images/hero-bg.jpg',
  },
  {
    name: 'Coordinate Measuring Machine',
    specs: 'Accuracy: 1.5μm | Range: 700×700×500mm',
    description: 'Full 3D inspection and gear profile measurement for incoming and outgoing quality verification.',
    image: '/images/quality-inspection.jpg',
  },
];

export default function Facility() {
  return (
    <section id="facility" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-industrial-500" />
              Facility & Machinery
              <span className="w-8 h-px bg-industrial-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Purpose-Built for
              <br />
              <span className="gradient-text">Gear Precision</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              Our Dewas facility is equipped with dedicated CNC grinding and machining centers, 
              climate-monitored inspection area, and systematic workflow designed for consistent, 
              repeatable quality.
            </p>
          </ScrollReveal>
        </div>

        {/* Facility Wide Shot */}
        <ScrollReveal variant="scale-in" className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/facility-wide.jpg"
              alt="Trident manufacturing facility in Dewas"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-6 text-steel-300 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Climate Controlled QC Lab
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Dedicated Grinding Bay
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Material Storage Area
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Machine Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {machines.map((machine, index) => (
            <ScrollReveal
              key={machine.name}
              delay={index * 0.1}
              variant={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-heading font-semibold text-steel-100 mb-1">
                      {machine.name}
                    </h3>
                    <div className="text-xs font-mono text-industrial-400 mb-3 tracking-wider">
                      {machine.specs}
                    </div>
                    <p className="text-sm text-steel-400 leading-relaxed">
                      {machine.description}
                    </p>
                  </div>
                </div>
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
