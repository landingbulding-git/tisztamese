import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export const EventHero = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://tally.so/r/Meq8PY';
  };

  return (
    <section className="relative bg-red-100 pt-0 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto px-0">
        {/* Cover Image - Full Width with Responsive Border Radius */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-0 md:rounded-3xl overflow-hidden shadow-lg"
          style={{
            maxHeight: '240px',
          }}
        >
          <img
            src="https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/cover2.webp"
            alt="Event Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-100/60"></div>
        </motion.div>

        {/* Event Image - Overlapped with Negative Margin */}
        <div className="flex justify-start px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mt-12 md:-mt-16 mb-6 md:mb-8 z-20"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white/10 backdrop-blur-sm">
              <img
                src="https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/anyaseb_kati.webp"
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-6 md:px-12 flex flex-col gap-4 md:gap-5"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Anyaseb:<span className="text-red-500"> személyes mesefoglalkozás felnőtt nőknek</span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2 md:gap-4 items-center text-sm md:text-base">
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <Clock className="w-5 h-5" />
                <span>18:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2 text-black/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Budakalász</span>
              </div>
            </div>
            <div className="text-sm md:text-base text-black/70 font-medium space-y-1">
              <div>
                <span className="text-red-500 font-semibold">Hétfői sorozat:</span> 07.20., 08.10., 08.24.
              </div>
              <div>
                <span className="text-red-500 font-semibold">Keddi sorozat:</span> 07.21., 08.11., 08.25.
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl font-light space-y-4">
            <p>
              Életünk <b>legelső kapcsolata az édesanyánkhoz</b> köt – ez a kötelék határozza meg, hogyan látjuk önmagunkat és a világot. De mi történik akkor, ha a <b>szeretet helyett akaratlanul is sebeket</b> kaptunk?
            </p>
            <p>
              Hogyan válhatunk az <b>elutasított „mostohalányból" újra teljes és egész felnőtté</b>? A <b>népmesék évezredes szimbólumai</b> segítenek rátekinteni a régi sebekre, elindítják a <b>feldolgozást</b>, és feltöltenek pozitív tartalommal. Ebben a belső munkában a <b>történetek a legbiztonságosabb társaink</b>.
            </p>
          </div>

          {/* Event Info */}
          <div className="text-sm md:text-base text-black/60 font-medium space-y-1">
            <p><b>Ár:</b> 18.000 Ft/alkalom – 54.000 Ft/sorozat</p>
            <p><b>Előleg:</b> 14.000 Ft</p>
          </div>

          {/* CTA Button */}
          <motion.button
            type="button"
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-base w-full md:w-auto mt-6"
          >
            Részt veszek az eseményen
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
