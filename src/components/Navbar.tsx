import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg rotate-12 flex items-center justify-center text-white font-bold">M</div>
          <span className="font-serif text-2xl font-bold tracking-tighter">Meselabirintus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#how-it-works" className="hover:text-brand-primary transition-colors">Hogyan működik?</a>
          <a href="https://norbertai.notion.site/Minden-mese-egy-lehet-s-g-a-kapcsol-d-sra-201b3a2e7a0c804581cfff1c41045abb" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Mesék</a>
          <a href="https://norbertai.notion.site/Meseter-pi-s-alkalmak-l-ben-k-z-ss-gben-kappl-dva-201b3a2e7a0c806b9ccdd7df48b1c5e2?source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Események</a>
          <a href="#faq" className="hover:text-brand-primary transition-colors">GYIK</a>
          <a href="#contact" className="btn-primary py-3 px-8 text-[10px]">Jelentkezés</a>
        </div>

        <button className="md:hidden p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-brand-ink mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-brand-ink mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-brand-ink transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-brand-bg/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-sm font-bold uppercase tracking-[0.2em]">
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-brand-primary transition-colors">Hogyan működik?</a>
              <a href="https://norbertai.notion.site/Minden-mese-egy-lehet-s-g-a-kapcsol-d-sra-201b3a2e7a0c804581cfff1c41045abb" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="hover:text-brand-primary transition-colors">Mesék</a>
              <a href="https://norbertai.notion.site/Meseter-pi-s-alkalmak-l-ben-k-z-ss-gben-kappl-dva-201b3a2e7a0c806b9ccdd7df48b1c5e2?source=copy_link" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="hover:text-brand-primary transition-colors">Események</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-brand-primary transition-colors">GYIK</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary py-3 px-8 text-[10px] w-full text-center mt-4">Jelentkezés</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
