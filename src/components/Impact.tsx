import React from 'react';
import { Quote, Users, GraduationCap, Building2, UserCircle, Briefcase, HandHeart } from 'lucide-react';

const stats = [
  { value: "300+", label: "People Helped", icon: Users },
  { value: "$300k+", label: "Scholarships Secured", icon: GraduationCap },
  { value: "50+", label: "Higher Ed Placements", icon: Building2 },
  { value: "50+", label: "Active Mentors", icon: UserCircle },
  { value: "100+", label: "Job Referrals", icon: Briefcase },
  { value: "$0", label: "Cost to Students", icon: HandHeart },
];

const reviews = [
  {
    quote: "Got my resume reviewed and was referred to my dream tech role in Canada. Life changing.",
    author: "Sara K.",
    role: "Software Engineer",
  },
  {
    quote: "The admissions strategy helped me secure a fully-funded Master's in the USA. Incredible free mentorship.",
    author: "Ali M.",
    role: "Graduate Student",
  },
  {
    quote: "I thought studying abroad was impossible without funds. Aik Kadam showed me the roadmap to a full-ride scholarship.",
    author: "Fatima R.",
    role: "Data Scientist",
  },
  {
    quote: "The mock interviews and insider referrals gave me the confidence to crack consulting interviews.",
    author: "Omar S.",
    role: "Consultant",
  },
  {
    quote: "They don't just give advice; they give you a network. I owe my first international job to this community.",
    author: "Zainab T.",
    role: "Product Manager",
  },
  {
    quote: "Literally unlocked doors I didn't even know existed. Free, genuine, and high impact.",
    author: "Hassan A.",
    role: "PhD Candidate",
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 relative z-10 bg-[#09090b] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Our Impact So Far</h2>
        <h3 className="text-4xl md:text-5xl font-sans font-black text-white">Numbers that matter.</h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:border-brand-orange/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all">
              <stat.icon className="text-brand-orange w-6 h-6" />
            </div>
            <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
            <p className="text-sm md:text-base text-white/60 font-medium uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h3 className="text-3xl md:text-4xl font-sans font-black text-white">Don't just take our word for it.</h3>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-lr w-max">
          {/* Double the list to make it infinitely scroll seamlessly */}
          {[...reviews, ...reviews, ...reviews].map((t, index) => (
            <div 
              key={index}
              className="w-[350px] md:w-[450px] mx-4 shrink-0 glass-panel p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <Quote className="text-brand-orange/30 w-10 h-10 mb-6" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-white mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-black flex items-center justify-center font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">{t.author}</h5>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
