import React from 'react';
import { LeadForm } from './LeadForm';

export const Closer = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-brand-bg via-brand-bg/80 to-brand-primary/70">
      {/* Magical Glows */}
      <div className="magical-glow w-[800px] h-[800px] bg-brand-primary -bottom-48 -right-48 opacity-40"></div>
      <div className="magical-glow w-[400px] h-[400px] bg-brand-primary -top-24 -left-24 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-60">A lehetőség</p>
            <h2 className="text-6xl md:text-8xl mb-10 leading-[0.9] italic">Készen állsz a saját mesédre?</h2>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">✓</div>
                <h4 className="font-bold mb-2">Ingyenes konzultáció</h4>
                <p className="text-sm opacity-70">Kötöttségek nélkül beszélhetünk az elakadásodról.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">✓</div>
                <h4 className="font-bold mb-2">Biztonságos tér</h4>
                <p className="text-sm opacity-70">Nálunk minden szó és kép bizalmas marad.</p>
              </div>
            </div>

            <p className="text-2xl italic font-serif opacity-80 max-w-md">
              „Csak egy kattintás választ el a belső rendtől.”
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full"></div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};
