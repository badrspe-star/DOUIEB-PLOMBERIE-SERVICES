
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
  name: "AQUA-TECH SERVICES",
  type: "Artisan Plombier Chauffagiste",
  city: "Val-de-Serein",
  address: "42 Avenue des Artisans, 00000 Val-de-Serein",
  phone: "+33123456789",
  phoneDisplay: "01 23 45 67 89",
  rating: 4.8,
  reviewsCount: 52,
  hours: {
    lundi: "Ouvert 24h/24",
    mardi: "Ouvert 24h/24",
    mercredi: "Ouvert 24h/24",
    jeudi: "Ouvert 24h/24",
    vendredi: "Ouvert 24h/24",
    samedi: "Ouvert 24h/24",
    dimanche: "09:00–18:00"
  }
};

export const SERVICES = [
  {
    id: 'depannage',
    title: "Dépannage d'Urgence",
    description: "Intervention immédiate 24h/24 pour toutes vos urgences hydrauliques.",
    icon: <Wrench className="w-8 h-8" />,
    fullDescription: "Une fuite d'eau critique ou une canalisation bouchée ? Nos experts interviennent en moins de 30 minutes dans toute la région de Val-de-Serein pour sécuriser votre domicile."
  },
  {
    id: 'chauffage',
    title: "Thermique & Chauffage",
    description: "Installation et maintenance de vos systèmes de chauffage et chauffe-eau.",
    icon: <Flame className="w-8 h-8" />,
    fullDescription: "Nous installons et entretenons vos chaudières et pompes à chaleur pour garantir votre confort thermique. Optimisez votre consommation énergétique avec nos solutions modernes."
  },
  {
    id: 'sanitaire',
    title: "Réseaux Sanitaires",
    description: "Expertise complète en tuyauterie, robinetterie et évacuation.",
    icon: <Droplets className="w-8 h-8" />,
    fullDescription: "Installation, modification ou réparation de vos circuits d'eau. Nous utilisons des matériaux de haute qualité pour des raccordements durables et sans fuite."
  },
  {
    id: 'salle-de-bain',
    title: "Projets Salle de Bain",
    description: "De la conception à la réalisation de votre espace de bain sur-mesure.",
    icon: <Bath className="w-8 h-8" />,
    fullDescription: "Transformez votre salle de bain en un espace de détente. Douche italienne, robinetterie encastrée et carrelage : nous gérons votre projet de A à Z."
  }
];

export const VALUES = [
  {
    title: "Disponibilité Totale",
    description: "Interventions d'urgence garanties de jour comme de nuit, 7 jours sur 7.",
    icon: <Clock className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Savoir-faire Expert",
    description: "Une équipe d'artisans qualifiés bénéficiant de 15 ans d'expérience métier.",
    icon: <ShieldCheck className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Éthique & Prix",
    description: "Tarification claire, devis détaillés et conseils pour économiser l'eau.",
    icon: <Star className="w-6 h-6 text-[#6fc201]" />
  }
];
