
import React from 'react';
import { 
  Droplets, 
  Flame, 
  Wrench, 
  Bath, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Star 
} from 'lucide-react';

export const COMPANY = {
  name: "DOUIEB PLOMBERIE SERVICES",
  type: "Plombier Chauffagiste",
  city: "Limoges",
  address: "25 all Fabre d'Eglantine, 87280 Limoges",
  phone: "+33651745539",
  phoneDisplay: "06 51 74 55 39",
  rating: 4.7,
  reviewsCount: 34,
  hours: {
    lundi: "Ouvert 24h/24",
    mardi: "Ouvert 24h/24",
    mercredi: "Ouvert 24h/24",
    jeudi: "Ouvert 24h/24",
    vendredi: "Ouvert 24h/24",
    samedi: "Ouvert 24h/24",
    dimanche: "09:00–17:00"
  }
};

export const SERVICES = [
  {
    id: 'depannage',
    title: "Dépannage d'Urgence",
    description: "Intervention rapide 24h/24 pour fuites, débouchage et pannes critiques.",
    icon: <Wrench className="w-8 h-8" />,
    fullDescription: "Une fuite d'eau, un WC bouché ou un chauffe-eau en panne ? Nos techniciens interviennent en moins de 30 minutes à Limoges et ses alentours pour sécuriser vos installations."
  },
  {
    id: 'chauffage',
    title: "Chauffage & Chaudière",
    description: "Installation, entretien et réparation de tous types de systèmes de chauffage.",
    icon: <Flame className="w-8 h-8" />,
    fullDescription: "Nous assurons la pose et la maintenance de chaudières gaz, électriques et pompes à chaleur. Profitez d'un confort thermique optimal toute l'année."
  },
  {
    id: 'sanitaire',
    title: "Plomberie Sanitaire",
    description: "Installation de robinetterie, tuyauterie et raccordements complexes.",
    icon: <Droplets className="w-8 h-8" />,
    fullDescription: "De la pose d'un nouveau robinet à la refonte complète de votre réseau d'eau, nous garantissons des soudures et raccordements durables."
  },
  {
    id: 'salle-de-bain',
    title: "Rénovation Salle de Bain",
    description: "Création et aménagement complet de votre espace bien-être.",
    icon: <Bath className="w-8 h-8" />,
    fullDescription: "Nous transformons votre salle de bain : douche à l'italienne, pose de vasque, carrelage et optimisation de l'espace pour un résultat moderne."
  }
];

export const VALUES = [
  {
    title: "Réactivité 24/7",
    description: "Parce qu'une fuite n'attend pas, nous sommes mobilisés jour et nuit.",
    icon: <Clock className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Expertise Certifiée",
    description: "Plus de 10 ans d'expérience dans les métiers du chauffage et de l'eau.",
    icon: <ShieldCheck className="w-6 h-6 text-[#6fc201]" />
  },
  {
    title: "Transparence",
    description: "Devis gratuits avant intervention, sans frais cachés ni mauvaises surprises.",
    icon: <Star className="w-6 h-6 text-[#6fc201]" />
  }
];
