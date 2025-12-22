
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, Mail } from 'lucide-react';
import { COMPANY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Stats */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">DOUIEB PLOMBERIE SERVICES</h3>
          <p className="mb-6 text-sm leading-relaxed">
            Votre artisan plombier de confiance à Limoges. Intervention d'urgence, installation et maintenance thermique pour particuliers et professionnels.
          </p>
          <div className="flex items-center space-x-2 bg-slate-800 p-3 rounded-lg w-fit">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold">{COMPANY.rating}/5</span>
            <span className="text-xs">({COMPANY.reviewsCount} avis Google)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Nos Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">À Propos</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link to="/legal" className="hover:text-blue-400 transition-colors">Mentions Légales</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Coordonnées</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">{COMPANY.phoneDisplay}</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>contact@douieb-plomberie.fr</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Horaires d'Ouverture</h4>
          <ul className="space-y-2 text-xs">
            {Object.entries(COMPANY.hours).map(([day, hour]) => (
              <li key={day} className="flex justify-between border-b border-slate-800 pb-1">
                <span className="capitalize">{day}</span>
                <span className={hour === "Ouvert 24h/24" ? "text-green-400 font-semibold" : ""}>{hour}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} DOUIEB PLOMBERIE SERVICES. Tous droits réservés. Créé par l'Expert Plomberie Limoges.</p>
      </div>
    </footer>
  );
};

export default Footer;
