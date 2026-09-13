import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'fade-up',
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const variants = {
    'fade-up':    { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0 } },
    'fade-down':  { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    'fade-left':  { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    'fade-right': { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
    'scale-in':   { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    'fade':       { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  const selected = variants[variant] || variants['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={selected}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
