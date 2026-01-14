
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star } from 'lucide-react';
import { COMPANY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#1a2e05] pt-16 pb-8 border-t border-[#6fc201]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Stats */}
        <div>
          <h3 className="text-[#1a2e05] text-xl font-extrabold mb-6">AMD <span className="text-[#6fc201]">PLOMBERIE</span></h3>
          <p className="mb-6 text-sm text-neutral-600 leading-relaxed">
            Votre artisan plombier de confiance à Mayotte. Qualité, transparence et réactivité pour tous vos dépannages et installations.
          </p>
          <div className="flex items-center space-x-2 bg-[#f0f9e6] p-3 rounded-lg w-fit border border-[#6fc201]/10">
            <div className="flex text-[#6fc201]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-[#1a2e05] font-bold">{COMPANY.rating}/5</span>
            <span className="text-xs text-neutral-500">({COMPANY.reviewsCount} avis)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#1a2e05] text-lg font-bold mb-6">Plan du Site</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="text-neutral-600 hover:text-[#6fc201] transition-colors">Accueil</Link></li>
            <li><Link to="/services" className="text-neutral-600 hover:text-[#6fc201] transition-colors">Nos Services</Link></li>
            <li><Link to="/about" className="text-neutral-600 hover:text-[#6fc201] transition-colors">À Propos</Link></li>
            <li><Link to="/contact" className="text-neutral-600 hover:text-[#6fc201] transition-colors">Contact</Link></li>
            <li><Link to="/legal" className="text-neutral-600 hover:text-[#6fc201] transition-colors">Mentions Légales</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#1a2e05] text-lg font-bold mb-6">Coordonnées</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#6fc201] flex-shrink-0" />
              <span className="text-neutral-600">{COMPANY.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#6fc201] flex-shrink-0" />
              <a href={`tel:${COMPANY.phone}`} className="text-neutral-600 hover:text-[#6fc201] transition-colors">{COMPANY.phoneDisplay}</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#6fc201] flex-shrink-0" />
              <span className="text-neutral-600">contact@amdplomberie.yt</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[#1a2e05] text-lg font-bold mb-6">Horaires</h4>
          <ul className="space-y-2 text-xs">
            {Object.entries(COMPANY.hours).map(([day, hour]) => (
              <li key={day} className="flex justify-between border-b border-[#f0f9e6] pb-1">
                <span className="capitalize text-neutral-500">{day}</span>
                <span className={hour === "Fermé" ? "text-neutral-400" : "text-neutral-700"}>{hour}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#f0f9e6] text-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} AMD PLOMBERIE. L'expertise artisanale au cœur de Mayotte.</p>
      </div>
    </footer>
  );
};

export default Footer;
