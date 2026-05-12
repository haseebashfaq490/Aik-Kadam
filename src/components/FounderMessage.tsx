import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-24 relative z-10 w-full mb-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-black text-white text-center mb-12 uppercase tracking-wide">
          Message from Co-Founder
        </h2>
        <div className="glass-panel border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <Quote className="text-brand-orange w-12 h-12 mb-8 opacity-50" />
          
          <div className="space-y-6 text-base text-white/80 leading-relaxed font-sans mb-12 italic">
            <p>
              "Growing up in a humble family in Pattoki, Pakistan, I had big dreams. For a long time, they felt like they belonged to someone else. Then I took one step. A fully funded scholarship to LUMS opened a door I never thought was mine to walk through. One opportunity led to another — a fully funded exchange program to the United States, then a scholarship for an MSc from Ivey Business School at Western University in Canada. Today, I am a permanent resident of Canada, CEO of ThinkAgentic, and working on some of the most ambitious energy projects in the world at Bruce Power."
            </p>
            <p>
              "But I have never forgotten where I came from. Every milestone in my journey traces back to someone who believed in me before I believed in myself. That is exactly why I founded ایک قدم — a completely free mentorship initiative dedicated to helping deserving students access the higher education and career opportunities they deserve."
            </p>
            <p>
              "Because all it takes is one step to change everything. I invite you to join this mission. Together, let's open doors for the next generation. ایک قدم — One Step. Endless Possibility."
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-xl font-bold uppercase shrink-0 ring-2 ring-brand-orange/30 overflow-hidden">
              <img 
                src="/Haseeb.jpg" 
                alt="Haseeb Ashfaq" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = 'HA';
                }}
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Haseeb Ashfaq</h4>
              <p className="text-white/60 text-sm mt-1 leading-relaxed">
                Co-Founder, Aik Kadam<br className="md:hidden" />
                <span className="hidden md:inline"> | </span>CEO, ThinkAgentic<br className="md:hidden" />
                <span className="hidden md:inline"> | </span>Technical Advisor, Bruce Power
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
