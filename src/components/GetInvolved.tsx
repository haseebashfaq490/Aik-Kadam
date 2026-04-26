import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-32 relative overflow-hidden bg-brand-orange">

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-black mb-8 leading-tight tracking-tight">
          Ready to take your <br />first step?
        </h2>
        <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto font-medium">
          Join hundreds of students and professionals who are unlocking global opportunities. No fees, no hidden agendas. Just pure value.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-black text-white font-bold text-xl hover:bg-[#111] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-2xl"
          >
            Apply for Guidance
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
             href="#"
             className="px-8 py-5 rounded-full border-2 border-black text-black font-bold text-xl hover:bg-black/5 transition-all w-full sm:w-auto"
          >
             Become a Mentor
          </a>
        </div>
      </div>
    </section>
  );
}
