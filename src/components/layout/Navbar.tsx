import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Spa', path: '/spa' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4',
        scrolled 
          ? 'bg-brand-charcoal/95 backdrop-blur-md py-3 shadow-xl' 
          : isHome 
            ? 'bg-transparent' 
            : 'bg-brand-charcoal/80 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
            <span className="text-white font-serif font-bold text-xl">SRE</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest leading-none text-white">SHRI RAM</span>
            <span className="text-[10px] tracking-[0.3em] font-medium opacity-80 text-white">EXCELLENCY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-4 py-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full",
                location.pathname === link.path 
                  ? "text-brand-gold bg-white/5" 
                  : "text-white/70 hover:text-brand-gold hover:bg-white/10"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navPill"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>


        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:02912614100" className="text-white/80 hover:text-white transition-colors">
            <Phone size={18} />
          </a>
          <Link
            to="/booking"
            className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-brand-red/20"
          >
            <Calendar size={14} />
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-charcoal z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-serif tracking-[0.2em] uppercase transition-all duration-300 px-8 py-3 rounded-full",
                  location.pathname === link.path 
                    ? "text-brand-gold bg-white/5" 
                    : "text-white hover:text-brand-gold hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brand-red text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
