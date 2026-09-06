import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: 10, suffix: '+', label: 'Years of Precision', icon: '🏭' },
  { value: 8, suffix: '+', label: 'CNC Machines', icon: '⚙️' },
  { value: 5000, suffix: '+', label: 'Parts / Month', icon: '📦' },
  { value: 99.5, suffix: '%', decimals: 1, label: 'Quality Rate', icon: '✅' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="section-padding relative gear-pattern">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <div className="section-label">
                <span className="w-8 h-px bg-industrial-500" />
                About Trident
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="section-title">
                Built for Precision.
                <br />
                <span className="gradient-text">Driven by Quality.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mb-8">
                Based in the industrial hub of Dewas, Madhya Pradesh, Trident specializes in 
                CNC gear grinding and precision machining for India's most demanding industries. 
                Every gear that leaves our facility is ground to exact specifications — because in 
                power transmission, there is no room for approximation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-steel-400 leading-relaxed mb-8">
                We work with hardened alloy steels including EN8, EN19, EN24, 20MnCr5, and SAE 8620 — 
                delivering DIN 5 class grinding with surface finish down to Ra 0.4μm. Our process is 
                built around consistency: incoming material inspection, CNC-controlled grinding, 
                in-process gauging, and final CMM verification on every batch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['Spur Gears', 'Helical Gears', 'Internal Gears', 'Spline Shafts', 'Worm Gears'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-graphite-800/60 border border-graphite-600/30 rounded-lg text-sm text-steel-300 font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image + Stats */}
          <div>
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src="/images/gear-closeup.jpg"
                  alt="Precision ground gears at Trident facility"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.1 * index} variant="scale-in">
                  <div className="glass-card p-5 text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-steel-100">
                      {inView ? (
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals || 0}
                          duration={2.5}
                          separator=","
                        />
                      ) : (
                        '0'
                      )}
                    </div>
                    <div className="text-sm text-steel-500 font-medium mt-1">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 mx-auto w-full max-w-7xl" />
    </section>
  );
}
