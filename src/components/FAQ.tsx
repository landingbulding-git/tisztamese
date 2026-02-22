import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Ez felnőtteknek is való?",
    a: "Igen. A népmesék archetípusai nem gyerekeknek 'kitalált' történetek – ősi szimbólumokat hordoznak, amelyek a felnőtt élet kérdéseire is mély válaszokat adhatnak. A módszer 12 éves kor felett alkalmazható."
  },
  {
    q: "Nem tudok szépen rajzolni.",
    a: "Ez nem rajzszakkör. A pálcikaember is tökéletes, ha az a lelked igazságát tükrözi. A folyamat mélysége független a művészi tehetségtől."
  },
  {
    q: "Akadály lehet-e, hogy nem szeretem a meséket?",
    a: "Nem akadály. A nyitottság éppen elegendő. A mesei szimbólumok ugyanúgy dolgoznak a tudatalattinkban akkor is, ha a mese megérint vagy ha éppen nem tetszik."
  }
];

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16">Gyakran Ismételt Kérdések</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/30 transition-colors"
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
