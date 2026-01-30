import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Logo dark={true} className="h-10 mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              Salud Mental y Bienestar Integral. Atención científica, humana y digitalmente consciente.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Servicios</a></li>
              <li><a href="#modelo" className="hover:text-brand-400 transition-colors">Modelo de Atención</a></li>
              <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Síguenos</h4>
             <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Centro Clínico Equilibrar. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>En alianza con:</span>
            <span className="text-brand-400 font-semibold">Corporación 3i+D</span>
          </div>
        </div>
      </div>
    </footer>
  );
};