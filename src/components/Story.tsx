import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="pt-12 pb-8 relative z-10 w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Why We Exist</h2>
        <h3 className="text-4xl md:text-5xl font-sans font-black text-white mb-8">Built by those who walked the path.</h3>
        
        <p className="text-xl text-white/70 leading-relaxed text-balance mb-12">
          We built Aik Kadam because we've walked this exact path. As a husband and wife team navigating global education and careers from scratch, we know the struggles firsthand. We faced every confusing application, rejection, and doubt together, succeeding because incredible mentors believed in us. We created this initiative to give back, to be the mentors we once wished we had, and to support your boldest ambitions, completely free of charge.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left border border-white/10 rounded-[2rem] p-8 glass-panel relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none"></div>

          {[
            "100% Free Mentorship",
            "No hidden agency fees",
            "Direct industry referrals",
            "Global alumni network"
          ].map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ x: 10, scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="flex items-center gap-3 cursor-pointer py-1"
             >
               <CheckCircle2 className="text-brand-orange w-6 h-6" />
               <span className="text-white/90 font-medium text-lg">{item}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
