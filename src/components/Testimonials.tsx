import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Jázmin",
    age: 16,
    title: "„Végre tudok beszélni az érzéseimről.”",
    text: "Én azért jöttem meseterápiára, mert nehezen mondtam el, hogy mit érzek. Most már sokszor beszélgetek hozzám közel álló emberekkel olyan dolgokról, amikről eddig nem."
  },
  {
    name: "D. Marianna",
    age: 45,
    title: "„Örömömet lelem az életben.”",
    text: "Megtanultam észrevenni saját értékeimet. Új hobbim lett, kórusba járok énekelni, és végtelenül fölszabadít. Reggelente nem fáradtan, hanem jókedvűen kelek fel."
  },
  {
    name: "N. Barbara",
    age: 15,
    title: "„Megtaláljuk a belső énjét.”",
    text: "Amikor beszéltünk a választott jelenetről, volt egy olyan érzésem, hogy az embert jobban meg tudjuk ismerni, megtaláljuk a belső énjét, amit a hétköznapokban nem látunk."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="magical-glow w-[600px] h-[600px] bg-brand-primary -bottom-48 -left-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-brand-primary font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">Vélemények</p>
            <h2 className="text-5xl md:text-7xl italic">Már több tucatnyian találtak rá saját belső kincsükre</h2>
          </div>
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">←</div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">→</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-10 flex flex-col ${idx === 1 ? 'md:-translate-y-8 border-brand-primary/30' : ''}`}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-brand-primary/20 rounded-full blur-sm"></div>
                  <img 
                    src={`https://picsum.photos/seed/testi${idx}/100/100`} 
                    className="w-14 h-14 rounded-full object-cover relative z-10 border border-white/10"
                    alt={t.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{t.name}, {t.age}</p>
                  <div className="flex text-brand-primary text-xs">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif italic mb-6 leading-tight">"{t.title}"</h4>
              <p className="opacity-60 leading-relaxed font-light">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
