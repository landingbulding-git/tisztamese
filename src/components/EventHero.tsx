import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const EventHero = () => {
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
            src="https://picsum.photos/1200/675?random=event"
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
                src="https://picsum.photos/200/200?random=event2"
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
            Az Anyák <span className="text-red-500">Ünnepélye</span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-2 md:gap-4 items-center text-sm md:text-base">
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <Calendar className="w-5 h-5" />
              <span>2026. június 29.</span>
            </div>
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <Clock className="w-5 h-5" />
              <span>18:00 - 21:00</span>
            </div>
            <div className="flex items-center gap-2 text-black/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Budapest</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl font-light">
            Csatlakozz egy különleges eseményre, ahol megtisztelhetjük az anyákat. Telt ház, vidám hangulatú ünnepség, ahol az érzelmi közelség az elsődleges cél.
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 mt-6 max-w-2xl">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-black mb-2">
                Keresztnév
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Vezetéknév Keresztnév"
                className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                E-mail cím
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@pelda.hu"
                className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 md:px-10 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] uppercase tracking-widest text-sm"
            >
              Szeretnék regisztrálni az eseményre
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
