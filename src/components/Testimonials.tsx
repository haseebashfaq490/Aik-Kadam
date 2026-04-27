import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I thought studying abroad was just a dream for someone from my background. With their step-by-step guidance, I secured a $120k scholarship to my dream university. It changed my family's life.",
    author: "Zainab R.",
    role: "Full-ride Scholar, MS Computer Science",
    university: "University of Toronto"
  },
  {
    quote: "When I had lost hope after multiple rejections, they helped me rebuild my profile and craft a compelling story. Now I'm heading to Germany on a DAAD scholarship. They are the mentors everyone needs.",
    author: "Ali M.",
    role: "DAAD Scholar, Engineering",
    university: "TU Munich"
  },
  {
    quote: "The personalized mentorship I received was incredible. They didn't just give advice; they held my hand through the entire visa and application process. I owe my $80k fellowship entirely to this initiative.",
    author: "Fatima A.",
    role: "Global Leader Fellowship",
    university: "Imperial College London"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#111] z-10 border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6">Real Stories. Real Impact.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Hear from students who took the first step with us and are now pursuing their dreams across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-black/50 p-8 rounded-[2rem] border border-white/5 relative group hover:border-brand-orange/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-brand-orange/20 mb-6 group-hover:text-brand-orange/40 transition-colors" />
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{t.author}</p>
                <p className="text-brand-orange font-medium text-sm mt-1">{t.role}</p>
                <p className="text-white/40 text-sm mt-0.5">{t.university}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
