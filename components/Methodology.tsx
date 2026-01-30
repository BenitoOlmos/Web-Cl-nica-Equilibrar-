import React from 'react';
import { LEVELS, ALLIANCE_INFO } from '../constants';
import { CheckCircle2, Microscope } from 'lucide-react';
import { Reveal } from './Reveal';

export const Methodology: React.FC = () => {
  return (
    <div id="modelo">
      {/* Levels of Attention */}
      <section className="py-20 bg-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">Enfoque Integral</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">Atención Adaptada a Ti</h3>
              </Reveal>
              
              <div className="space-y-6">
                {LEVELS.map((level, index) => (
                  <Reveal key={index} delay={index * 0.15}>
                    <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors hover:shadow-md">
                      <div className="flex-shrink-0 mt-1 text-brand-500 p-3 bg-brand-50 rounded-xl h-fit">
                        {level.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{level.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{level.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                 <Reveal delay={0.2}>
                   {/* Clean architectural minimalism */}
                   <img 
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80" 
                      alt="Espacio Individual" 
                      className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8 hover:scale-[1.02] transition-transform duration-500"
                   />
                 </Reveal>
                 <Reveal delay={0.4}>
                   {/* Serene, light-filled collaborative space */}
                   <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                      alt="Espacio Colaborativo" 
                      className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                   />
                 </Reveal>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Alliance */}
      <section id="nosotros" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Reveal width="100%">
              <Microscope className="w-12 h-12 text-brand-400 mx-auto mb-6" />
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Respaldo Científico</h2>
              <h3 className="text-3xl md:text-5xl font-serif mb-6">{ALLIANCE_INFO.name}</h3>
              <p className="text-brand-200 text-sm tracking-widest uppercase font-semibold mb-8">{ALLIANCE_INFO.tagline}</p>
              <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
                Trabajamos en alianza estratégica para integrar investigación, innovación y tecnología a tu proceso de bienestar.
              </p>
            </Reveal>
          </div>

          <Reveal width="100%" delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {ALLIANCE_INFO.sectors.map((sector, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300">
                  <span className="text-brand-300 font-medium">{sector}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 pt-16 border-t border-white/10">
             <div className="grid md:grid-cols-2 gap-12">
                <Reveal delay={0.3}>
                   <h4 className="text-xl font-serif mb-6 text-white">Tecnología y Humanidad</h4>
                   <ul className="space-y-4">
                      {['Instrumentos psicométricos validados', 'Plataformas de analítica emocional', 'Ingeniería Emocional Aplicada', 'Metodologías Lean Humanizado'].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </Reveal>
                <Reveal delay={0.4}>
                  <h4 className="text-xl font-serif mb-6 text-white">Confianza Institucional</h4>
                  <div className="flex flex-wrap gap-3">
                    {ALLIANCE_INFO.partners.map((partner, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-brand-500 transition-colors cursor-default hover:shadow-lg hover:shadow-brand-500/20">
                        {partner}
                      </span>
                    ))}
                  </div>
                </Reveal>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};