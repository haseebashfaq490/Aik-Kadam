import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogo';

const navLinks = [
  { name: 'Why Us', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Impact', href: '#impact' },
  { name: 'AI Profile Decoder', href: '#ai-decoder' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <BrandLogo scale={0.35} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pl-4">
            <a href="#get-involved" className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-brand-orange transition-colors text-sm">
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#18181b] border-b border-white/10 shadow-2xl py-4 flex flex-col md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-4 text-base font-medium text-white/80 hover:text-brand-orange hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4 pb-4">
              <a href="#get-involved" className="block w-full py-3 text-center bg-brand-orange text-black font-semibold rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
