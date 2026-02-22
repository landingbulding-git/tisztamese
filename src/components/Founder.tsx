import React from 'react';
import { motion } from 'motion/react';

export const Founder = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://labirintus.s3.eu-central-1.amazonaws.com/8f1a48d1-7107-4c66-9551-85f01ba31560.jfif" 
                alt="Barcza Katalin" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 glass-card p-6 border-brand-primary/20">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Szakmai háttér</p>
              <p className="text-sm font-medium">Lelki Egészségvédő Alapítvány</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-brand-primary font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">Az útitársad</p>
            <h2 className="text-5xl md:text-7xl mb-10 italic leading-[0.9]">Barcza Katalin – A belső labirintusban</h2>
            <div className="space-y-8 text-xl opacity-70 leading-relaxed font-light">
              <p>
                Meseterápiás szakember, rajzelemzési szakértő és Belső utazás-vezető vagyok. Hiszem, hogy minden élet egy varázslat, és minden ember kincseket hordoz önmagában.
              </p>
              <p>
                A Kincskereső Meseterápiás Módszert a Lelki Egészségvédő Alapítványnál sajátítottam el. Célom, hogy a hozzám fordulók ne csak együttérzést, hanem valódi szakmai támogatást kapjanak.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="italic font-serif text-2xl text-white">
                  "Maga az Út, amelyen járunk, egyedi és csodálatos. Segítek, hogy újra meglásd a saját fényedet."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
