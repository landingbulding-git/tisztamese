import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Bejelentkezés",
    desc: "Töltsd ki az űrlapot és foglalj időpontot egy rövid beszélgetésre."
  },
  {
    num: "02",
    title: "Személyre szabott választás",
    desc: "Kiválasztjuk azt a népmesét, ami leginkább rezonál a jelenlegi élethelyzeteddel."
  },
  {
    num: "03",
    title: "A belső munka",
    desc: "Relaxált mesehallgatás és alkotás, ahol én tartom számodra a biztonságos teret."
  },
  {
    num: "04",
    title: "Megérkezés",
    desc: "Tisztább rálátás az életedre és újult erő a továbblépéshez."
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-20">Találj rá a megoldásra 4 egyszerű lépésben</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <span className="font-serif text-8xl opacity-5 absolute -top-10 -left-4 select-none">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-70 leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-[1px] bg-black/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
