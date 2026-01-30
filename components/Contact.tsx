import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MessageCircle, Clock, Check } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="bg-brand-600 rounded-[2rem] shadow-2xl overflow-hidden text-white relative transform transition-transform hover:scale-[1.01] duration-500">
            
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif mb-6">Agenda tu Primera Sesión</h2>
                <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                  Dar el primer paso es lo más importante. Escríbenos para coordinar tu hora y comenzar tu camino hacia el bienestar.
                </p>
                
                <div className="space-y-6 mb-10 bg-brand-700/30 p-6 rounded-2xl border border-brand-500/30">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Clock className="w-5 h-5 text-brand-200" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-200 uppercase font-bold tracking-wide mb-1">Disponibilidad</p>
                      <p className="font-medium text-white">Lunes a Viernes: {CONTACT_INFO.hours.weekdays}</p>
                      <p className="font-medium text-white">Sábados: {CONTACT_INFO.hours.saturdays}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-brand-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg w-full sm:w-auto transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contactar por WhatsApp
                </a>
                <p className="mt-4 text-brand-200 text-sm text-center sm:text-left">
                  * Respuesta rápida garantizada
                </p>
              </div>
              
              <div className="relative h-64 lg:h-auto overflow-hidden">
                {/* Luxury/Modern Reception Image */}
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                  alt="Recepción Centro Clínico" 
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};