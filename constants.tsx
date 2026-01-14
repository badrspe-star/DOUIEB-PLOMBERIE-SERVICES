
import React from 'react';
import { 
  Droplets, 
  Flame, 
  Wrench, 
  Bath, 
  Clock, 
  ShieldCheck, 
  Star 
} from 'lucide-react';

export const COMPANY = {
  name: "AMD PLOMBERIE",
  type: "Plombier à Mayotte",
  city: "Chiconi",
  address: "6 venelle Malbar, Chiconi 97670, Mayotte",
  phone: "+262639210722",
  phoneDisplay: "+262 639 21 07 22",
  rating: 4.9,
  reviewsCount: 24,
  hours: {
    lundi: "07:00–12:00, 13:30–16:30",
    mardi: "07:00–12:00, 13:30–16:30",
    mercredi: "07:00–12:00, 13:30–16:30",
    jeudi: "07:00–12:00",
    vendredi: "13:30–16:30",
    samedi: "08:00–12:00, 13:30–15:30",
    dimanche: "Fermé"
  }
};

export const SERVICES = [
  {
    id: 'depannage',
    title: "Dépannage d'Urgence",
    description: "Intervention rapide pour toutes vos urgences hydrauliques à Chiconi.",
    icon: <Wrench className="w-8 h-8" />,
    fullDescription: "Une fuite d'eau ou une canalisation bouchée ? AMD Plomberie intervient avec réactivité à Chiconi et dans les environs pour sécuriser vos installations."
  },
  {
    id: 'chauffage',
    title: "Chauffe-eau & Thermique",
    description: "Installation et maintenance de vos systèmes de production d'eau chaude.",
    icon: <Flame className="w-8 h-8" />,
    fullDescription: "Nous assurons la pose et l'entretien de vos chauffe-eau solaires ou électriques, adaptés au climat de Mayotte pour un confort durable."
  },
  {
    id: 'sanitaire',
    title: "Réseaux Sanitaires",
    description: "Expertise complète en tuyauterie, robinetterie et évacuation aux normes.",
    icon: <Droplets className="w-8 h-8" />,
    fullDescription: "Installation et réparation de vos circuits d'eau. Nous garantissons des raccordements étanches et robustes pour faire face aux contraintes locales."
  },
  {
    id: 'salle-de-bain',
    title: "Projets Salle de Bain",
    description: "Rénovation et création d'espaces sanitaires modernes et fonctionnels.",
    icon: <Bath className="w-8 h-8" />,
    fullDescription: "Confiez-nous la transformation de votre salle de bain. De la pose de douches à l'installation de vasques, nous réalisons vos projets de A à Z."
  }
];

export const VALUES = [
  {
    title: "Expertise Locale",
    description: "Une connaissance approfondie des installations et des besoins spécifiques à Mayotte.",
    icon: <Clock className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Travail Soigné",
    description: "Engagement sur la qualité des finitions et le respect des délais convenus.",
    icon: <ShieldCheck className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Conseils & Devis",
    description: "Transparence totale sur les tarifs et accompagnement technique personnalisé.",
    icon: <Star className="w-6 h-6 text-[#6fc201]" />
  }
];
