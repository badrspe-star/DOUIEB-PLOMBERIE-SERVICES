
import React from 'react';
/* Added Star to the imported icons from lucide-react */
import { Phone, ShieldCheck, Clock, Star } from 'lucide-react';
import { COMPANY } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
          alt="Plumbing Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Intervention 24h/24 à Limoges</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Une Fuite ? Un Problème de <span className="text-blue-400">Chauffage ?</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            DOUIEB PLOMBERIE SERVICES intervient en urgence chez vous à Limoges. Profitez d'une expertise reconnue, de tarifs transparents et d'un service disponible 7j/7.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={`tel:${COMPANY.phone}`}
              className="flex items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-orange-500/20 transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
            <a 
              href="#services"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-xl transition-all"
            >
              Voir nos tarifs
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Assurance Décennale</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Arrivée en 30 min</span>
            </div>
            <div className="hidden md:flex items-center space-x-3 text-slate-300">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.7/5 sur Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
