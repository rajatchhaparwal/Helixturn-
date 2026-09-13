const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Services',   href: '#services' },
  { name: 'Facility',   href: '#facility' },
  { name: 'Quality',    href: '#quality' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact',    href: '#contact' },
];

const serviceList = [
  'Blank Turning', 'Milling Process', 'Broaching', 'Facing & Drilling',
  'Hobbing', 'OD Grinding', 'Bore Grinding', 'Hard Part Turning',
  'Gear Grinding', 'Traceability Marking', 'Special Packaging', 'Forging (Secondary)',
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer
      style={{ background: '#06080D', borderTop: '1px solid rgba(255,140,0,0.1)' }}
    >
      {/* CTA strip */}
      <div
        className="relative overflow-hidden py-14"
        style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(20,184,166,0.04) 100%)' }}
      >
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold text-steel-100 text-2xl md:text-3xl mb-2">
              Ready to Start Your <span className="text-spark">CNC Job Work?</span>
            </h2>
            <p className="text-steel-500 text-sm max-w-lg">
              Send drawings or samples. We'll quote within 24 hours with full lead time and process details.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-spark"
              id="footer-cta-btn"
            >
              Get Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
            <a
              href="tel:+919876543210"
              className="btn-ghost"
              id="footer-call-btn"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-xl py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <rect width="36" height="36" rx="8" fill="url(#footerLogoGrad)"/>
                  <path d="M10 9v18M10 18h16M26 9v18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="18" r="2" fill="white" fillOpacity="0.5"/>
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36">
                      <stop stopColor="#FF8C00"/>
                      <stop offset="1" stopColor="#E07000"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="block font-heading font-bold text-steel-100 tracking-wide">HELIXTURN</span>
                <span className="block text-[9px] font-heading text-steel-600 tracking-[0.35em] uppercase">Engineering</span>
              </div>
            </div>
            <p className="text-steel-500 text-xs leading-relaxed mb-5">
              Precision CNC machining job work from Dewas, Madhya Pradesh.
              Turning, milling, grinding, hobbing, and gear grinding — all under one roof.
            </p>
            {/* Social (placeholder) */}
            <div className="flex gap-3">
              {['linkedin', 'whatsapp', 'email'].map((s) => (
                <a
                  key={s}
                  href={s === 'email' ? 'mailto:info@helixturn.in' : s === 'whatsapp' ? 'https://wa.me/919876543210' : 'https://linkedin.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`footer-social-${s}`}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,140,0,0.3)'; e.currentTarget.style.background = 'rgba(255,140,0,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  {s === 'linkedin' && (
                    <svg className="w-4 h-4 text-steel-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {s === 'whatsapp' && (
                    <svg className="w-4 h-4 text-steel-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )}
                  {s === 'email' && (
                    <svg className="w-4 h-4 text-steel-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-steel-200 text-sm mb-5 tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-steel-500 text-xs font-heading hover:text-spark-400 transition-colors flex items-center gap-2 group"
                    id={`footer-nav-${l.name.toLowerCase()}`}
                  >
                    <span className="w-0 h-px bg-spark-500 transition-all duration-300 group-hover:w-4"/>
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-steel-200 text-sm mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-steel-500 text-xs font-heading hover:text-spark-400 transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-steel-700 flex-shrink-0 group-hover:bg-spark-500 transition-colors"/>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading font-semibold text-steel-200 text-sm mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[10px] text-steel-600 font-heading uppercase tracking-widest mb-1">Address</p>
                <p className="text-steel-400 text-xs leading-relaxed">Industrial Area,<br/>Dewas, M.P. — 455001</p>
              </li>
              <li>
                <p className="text-[10px] text-steel-600 font-heading uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+919876543210" className="text-steel-400 text-xs hover:text-spark-400 transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <p className="text-[10px] text-steel-600 font-heading uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:info@helixturn.in" className="text-steel-400 text-xs hover:text-spark-400 transition-colors">info@helixturn.in</a>
              </li>
              <li>
                <p className="text-[10px] text-steel-600 font-heading uppercase tracking-widest mb-1">Working Hours</p>
                <p className="text-steel-400 text-xs">Mon–Sat: 9am – 7pm<br/>Production: 24/7</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-600 text-xs font-heading">
            © {new Date().getFullYear()} Helixturn Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-steel-700 text-xs">Dewas, Madhya Pradesh, India</p>
            <span className="w-1 h-1 rounded-full bg-steel-700"/>
            <p className="text-steel-700 text-xs">CIN: XXXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
