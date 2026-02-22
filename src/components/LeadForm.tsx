import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const LeadForm = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-12 text-center flex flex-col items-center gap-6">
        <CheckCircle size={64} className="text-emerald-500" />
        <h3 className="text-3xl">Köszönöm a jelentkezést!</h3>
        <p className="opacity-70">Hamarosan keresni foglak a megadott elérhetőségeken.</p>
      </div>
    );
  }

  return (
    <div id="contact" className="glass-card p-8 md:p-12 shadow-2xl">
      <h3 className="text-3xl mb-2">Kezdd el az utazást ma</h3>
      <p className="opacity-60 mb-8">Töltsd ki az űrlapot az ingyenes konzultációhoz.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Név</label>
          <input type="text" required className="input-field" placeholder="Hogy szólíthatunk?" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">E-mail</label>
          <input type="email" required className="input-field" placeholder="pelda@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Miben segíthetek?</label>
          <textarea rows={4} className="input-field resize-none" placeholder="Írd le röviden az elakadásodat..."></textarea>
        </div>
        
        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
          Kérem az ingyenes konzultációt
          <Send size={18} />
        </button>

        <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <span>100% bizalmas</span>
          <span>Nincs elköteleződés</span>
          <span>Válasz 24 órán belül</span>
        </div>
      </form>
    </div>
  );
};
