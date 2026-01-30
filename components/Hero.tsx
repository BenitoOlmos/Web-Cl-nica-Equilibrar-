import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const SLIDES = [
  {
    // Minimalist Luxury Interior - Beige tones, high end furniture, very calm
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=2000&q=80",
    alt: "Espacio terapéutico minimalista y exclusivo"
  },
  {
    // Abstract Calm - Nature/Light shadow, very spa-like and expensive feel
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80",
    alt: "Bienestar y armonía visual"
  },
  {
    // High-end Architecture - Open space, light, connecting with nature
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80",
    alt: "Entorno de tranquilidad absoluta"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-slate-100">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className={`w-full h-full object-cover slide-image ${index === currentSlide ? 'slide-active' : 'slide-hidden'}`}
            />
            {/* Overlay Gradient - Lighter/Cleaner for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10"></div>
          </div>
        ))}
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-2 hidden md:flex">
        <button onClick={prevSlide} className="p-2 rounded-full bg-white/50 hover:bg-white text-slate-700 transition-colors backdrop-blur-sm border border-slate-200">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full bg-white/50 hover:bg-white text-slate-700 transition-colors backdrop-blur-sm border border-slate-200">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-brand-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Activity className="w-3 h-3" />
            <span>Alianza con Corporación 3i+D</span>
          </div>
          
          <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 mb-6 leading-[1.1]">
            Recupera tu <br />
            <span className="text-brand-600 italic relative inline-block">
              Equilibrio
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-300/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <br />y Bienestar
          </h1>
          
          <p className="animate-slide-up text-lg md:text-xl text-slate-700 mb-10 font-light leading-relaxed max-w-lg drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
            Un espacio clínico de alta gama donde la excelencia profesional y la serenidad del entorno transforman tu bienestar.
          </p>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 items-start" style={{ animationDelay: '0.4s' }}>
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200/50 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Agendar mi Cita
            </a>
            <a 
              href="#servicios"
              className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              Conocer Servicios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-600" />
            </a>
          </div>

          <div className="animate-slide-up mt-12 flex items-center gap-4 text-sm text-slate-600 font-medium" style={{ animationDelay: '0.6s' }}>
             <div className="flex -space-x-3">
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" alt="Specialist" />
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80" alt="Specialist" />
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80" alt="Specialist" />
             </div>
             <p className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/50 shadow-sm">
               Equipo clínico <span className="text-brand-700 font-bold">certificado</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};