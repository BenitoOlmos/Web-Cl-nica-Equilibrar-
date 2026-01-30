import React from 'react';
import { 
  Brain, 
  HeartHandshake, 
  Activity, 
  Users, 
  Building2, 
  Sparkles, 
  Leaf, 
  Search,
  Zap,
  GraduationCap
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+56 9 3017 9724",
  email: "contacto@equilibrar.com",
  address: "Av. Principal, Caracas", 
  whatsappUrl: "https://wa.me/56930179724",
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturdays: "9:00 AM - 1:00 PM"
  }
};

export const SERVICES = [
  {
    title: "Psicoterapia Integral",
    description: "Atención a adultos, adolescentes y niños basada en psicología humanista, neurociencia afectiva y aprendizaje experiencial.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Evaluaciones Diagnósticas",
    description: "Detección temprana de factores de riesgo y bienestar psicológico con instrumentos validados y analítica digital.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Acompañamiento en Crisis",
    description: "Procesos de contención y reconstrucción emocional ante situaciones críticas, duelo y transiciones vitales.",
    icon: <HeartHandshake className="w-6 h-6" />
  },
  {
    title: "Terapias Corporales",
    description: "Integración de técnicas orientales y neurofisiológicas para equilibrar energía, movimiento y emoción.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Programas de Bienestar",
    description: "Planes personalizados para individuos, familias o equipos, orientados a fortalecer la salud mental preventiva.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Regulación Somática",
    description: "Técnicas especializadas de integración cuerpo-mente para el equilibrio emocional y fisiológico.",
    icon: <Leaf className="w-6 h-6" />
  }
];

export const LEVELS = [
  {
    title: "Individual",
    description: "Atención psicológica, psiquiátrica y corporal integrativa personalizada.",
    icon: <Brain className="w-8 h-8" />
  },
  {
    title: "Familiar y Grupal",
    description: "Procesos de cohesión, mediación y comunicación emocional.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Institucional",
    description: "Implementación de estrategias preventivas y programas de bienestar colectivo.",
    icon: <Building2 className="w-8 h-8" />
  }
];

export const ALLIANCE_INFO = {
  name: "Corporación 3i+D",
  tagline: "Investigación • Innovación • Intervención • Desarrollo",
  description: "Alianza estratégica que integra investigación, innovación e intervención para el desarrollo humano y organizacional con enfoque científico y tecnológico.",
  sectors: ["Salud", "Educación", "Industrial", "Tecnológico"],
  partners: ["ENAP Patagonia", "UTFSM", "Subsecretaría de Innovación", "ACHS", "Universidad Católica"]
};