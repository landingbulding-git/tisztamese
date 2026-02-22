import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Compass } from 'lucide-react';

const props = [
  {
    icon: Sparkles,
    title: "Relaxált mesehallgatás",
    benefit: "Hogy a válaszok maguktól bukkanjanak fel",
    description: "Az ellazult állapot kikapcsolja a napi stresszt, így a történet szimbólumai mélyebben hatnak és belső képeket hívnak elő."
  },
  {
    icon: Palette,
    title: "Intuitív alkotás",
    benefit: "Hogy láthatóvá váljon, amit nem tudsz kimondani",
    description: "Nem a rajz szépsége, hanem az igazsága számít. A kezed olyan érzéseket hoz felszínre, amiket szavakkal nehéz lenne leírni."
  },
  {
    icon: Compass,
    title: "Szimbólumfejtés",
    benefit: "Hogy gyakorlati útmutatást kapj a mindennapokhoz",
    description: "Közösen fejtjük meg az alkotásod üzenetét, ami segít elmozdulni a belső „homokszemekről”."
  }
];

export const ValueProps = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl mb-8 italic">Milyen hatást keresel?</h2>
          <p className="text-xl opacity-60 font-light">A Kincskereső módszer segít abban, hogy a tudatalattid üzenetei érthetővé váljanak.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <img 
                src={`https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/alkot%C3%A1s.jpg`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={p.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 backdrop-blur-xl flex items-center justify-center mb-6 text-brand-primary border border-white/10">
                  <p.icon size={28} />
                </div>
                <h3 className="text-3xl mb-3 font-serif italic">{p.title}</h3>
                <p className="text-brand-primary font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">{p.benefit}</p>
                <p className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm leading-relaxed max-w-[240px]">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
