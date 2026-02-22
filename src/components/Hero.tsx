import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Magical Glows */}
      <div className="magical-glow w-[500px] h-[500px] bg-brand-primary -top-48 -left-24"></div>
      <div className="magical-glow w-[400px] h-[400px] bg-emerald-500 bottom-0 -right-24"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex text-brand-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              A legnyugodtabb óra a héten
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-10 font-serif italic">
            Lépj ki a <span className="text-brand-primary not-italic">labirintusból</span>
          </h1>

          <p className="text-xl md:text-2xl opacity-70 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Túlgondolod az életed? A Kincskereső Meseterápia szimbólumokon keresztül kerüli meg a racionális elmét, hogy közvetlenül a lelkednek adjon választ.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Kérem az ingyenes konzultációt
            </a>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-12 h-12 rounded-full border-2 border-brand-bg object-cover"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">100+ sikeres folyamat</p>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Önismereti utazás</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
        >
          <div className="relative pt-[56.25%] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
            <iframe 
              src="https://player.vimeo.com/video/1106238166?badge=0&autopause=0&player_id=0&app_id=58479" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              title="Barcza Katalin Meseterápiás Szakember"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-50"></div>
          </div>
          
          <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 glass-card p-4 md:p-8 w-[90%] md:w-full max-w-md text-center">
            <p className="text-sm md:text-lg italic font-serif leading-relaxed">
              "A mese szimbólumai olyan kapukat nyitnak meg, amiket a logika zárva tart."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
