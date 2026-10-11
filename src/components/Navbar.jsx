import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/favicon.svg';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Facility', href: '#facility' },
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
          setIsScrolled(window.scrollY > 60);
          const scrollPos = window.scrollY + 120;
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const el = document.getElementById(navLinks[i].href.slice(1));
            if (el && scrollPos >= el.offsetTop) {
              setActiveSection(navLinks[i].href.slice(1));
              break;
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

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-forge-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
          : 'bg-transparent'
        }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[76px]">
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-3 group"
            aria-label="Helixturn Engineering home"
          >
            {/* Logo mark: stylised helix H */}
            <div className="relative w-9 h-9 flex-shrink-0">
              <img src={logo} />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-heading font-bold text-steel-100 tracking-wide group-hover:text-spark-400 transition-colors duration-300">
                HELIXTURN
              </span>
              <span className="block text-[9px] font-heading text-steel-500 tracking-[0.35em] uppercase -mt-0.5">
                Engineering
              </span>
            </div>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-heading font-medium tracking-wide rounded-lg transition-colors duration-300 ${active ? 'text-spark-400' : 'text-steel-400 hover:text-steel-100'
                    }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: '#FF8C00' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── CTA + Mobile ── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 btn-spark text-sm rounded-lg"
              id="nav-get-quote-btn"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Quote
            </a>

            {/* Mobile hamburger */}
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-steel-400 hover:text-steel-100 transition-colors"
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

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(10,13,20,0.98)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="container-xl py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-heading font-medium transition-colors duration-200 ${activeSection === link.href.slice(1)
                      ? 'text-spark-400 bg-spark-500/10'
                      : 'text-steel-400 hover:text-steel-100 hover:bg-white/5'
                    }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-spark-500 flex-shrink-0" />
                  )}
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="block w-full text-center btn-spark rounded-xl py-3.5"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
