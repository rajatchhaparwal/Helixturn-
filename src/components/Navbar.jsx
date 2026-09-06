import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Facility', href: '#facility' },
  { name: 'Services', href: '#services' },
  { name: 'Quality', href: '#quality' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          const sections = navLinks.map((link) => link.href.substring(1));
          const scrollPos = window.scrollY + 140;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              if (scrollPos >= section.offsetTop) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-graphite-950/90 backdrop-blur-xl border-b border-graphite-700/30 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            {/* Trident Logo Mark */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                {/* Trident shape */}
                <path
                  d="M20 2L20 38M12 8L20 2L28 8M8 14L20 8L32 14"
                  stroke="url(#trident-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-industrial-400 transition-colors duration-300"
                />
                <defs>
                  <linearGradient id="trident-gradient" x1="20" y1="2" x2="20" y2="38">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-steel-100 tracking-wide group-hover:text-industrial-400 transition-colors duration-300">
                TRIDENT
              </span>
              <span className="block text-[10px] font-heading text-steel-500 tracking-[0.3em] uppercase -mt-1">
                Precision Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium font-heading tracking-wide transition-colors duration-300 rounded-lg ${
                  activeSection === link.href.substring(1)
                    ? 'text-industrial-400'
                    : 'text-steel-400 hover:text-steel-200'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-industrial-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-industrial-600 text-white text-sm font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-industrial-500 hover:shadow-lg hover:shadow-industrial-600/25"
            >
              Request Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-steel-400 hover:text-steel-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-graphite-900/98 backdrop-blur-xl border-b border-graphite-700/30 overflow-hidden"
          >
            <div className="section-container py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 text-base font-heading font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-industrial-400 bg-industrial-900/20'
                      : 'text-steel-400 hover:text-steel-200 hover:bg-graphite-800/50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block mt-4 px-4 py-3 bg-industrial-600 text-white text-center font-heading font-semibold rounded-lg"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
