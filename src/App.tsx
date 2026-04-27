import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
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
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFD180] rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#FFAB00] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-[#FFF9C4] rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero onOpenModal={openModal} />
          <Story />
          <Testimonials />
          <WhatWeDo />
          <Impact />
          <GetInvolved onOpenModal={openModal} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
