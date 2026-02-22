import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg rotate-12 flex items-center justify-center text-white font-bold">M</div>
          <span className="font-serif text-2xl font-bold tracking-tighter">Meselabirintus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#how-it-works" className="hover:text-brand-primary transition-colors">Hogyan működik?</a>
          <a href="#testimonials" className="hover:text-brand-primary transition-colors">Vélemények</a>
          <a href="#faq" className="hover:text-brand-primary transition-colors">GYIK</a>
          <a href="#contact" className="btn-primary py-3 px-8 text-[10px]">Jelentkezés</a>
        </div>

        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-brand-ink mb-1.5"></div>
          <div className="w-6 h-0.5 bg-brand-ink mb-1.5"></div>
          <div className="w-6 h-0.5 bg-brand-ink"></div>
        </button>
      </div>
    </nav>
  );
};
