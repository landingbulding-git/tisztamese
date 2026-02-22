import React from 'react';
import { motion } from 'motion/react';

const benefits = [
  {
    title: "Rálátsz belső kincseidre",
    description: "A mese képei és szimbólumai finoman segítenek felfedezni azt, ami benned már régóta ott van, csak eddig rejtve maradt.",
    image: "https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/belsokincs.jpg"
  },
  {
    title: "Elmozdulás az elakadásokból",
    description: "Amikor úgy érzed, nem tudsz továbbmenni, a mese segíthet kimozdítani a belső \"homokszemet\" gyengéden, de határozottan.",
    image: "https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/624200989_1345281304296564_7809156898883331192_n.jpg"
  },
  {
    title: "Megnyugvás és belső rend",
    description: "A foglalkozások után gyakran jelenik meg a felismerés: minden összefügg, és a változás kulcsa ott van benned.",
    image: "https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/megnyugvas.jpg"
  }
];

export const ZigZagBenefits = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="space-y-32">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                  Előnyök
                </div>
                <h2 className="text-4xl md:text-6xl italic leading-tight">{benefit.title}</h2>
                <p className="text-xl opacity-70 font-light leading-relaxed">
                  {benefit.description}
                </p>
                <div className="pt-4">
                   <div className="w-12 h-[1px] bg-brand-primary"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-2xl group-hover:bg-brand-primary/20 transition-colors"></div>
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="magical-glow w-[400px] h-[400px] bg-brand-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
    </section>
  );
};
