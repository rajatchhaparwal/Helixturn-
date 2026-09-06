export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite-950 border-t border-graphite-700/20">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 mb-4 group">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M20 2L20 38M12 8L20 2L28 8M8 14L20 8L32 14"
                    stroke="url(#footer-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="footer-gradient" x1="20" y1="2" x2="20" y2="38">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="text-lg font-heading font-bold text-steel-200 tracking-wide">TRIDENT</span>
                <span className="block text-[9px] font-heading text-steel-600 tracking-[0.25em] uppercase -mt-0.5">
                  Precision Engineering
                </span>
              </div>
            </a>
            <p className="text-sm text-steel-500 leading-relaxed mb-6">
              CNC gear grinding and precision machining from Dewas, Madhya Pradesh. 
              Built for automotive, agriculture, and heavy engineering.
            </p>
            <div className="flex items-center gap-2 text-xs text-steel-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-graphite-800/50 border border-graphite-700/30 rounded-full">
                🇮🇳 Made in India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-steel-300 tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Facility', href: '#facility' },
                { name: 'Services', href: '#services' },
                { name: 'Quality', href: '#quality' },
                { name: 'Industries', href: '#industries' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-steel-500 hover:text-industrial-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-steel-300 tracking-wide uppercase mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {[
                'CNC Gear Grinding',
                'Precision Machining',
                'Cylindrical Grinding',
                'Surface Finishing',
                'CMM Inspection',
              ].map((item) => (
                <li key={item} className="text-sm text-steel-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-steel-300 tracking-wide uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-steel-500">
              <p>
                Industrial Area, Dewas
                <br />
                Madhya Pradesh 455001
              </p>
              <p>
                <a href="mailto:info@tridentprecision.in" className="hover:text-industrial-400 transition-colors">
                  info@tridentprecision.in
                </a>
              </p>
              <p>+91 XXXXX XXXXX</p>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 text-industrial-400 hover:text-industrial-300 transition-colors font-medium mt-2"
              >
                Request Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-graphite-700/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel-600">
            © {currentYear} Trident Precision Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-steel-600 hover:text-steel-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-steel-600 hover:text-steel-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
