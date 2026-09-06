import ScrollReveal from './ScrollReveal';

const processSteps = [
  {
    step: '01',
    title: 'Incoming Inspection',
    description: 'Material verification, hardness testing, and dimensional checks on all incoming gear blanks and raw materials.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'CNC Grinding',
    description: 'Precision profile or generating grinding on CNC gear grinders with in-process gauging for real-time accuracy control.',
    icon: '⚙️',
  },
  {
    step: '03',
    title: 'Quality Control',
    description: 'Full dimensional inspection on CMM, gear profile and lead measurement, surface roughness verification against drawing specs.',
    icon: '📊',
  },
  {
    step: '04',
    title: 'Dispatch',
    description: 'Cleaned, protected, and packaged with inspection certificate. Every batch ships with a dimensional report and material traceability.',
    icon: '📦',
  },
];

export default function Quality() {
  return (
    <section id="quality" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-industrial-500" />
              Quality & Process
              <span className="w-8 h-px bg-industrial-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Every Gear.
              <span className="gradient-text"> Every Time.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              Quality isn't a checkpoint — it's embedded in every stage of our process. 
              From incoming material to dispatch, every component is verified against specification.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.15} variant="fade-up">
              <div className="glass-card p-6 relative group h-full">
                {/* Step Number */}
                <div className="text-5xl font-heading font-bold text-graphite-700 absolute top-4 right-4 
                  group-hover:text-industrial-900/30 transition-colors duration-500">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-3xl mb-4">{step.icon}</div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-industrial-600/50 to-transparent z-10" />
                )}

                <h3 className="text-lg font-heading font-semibold text-steel-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-steel-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quality Image + Metrics */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <ScrollReveal variant="fade-left">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/quality-inspection.jpg"
                alt="Quality inspection at Trident"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/40 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-steel-100">
                Inspection & Verification
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Gear Profile Accuracy', value: 'DIN 5 Class' },
                  { label: 'Surface Roughness', value: 'Ra 0.4μm achievable' },
                  { label: 'Roundness Control', value: '≤ 0.001mm' },
                  { label: 'Batch Inspection Rate', value: '100% CMM verified' },
                  { label: 'Traceability', value: 'Full material & process records' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between py-3 border-b border-graphite-700/30"
                  >
                    <span className="text-steel-400 text-sm">{metric.label}</span>
                    <span className="text-industrial-400 font-heading font-semibold text-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Certifications / Growing Network Placeholder */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 text-center">
            <h3 className="text-xl font-heading font-semibold text-steel-100 mb-3">
              Our Growing Network
            </h3>
            <p className="text-steel-400 text-sm max-w-xl mx-auto mb-8">
              We are actively building relationships with OEMs across automotive, agriculture, 
              and heavy engineering sectors. Certification and association logos will appear here 
              as partnerships formalize.
            </p>
            {/* OEM Logo Placeholders */}
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-28 h-14 bg-graphite-700/30 border border-graphite-600/20 rounded-lg 
                    flex items-center justify-center text-steel-600 text-xs font-heading"
                >
                  Partner {i}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20 mx-auto w-full max-w-7xl" />
    </section>
  );
}
