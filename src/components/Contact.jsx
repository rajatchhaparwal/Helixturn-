import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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

const initialForm = {
  company: '',
  name: '',
  email: '',
  phone: '',
  service: '',
  material: '',
  quantity: '',
  tolerance: '',
  timeline: '',
  notes: '',
};

const serviceOptions = [
  'Blank Turning', 'Milling', 'Broaching', 'Facing & Drilling',
  'Hobbing', 'OD Grinding', 'Bore Grinding', 'Hard Part Turning',
  'Gear Grinding', 'Traceability Marking', 'Special Packaging', 'Multiple Services',
];

export default function Contact() {
  const [form, setForm]           = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    // Simulate API call — replace with Formspree / EmailJS / backend
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const fieldClass = 'field';

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0D14 0%, #06080D 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-blue bg-[size:60px_60px] opacity-30 pointer-events-none"/>
      <div className="orb-orange" style={{ width: 600, height: 600, top: '0', right: '-100px' }}/>

      <div className="container-xl">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="spark-line"/>
            Get In Touch
            <span className="spark-line" style={{ background: 'linear-gradient(270deg, #FF8C00, transparent)' }}/>
          </div>
          <h2 className="section-title mb-4">
            Request a<br/>
            <span className="text-spark">Quote Today</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Send your drawing or requirement details. We respond within <strong className="text-steel-200">24 hours</strong> with
            a detailed quote and lead time.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Left: Info panel ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                ),
                label: 'Call / WhatsApp',
                value: '+91 98765 43210',
                sub: 'Mon–Sat, 9am–7pm',
                color: '#FF8C00',
                href: 'tel:+919876543210',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                ),
                label: 'Email',
                value: 'info@helixturn.in',
                sub: 'We reply within 24 hours',
                color: '#14B8A6',
                href: 'mailto:info@helixturn.in',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                ),
                label: 'Factory Address',
                value: 'Helixturn Engineering',
                sub: 'Industrial Area, Dewas, M.P. — 455001',
                color: '#8B5CF6',
                href: 'https://maps.google.com/?q=Dewas+Madhya+Pradesh',
              },
            ].map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-hover rounded-2xl p-5 block group"
                  id={`contact-${c.label.toLowerCase().replace(/\W/g,'-')}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-heading text-steel-600 uppercase tracking-widest mb-0.5">{c.label}</p>
                    <p className="font-heading font-semibold text-steel-100 text-sm group-hover:text-spark-400 transition-colors">{c.value}</p>
                    <p className="text-steel-500 text-xs">{c.sub}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Why choose us */}
            <Reveal delay={0.2}>
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.12)' }}
              >
                <h4 className="font-heading font-semibold text-steel-100 text-sm mb-4">Why Work with Us?</h4>
                <ul className="space-y-3">
                  {[
                    'Complete machining from blank to finished part',
                    'Job work with your material or we supply',
                    '100% traceability marking on every piece',
                    'Special anti-corrosion packaging',
                    'DIN 5 gear grinding accuracy',
                    '24/7 production, on-time delivery',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-steel-400">
                      <svg className="w-4 h-4 text-spark-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 md:p-10 space-y-5"
                id="rfq-form"
              >
                <h3 className="font-heading font-bold text-steel-100 text-lg mb-1">
                  Send Your RFQ
                </h3>
                <p className="text-steel-500 text-xs mb-2">
                  Fill in your requirement details for the most accurate quote.
                </p>

                {/* Row 1: Company + Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Company Name *</label>
                    <input id="rfq-company" type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company" className={fieldClass} required/>
                  </div>
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Contact Person *</label>
                    <input id="rfq-name" type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" className={fieldClass} required/>
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Email *</label>
                    <input id="rfq-email" type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@company.com" className={fieldClass} required/>
                  </div>
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Phone / WhatsApp *</label>
                    <input id="rfq-phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210" className={fieldClass} required/>
                  </div>
                </div>

                {/* Row 3: Service + Material */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Service Required *</label>
                    <select id="rfq-service" name="service" value={form.service} onChange={handleChange}
                      className={fieldClass} required
                      style={{ background: 'rgba(22,28,42,0.8)' }}>
                      <option value="" disabled>Select service…</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Material Grade</label>
                    <input id="rfq-material" type="text" name="material" value={form.material} onChange={handleChange}
                      placeholder="e.g. EN24, 20MnCr5" className={fieldClass}/>
                  </div>
                </div>

                {/* Row 4: Qty + Tolerance */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Quantity (per batch)</label>
                    <input id="rfq-quantity" type="text" name="quantity" value={form.quantity} onChange={handleChange}
                      placeholder="e.g. 500 pieces" className={fieldClass}/>
                  </div>
                  <div>
                    <label className="block text-xs text-steel-500 font-heading mb-1.5">Tolerance / Accuracy</label>
                    <input id="rfq-tolerance" type="text" name="tolerance" value={form.tolerance} onChange={handleChange}
                      placeholder="e.g. ±0.01mm, DIN 5" className={fieldClass}/>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs text-steel-500 font-heading mb-1.5">Required Timeline</label>
                  <input id="rfq-timeline" type="text" name="timeline" value={form.timeline} onChange={handleChange}
                    placeholder="e.g. 4 weeks, urgent" className={fieldClass}/>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs text-steel-500 font-heading mb-1.5">Additional Notes / Drawing Details</label>
                  <textarea id="rfq-notes" name="notes" value={form.notes} onChange={handleChange}
                    rows={4} placeholder="Describe your component, special requirements, heat treatment specs, etc."
                    className={fieldClass} style={{ resize: 'vertical', minHeight: 100 }}/>
                </div>

                {/* Submit */}
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 px-6 py-4 rounded-xl"
                      style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)' }}
                    >
                      <svg className="w-5 h-5 text-flux-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <div>
                        <p className="text-flux-400 font-heading font-semibold text-sm">RFQ Sent Successfully!</p>
                        <p className="text-steel-500 text-xs">We'll reach out within 24 hours.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      id="rfq-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-spark justify-center py-4 rounded-xl"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {submitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          Submit RFQ — We'll Reply in 24 Hours
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>

                <p className="text-steel-600 text-[11px] text-center">
                  No spam. Your details are used only to process your quote.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
