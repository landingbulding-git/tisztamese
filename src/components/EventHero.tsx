import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export const EventHero = () => {
  return (
    <section className="relative pt-0 pb-12 md:pb-20 overflow-hidden">
      {/* Strawberry red glow */}
      <div className="magical-glow w-[500px] h-[500px] bg-red-500 -top-48 -left-24"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cover Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.3)] mb-12 md:mb-20"
        >
          <img
            src="https://picsum.photos/1200/400?random=event"
            alt="Event Cover"
            className="w-full h-48 md:h-96 object-cover"
          />

          {/* Overlaid Event Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-6 md:left-12 -mb-16 md:-mb-20 z-20"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.4)] border-4 border-white/20 bg-brand-bg">
              <img
                src="https://picsum.photos/150/200?random=event2"
                alt="Event Image"
                className="w-32 h-40 md:w-40 md:h-52 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24">
          {/* Spacer for image overlay */}
          <div className="hidden md:block"></div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white leading-tight">
              Az Anyák{' '}
              <span className="text-red-500">Ünnepélye</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
              Csatlakozz egy különleges eseményre, ahol megtisztelhetjük az anyákat. Telt ház, vidám hangulatú ünnepség, ahol az érzelmi közelség az elsődleges cél.
            </p>

            {/* Date and Time */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-500/10 border border-red-500/30">
                  <Calendar className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wide">Dátum</p>
                  <p className="text-lg md:text-xl font-semibold text-white">2026. június 29.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-500/10 border border-red-500/30">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wide">Időpont</p>
                  <p className="text-lg md:text-xl font-semibold text-white">18:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] uppercase tracking-widest text-sm"
            >
              Szeretnék regisztrálni az eseményre
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
