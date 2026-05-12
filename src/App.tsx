import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import WhatWeDo from './components/WhatWeDo';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIntention, setModalIntention] = useState<'mentee' | 'mentor'>('mentee');

  const openModal = (intention: 'mentee' | 'mentor') => {
    setModalIntention(intention);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-bg font-sans text-warm-ink selection:bg-brand-orange/30 relative flex flex-col overflow-hidden">
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        intention={modalIntention} 
      />

      {/* Animated Mesh Background (Golden Amber Tones) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, -30, 0], 
            y: [0, 30, -50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFD180] rounded-full blur-[140px] opacity-40"
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 40, 0], 
            y: [0, -40, 60, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#FFAB00] rounded-full blur-[120px] opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, 30, -40, 0], 
            y: [0, -50, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-[#FFF9C4] rounded-full blur-[100px] opacity-60"
        />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero onOpenModal={openModal} />
          <Story />
          <WhatWeDo />
          <Impact />
          <GetInvolved onOpenModal={openModal} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
