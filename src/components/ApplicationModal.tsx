import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  intention: 'mentee' | 'mentor';
}

export default function ApplicationModal({ isOpen, onClose, intention }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/haseeb.ashfaq490@gmail.com', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      setError('');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-auto overflow-hidden text-left"
        >
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Application Received!</h3>
              <p className="text-white/60 mb-8 max-w-sm mx-auto">
                Thank you for applying. We have received your details and our team will get back to you shortly.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
              <p className="text-white/60 mb-8">{description}</p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Formsubmit Configuration */}
                <input type="hidden" name="_subject" value={subject} />
                <input type="hidden" name="Application Type" value={intention} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

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
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-orange text-black font-bold text-lg hover:bg-brand-orange-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
