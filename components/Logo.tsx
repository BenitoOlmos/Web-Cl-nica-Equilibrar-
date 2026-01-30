import React from 'react';

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className = "h-12", dark = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brush Stroke Circle Representation */}
      <svg viewBox="0 0 100 100" className="h-full w-auto text-brand-500 fill-current overflow-visible">
         <defs>
            <filter id="brush-texture">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
         </defs>
         
         {/* Main circle stroke (Left/Bottom thick) */}
         <path 
            d="M 60 10 A 45 45 0 1 0 70 90" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinecap="round" 
            style={{ filter: 'url(#brush-texture)' }}
            className="opacity-90"
         />
         
         {/* Inner/Second stroke (Top/Right thin) */}
         <path 
            d="M 50 15 A 35 35 0 0 1 85 50" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeDasharray="10 15"
            className="opacity-70"
         />
         
         {/* Accent dots/splatter */}
         <circle cx="20" cy="40" r="1.5" fill="currentColor" />
         <circle cx="25" cy="35" r="1" fill="currentColor" />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`text-[0.65rem] tracking-[0.25em] uppercase font-sans font-bold ${dark ? 'text-brand-100' : 'text-slate-500'}`}>Centro Clínico</span>
        <span className={`text-xl md:text-2xl font-bold font-sans tracking-wide leading-none ${dark ? 'text-white' : 'text-brand-500'}`}>EQUILIBRAR</span>
      </div>
    </div>
  );
};