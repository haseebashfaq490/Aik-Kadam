import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  intention: 'mentee' | 'mentor';
}

export default function ApplicationModal({ isOpen, onClose, intention }: ApplicationModalProps) {
  if (!isOpen) return null;

  const subject = intention === 'mentor' 
    ? "New Mentor Application Request" 
    : "New Guidance Application Request";

  const title = intention === 'mentor'
    ? "Become a Mentor"
    : "Apply for Guidance";

  const description = intention === 'mentor'
    ? "Join our network of professionals leading the next generation."
    : "Take your first step. Fill out the details below to get started.";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-auto overflow-hidden text-left"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
          <p className="text-white/60 mb-8">{description}</p>

          <form action="https://formsubmit.co/haseeb.ashfaq490@gmail.com" method="POST" className="space-y-4">
            {/* Formsubmit Configuration */}
            <input type="hidden" name="_subject" value={subject} />
            <input type="hidden" name="Application Type" value={intention} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input required type="text" name="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Email Address</label>
                <input required type="email" name="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Phone Number</label>
                <input required type="tel" name="Phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">City</label>
                <input required type="text" name="City" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="New York" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Country</label>
                <input required type="text" name="Country" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="United States" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Profession</label>
                <input required type="text" name="Profession" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Software Engineer" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Company / University</label>
              <input required type="text" name="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Google / MIT" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/80">Details / How can we help?</label>
              <textarea required name="Details" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none" placeholder="Tell us a bit about your goals..."></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full py-4 rounded-xl bg-brand-orange text-black font-bold text-lg hover:bg-brand-orange-dark transition-all hover:scale-[1.02] active:scale-[0.98]">
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
