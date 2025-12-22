
import React from 'react';
import { SERVICES, COMPANY } from '../constants';
import { Phone, CheckCircle2 } from 'lucide-react';

const SERVICE_IMAGES: Record<string, string> = {
  'depannage': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
  'chauffage': 'https://images.unsplash.com/photo-1621905252507-b35220adcfba?auto=format&fit=crop&q=80&w=800',
  'sanitaire': 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800',
  'salle-de-bain': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#f0f9e6] py-20 px-4 border-b border-[#6fc201]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e05] mb-6">Nos Services de <span className="text-[#6fc201]">Plomberie</span></h1>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Des solutions durables et efficaces pour votre habitat, de l'urgence 24h/24 à la rénovation complète.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-xl overflow-hidden border border-[#f0f9e6] ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={SERVICE_IMAGES[service.id] || 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800'} 
                  alt={service.title}
                  className="w-full h-full object-cover min-h-[400px] grayscale-[0.2] contrast-[1.05]"
                />
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-[#f0f9e6] text-[#6fc201] rounded-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-[#1a2e05]">{service.title}</h2>
                </div>
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center space-x-2 text-neutral-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#6fc201]" />
                    <span>Devis gratuit</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#6fc201]" />
                    <span>Rapidité garantie</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#6fc201]" />
                    <span>Normes Qualité NF</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#6fc201]" />
                    <span>Savoir-faire local</span>
                  </div>
                </div>
                <a 
                  href={`tel:${COMPANY.phone}`}
                  className="gradient-brand hover:brightness-110 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all shadow-lg shadow-[#6fc201]/20 w-fit"
                >
                  <Phone className="w-5 h-5" />
                  <span>Demander un devis</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Banner */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
        <div className="gradient-brand rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-[#6fc201]/20">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-extrabold mb-2">Besoin d'un diagnostic urgent ?</h3>
            <p className="text-[#f0f9e6] text-lg">Nos experts vous répondent immédiatement.</p>
          </div>
          <a 
            href={`tel:${COMPANY.phone}`}
            className="bg-white text-[#6fc201] px-10 py-5 rounded-2xl font-black text-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
