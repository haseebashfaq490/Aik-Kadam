import React from 'react';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 pt-16 pb-8 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side - Brand Logo */}
        <div className="flex flex-col items-center md:items-start">
          <BrandLogo scale={1} className="mb-4" />
          <p className="text-white/50 text-sm max-w-xs text-center md:text-left mb-6">
            Unlocking global education and careers for those who dare to take the first step.
          </p>
          <a shrink="0" href="mailto:aikkadam.info@gmail.com" className="group flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
               <Mail size={18} />
            </div>
            <span className="text-sm font-medium tracking-wide">aikkadam.info@gmail.com</span>
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/company/aik-kadam" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61567188400501" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/aik_kadam" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
          >
            <Instagram size={20} />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Aik Kadam. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest text-[10px] font-bold">
          <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
