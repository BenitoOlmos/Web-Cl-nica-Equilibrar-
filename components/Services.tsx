import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3">Tu Bienestar es Primero</h2>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">¿Cómo podemos ayudarte?</h3>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-slate-500 text-lg leading-relaxed">
              Diseñamos experiencias terapéuticas personalizadas para ti y tu familia, integrando lo mejor de la ciencia y la consciencia humana.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div 
                className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:bg-gradient-to-br hover:from-white hover:to-brand-50/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-500 shadow-md mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Saber más <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};