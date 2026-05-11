import React, { useEffect, useState, useRef } from 'react';
import { Quote, Users, GraduationCap, Building2, UserCircle, Briefcase, HandHeart } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';

const stats = [
  { value: 300, prefix: "", suffix: "+", label: "People Helped", icon: Users },
  { value: 300, prefix: "$", suffix: "k+", label: "Scholarships Secured", icon: GraduationCap },
  { value: 50, prefix: "", suffix: "+", label: "Higher Ed Placements", icon: Building2 },
  { value: 50, prefix: "", suffix: "+", label: "Active Mentors", icon: UserCircle },
  { value: 100, prefix: "", suffix: "+", label: "Job Referrals", icon: Briefcase },
  { value: 0, prefix: "$", suffix: "", label: "Cost to Students", icon: HandHeart },
];

function CountUpStat({ 
  value, 
  prefix, 
  suffix 
}: { 
  value: number; 
  prefix: string; 
  suffix: string; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

const reviews = [
  {
    quote: "Got my resume reviewed and was referred to my dream tech role in Canada. Life changing.",
    author: "Sara K.",
    role: "Software Engineer",
  },
  {
    quote: "I thought studying abroad was just a dream for someone from my background. With their step-by-step guidance, I secured a $120k scholarship to my dream university. It changed my family's life.",
    author: "Zainab R.",
    role: "Full-ride Scholar",
  },
  {
    quote: "The admissions strategy helped me secure a fully-funded Master's in the USA. Incredible free mentorship.",
    author: "Ali M.",
    role: "Graduate Student",
  },
  {
    quote: "When I had lost hope after multiple rejections, they helped me rebuild my profile and craft a compelling story. Now I'm heading to Germany on a DAAD scholarship.",
    author: "Ahmad H.",
    role: "DAAD Scholar",
  },
  {
    quote: "I thought studying abroad was impossible without funds. Aik Kadam showed me the roadmap to a full-ride scholarship.",
    author: "Fatima R.",
    role: "Data Scientist",
  },
  {
    quote: "The personalized mentorship I received was incredible. They didn't just give advice; they held my hand through the entire process. I owe my $80k fellowship entirely to this initiative.",
    author: "Ayesha M.",
    role: "Global Leader Fellow",
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
          <motion.div 
            key={i} 
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:border-brand-orange/50 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all">
              <stat.icon className="text-brand-orange w-6 h-6" />
            </div>
            <p className="text-4xl md:text-5xl font-black text-white mb-2">
              <CountUpStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="text-sm md:text-base text-white/60 font-medium uppercase tracking-widest">{stat.label}</p>
          </motion.div>
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
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[350px] md:w-[450px] mx-4 shrink-0 glass-panel p-8 rounded-[2rem] flex flex-col justify-between cursor-pointer hover:border-brand-orange/30 transition-colors"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
