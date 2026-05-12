import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Handshake, Award } from 'lucide-react';

const offerings = [
  {
    title: 'Higher Education',
    description: 'We help you navigate admissions for Masters and PhDs at global universities, from choosing the right program to building a strong application.',
    icon: GraduationCap,
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-br from-[#18181b] to-black',
  },
  {
    title: 'Fully-Funded Scholarships',
    description: 'Don\'t let finances stop you. We help you find and apply for grants, fellowships, and full-ride scholarships.',
    icon: Award,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-orange text-black',
  },
  {
    title: 'Job Placements',
    description: 'Looking to land a role abroad? We provide resume reviews, interview prep, and career guidance.',
    icon: Briefcase,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-sand',
  },
  {
    title: 'Industry Referrals',
    description: 'We connect you with professionals across North America and Europe who can offer advice and point you in the right direction.',
    icon: Handshake,
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-tl from-[#18181b] to-[#27272a]',
  }
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-16 md:py-20 relative z-10 w-full bg-warm-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">The Playbook</h2>
          <h3 className="text-5xl md:text-6xl font-sans font-black text-white tracking-tight">What We Do</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`rounded-[2rem] p-8 md:p-10 border border-white/5 shadow-2xl flex flex-col justify-between overflow-hidden relative group cursor-pointer ${item.colSpan} ${item.bg}`}
            >
              <div className="relative z-10 mb-8">
                <item.icon size={48} className={`mb-6 ${index === 1 ? 'text-black' : 'text-brand-orange'}`} />
                <h4 className={`text-2xl font-extrabold mb-4 ${index === 1 ? 'text-black' : 'text-white'}`}>
                  {item.title}
                </h4>
                <p className={`text-lg leading-relaxed ${index === 1 ? 'text-black/80 font-medium' : 'text-white/60'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
