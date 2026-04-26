import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Lock, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex text-center items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden z-10">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px]">
        <div className="absolute inset-0 bg-brand-orange/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto items-center relative z-10 flex flex-col">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass-panel text-white/80 text-xs sm:text-sm font-semibold tracking-wide border border-brand-orange/30">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            Free guidance for studying abroad
          </div>
          <h1 className="text-6xl md:text-8xl font-sans font-black leading-[1.05] tracking-tighter text-white mb-6 text-balance">
            Your first step towards <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ffd166]">studying abroad</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-10 max-w-2xl text-balance">
            I got into top universities with the help of great mentors. Now, I want to help you do the same, completely free of charge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a
              href="#get-involved"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-orange text-black font-bold text-lg hover:bg-brand-orange-dark transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Get Expert Guidance
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full glass-panel text-white font-semibold hover:bg-white/10 transition-all text-lg w-full sm:w-auto"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
            <div className="flex items-center gap-2 text-sm font-medium"><Globe size={18} /> Global Placements</div>
            <div className="flex items-center gap-2 text-sm font-medium"><Lock size={18} /> Fully Funded Grants</div>
            <div className="flex items-center gap-2 text-sm font-medium"><Rocket size={18} /> Insider Referrals</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
