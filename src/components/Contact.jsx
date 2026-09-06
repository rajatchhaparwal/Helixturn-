import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const initialFormState = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  partDescription: '',
  materialGrade: '',
  toleranceRequired: '',
  quantity: '',
  deliveryTimeline: '',
  additionalNotes: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with Formspree/Resend endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setForm(initialFormState);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full bg-graphite-800/50 border border-graphite-600/40 rounded-xl px-4 py-3 text-steel-200 text-sm font-body placeholder-steel-600 focus:outline-none focus:border-industrial-500/60 focus:ring-1 focus:ring-industrial-500/30 transition-all duration-300';

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-industrial-500" />
              Get In Touch
              <span className="w-8 h-px bg-industrial-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Request a
              <span className="gradient-text"> Quote</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              Send us your requirements. Include material grade, tolerance, and quantity 
              for the most accurate quotation. We typically respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* RFQ Form */}
          <ScrollReveal className="lg:col-span-3" variant="fade-left">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              {/* Company Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Technical Details */}
              <div className="pt-4 border-t border-graphite-700/30">
                <h4 className="text-sm font-heading font-semibold text-steel-300 mb-4 tracking-wide uppercase">
                  Technical Requirements
                </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-steel-400 mb-2">Part Description</label>
                <input
                  type="text"
                  name="partDescription"
                  value={form.partDescription}
                  onChange={handleChange}
                  placeholder="e.g., Helical gear, Module 3, 42 teeth, 20° PA"
                  className={inputClass}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Material Grade</label>
                  <select
                    name="materialGrade"
                    value={form.materialGrade}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select material</option>
                    <option value="20MnCr5">20MnCr5</option>
                    <option value="SAE 8620">SAE 8620</option>
                    <option value="EN24">EN24</option>
                    <option value="EN19">EN19</option>
                    <option value="EN8">EN8</option>
                    <option value="16MnCr5">16MnCr5</option>
                    <option value="EN353">EN353</option>
                    <option value="42CrMo4">42CrMo4</option>
                    <option value="Other">Other (specify in notes)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Tolerance Required</label>
                  <select
                    name="toleranceRequired"
                    value={form.toleranceRequired}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select class</option>
                    <option value="DIN 3">DIN 3</option>
                    <option value="DIN 4">DIN 4</option>
                    <option value="DIN 5">DIN 5</option>
                    <option value="DIN 6">DIN 6</option>
                    <option value="DIN 7">DIN 7</option>
                    <option value="Custom">Custom (specify in notes)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-400 mb-2">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 500 pcs/month"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-steel-400 mb-2">Delivery Timeline</label>
                <select
                  name="deliveryTimeline"
                  value={form.deliveryTimeline}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select timeline</option>
                  <option value="Urgent (< 7 days)">Urgent (&lt; 7 days)</option>
                  <option value="Standard (7-14 days)">Standard (7–14 days)</option>
                  <option value="Flexible (14-30 days)">Flexible (14–30 days)</option>
                  <option value="Recurring order">Recurring order</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-steel-400 mb-2">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={form.additionalNotes}
                  onChange={handleChange}
                  placeholder="Drawing reference, special requirements, surface treatment, etc."
                  rows="4"
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 ${
                  submitted
                    ? 'bg-green-600'
                    : isSubmitting
                    ? 'bg-industrial-700 cursor-wait'
                    : 'bg-industrial-600 hover:bg-industrial-500 hover:shadow-lg hover:shadow-industrial-600/25'
                }`}
              >
                {submitted
                  ? '✓ Quote Request Sent Successfully'
                  : isSubmitting
                  ? 'Sending...'
                  : 'Submit Quote Request'}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2" variant="fade-right" delay={0.2}>
            <div className="space-y-6">
              {/* Address Card */}
              <div className="glass-card p-6">
                <h4 className="text-lg font-heading font-semibold text-steel-100 mb-4">Visit Our Facility</h4>
                <div className="space-y-4 text-sm text-steel-400">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-industrial-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-steel-200 font-medium">Trident Precision Engineering</p>
                      <p>Industrial Area, Dewas</p>
                      <p>Madhya Pradesh 455001, India</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-industrial-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-steel-200">info@tridentprecision.in</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-industrial-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-steel-200">+91 XXXXX XXXXX</p>
                      <p className="text-xs text-steel-500">Mon – Sat, 9:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="glass-card p-6 border-industrial-700/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-heading font-semibold text-steel-200">Quick Response</span>
                </div>
                <p className="text-sm text-steel-400">
                  We respond to all RFQ inquiries within <span className="text-steel-200 font-semibold">24 business hours</span>. 
                  For urgent requirements, call us directly.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card overflow-hidden">
                <div className="h-48 bg-graphite-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-steel-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-sm text-steel-500">Dewas, Madhya Pradesh</p>
                    <p className="text-xs text-steel-600 mt-1">Map integration available</p>
                  </div>
                </div>
              </div>

              {/* Capabilities Summary */}
              <div className="glass-card p-6">
                <h4 className="text-sm font-heading font-semibold text-steel-300 mb-3 tracking-wide uppercase">
                  What We Need From You
                </h4>
                <ul className="space-y-2 text-sm text-steel-400">
                  {[
                    'Engineering drawing (PDF/DWG)',
                    'Material grade & hardness',
                    'Required gear class (DIN/AGMA)',
                    'Quantity & delivery schedule',
                    'Surface treatment requirements',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-industrial-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
