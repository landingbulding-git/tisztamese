import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <div className="font-serif text-3xl font-bold mb-4 italic tracking-tighter">Meselabirintus</div>
          <p className="text-sm opacity-40 max-w-xs">A mesék gyógyító ereje mindenki számára elérhető, aki mer elindulni a belső úton.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity">Adatkezelés</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Impresszum</a>
          <a href="#" className="hover:opacity-100 transition-opacity">GYIK</a>
          <span>© 2026 Barcza Katalin</span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Kapcsolat</p>
          <a href="mailto:mesefejtes@gmail.com" className="text-lg font-medium hover:text-brand-primary transition-colors">
            mesefejtes@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
