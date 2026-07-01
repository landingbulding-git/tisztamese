import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Milyen meseterápiás módszert alkalmaznak?",
    a: "A Kincskereső Meseterápiás Módszer a tudattalannal dolgozik. Mivel a tudattalanunk legjobb kifejezési eszközei a képek és a szimbólumok, a népmesék képi világa kiválóan alkalmas arra, hogy ezeket a szimbolikus tartalmakat közvetítse, és általuk jól megélhető módon férjünk hozzá ezekhez a tartalmakhoz."
  },
  {
    q: "Nem tudok szépen rajzolni.",
    a: "Ez nem rajzszakkör. A pálcikaember is tökéletes, ha az a lelked igazságát tükrözi. A folyamat mélysége független a művészi tehetségtől."
  },
  {
    q: "Van-e életkori határa a részvételnek?",
    a: "Nincs felső korhatár; a betöltött 20. év felett bárki jöhet, aki érdeklődik. Akár 70-80 évesen is aktuális és hasznos ez a munka. Amíg lélegzünk, addig jó esetben előrefelé haladunk és fejlődünk, így az önmagunkkal való foglalkozást és a belső kapcsolatot idős korban sem érdemes letenni."
  }
];

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-20 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-12">Gyakran Ismételt Kérdések</h2>
        
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-white/30 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 opacity-70 leading-relaxed border-t border-black/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
