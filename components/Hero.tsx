
import React from 'react';
import { Phone, ShieldCheck, Clock, Star } from 'lucide-react';
import { COMPANY } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden border-b border-[#6fc201]/10">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#f0f9e6] rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#6fc201]/5 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-2xl flex-1">
            <div className="animate-fade-up inline-flex items-center space-x-2 bg-[#f0f9e6] border border-[#6fc201]/20 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6fc201] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6fc201]"></span>
              </span>
              <span className="text-[#6fc201] text-xs font-bold uppercase tracking-wider">Intervention 24h/24 à Limoges</span>
            </div>
            
            <h1 className="animate-fade-up delay-100 text-4xl md:text-6xl font-extrabold text-[#1a2e05] leading-tight mb-6">
              Une Fuite ? Un Problème de <span className="text-[#6fc201]">Chauffage ?</span>
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg text-neutral-600 mb-10 leading-relaxed">
              DOUIEB PLOMBERIE SERVICES intervient en urgence chez vous à Limoges. Profitez d'une expertise reconnue, de tarifs transparents et d'un service disponible 7j/7.
            </p>
            
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center space-x-3 gradient-brand hover:brightness-110 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl shadow-[#6fc201]/20 transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <a 
                href="#services"
                className="flex items-center justify-center bg-white hover:bg-[#f0f9e6] text-[#6fc201] border-2 border-[#6fc201] px-8 py-4 rounded-xl font-bold text-xl transition-all"
              >
                Nos Services
              </a>
            </div>

            <div className="animate-fade-up delay-400 mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-neutral-600">
                <ShieldCheck className="w-5 h-5 text-[#6fc201]" />
                <span className="text-sm font-semibold">Garantie Décennale</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-600">
                <Clock className="w-5 h-5 text-[#6fc201]" />
                <span className="text-sm font-semibold">Arrivée en 30 min</span>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-neutral-600">
                <Star className="w-5 h-5 text-[#6fc201] fill-current" />
                <span className="text-sm font-semibold">4.7/5 sur Google</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              {/* Decorative background frame with rotation animation */}
              <div className="animate-scale-in absolute inset-0 gradient-brand rounded-[2rem] rotate-3 scale-105 opacity-10"></div>
              <div className="animate-scale-in delay-100 absolute -inset-2 bg-[#6fc201]/5 rounded-[2.5rem] -rotate-2"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200" 
                alt="Artisan Plombier Professionnel à Limoges" 
                className="animate-scale-in delay-200 relative z-10 w-full h-[450px] lg:h-[550px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
              />
              
              {/* Floating badge for trust with persistent float animation */}
              <div className="animate-fade-up delay-500 absolute -bottom-6 -left-6 z-20">
                <div className="animate-float bg-white p-4 rounded-2xl shadow-xl border border-[#f0f9e6] flex items-center space-x-3">
                  <div className="bg-[#6fc201] p-2 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Certifié</p>
                    <p className="text-sm font-black text-[#1a2e05]">Artisan Qualifié</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
