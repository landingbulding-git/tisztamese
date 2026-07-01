import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export const EventHero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [result, setResult] = useState<'' | 'success' | 'error'>('');
  const [isLoading, setIsLoading] = useState(false);

  const fields = [
    { name: 'name', label: 'Keresztnév', placeholder: 'Vezetéknév Keresztnév' },
    { name: 'email', label: 'E-mail cím', placeholder: 'email@pelda.hu' },
  ];

  const currentField = fields[currentStep];
  const isStepValid = formData[currentField.name as keyof typeof formData]?.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const handleNext = async () => {
    if (!isStepValid) return;

    if (currentStep < fields.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid) return;

    setIsLoading(true);
    try {
      // Send to Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("access_key", "1ef4365a-f208-423a-b323-2c8b3ee304c3");

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      // Send to webhook
      const webhookResponse = await fetch(
        "https://demo.lupio.hu/webhook/bae077dc-a399-4bfc-8572-af104c358765",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            event: "Anyaseb: online mesefoglalkozás felnőtt nőknek",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      const web3Data = await web3Response.json();

      if (web3Data.success && webhookResponse.ok) {
        setResult("success");
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    } finally {
      setIsLoading(false);
    }
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
                src="https://pmfyfnpyhiyhb9bc.public.blob.vercel-storage.com/katievent.webp"
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
            Anyaseb:<span className="text-red-500"> online mesefoglalkozás felnőtt nőknek</span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-2 md:gap-4 items-center text-sm md:text-base">
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <Calendar className="w-5 h-5" />
              <span>2026.07.08.</span>
            </div>
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <Clock className="w-5 h-5" />
              <span>18:00 - 20:30</span>
            </div>
            <div className="flex items-center gap-2 text-black/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Online</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl font-light">
            Életünk legelső kapcsolata az édesanyánkhoz köt – ez a kötelék határozza meg, hogyan látjuk önmagunkat és a világot. De mi történik akkor, ha a szeretet helyett akaratlanul is sebeket kaptunk? Hogyan válhatunk az elutasított „mostohalányból" újra teljes és egész felnőtté? A népmesék évezredes szimbólumai segítenek rátekinteni a régi sebekre, elindítják a feldolgozást, és feltöltenek pozitív tartalommal. Ebben a belső munkában a történetek a legbiztonságosabb társaink.
          </p>

          {/* Event Info */}
          <p className="text-sm md:text-base text-black/60 font-medium">
            Az esemény ingyenes de regisztrációhoz kötött.
          </p>

          {/* Registration Form */}
          {result === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-4 mt-6 max-w-2xl items-center py-8"
            >
              <CheckCircle size={64} className="text-emerald-500" />
              <h3 className="text-2xl font-bold text-black">Köszönjük a regisztrációt!</h3>
              <p className="text-black/70">Hamarosan kapcsolatba lépünk veled.</p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-6 mt-6 max-w-2xl">
              {/* Progress indicator */}
              <div className="flex gap-2">
                {fields.map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      backgroundColor: idx <= currentStep ? 'rgb(239, 68, 68)' : 'rgb(200, 200, 200)',
                    }}
                    className="h-1 flex-1 rounded-full"
                  />
                ))}
              </div>

              {/* Current field */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-end gap-3"
                >
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-black mb-2">
                      {currentField.label} *
                    </label>
                    <input
                      type={currentField.name === 'email' ? 'email' : 'text'}
                      name={currentField.name}
                      id={currentField.name}
                      value={formData[currentField.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder={currentField.placeholder}
                      autoFocus
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border-2 border-red-200 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Red button next to field */}
                  <motion.button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid || isLoading}
                    whileHover={isStepValid ? { scale: 1.1 } : {}}
                    whileTap={isStepValid ? { scale: 0.95 } : {}}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all flex-shrink-0 flex items-center justify-center"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Error message */}
              {result === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg text-sm font-medium bg-red-100 text-red-800 border border-red-300"
                >
                  Hiba történt. Kérlek próbáld meg újra!
                </motion.div>
              )}
            </form>
          )}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
