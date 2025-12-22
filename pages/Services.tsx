
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
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Nos Services de Plomberie</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Des solutions complètes pour votre habitat, de l'urgence 24h/24 à la rénovation complète de vos installations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={SERVICE_IMAGES[service.id] || 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800'} 
                  alt={service.title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Devis gratuit</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Intervention rapide</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Matériel garanti</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Artisan qualifié</span>
                  </div>
                </div>
                <a 
                  href={`tel:${COMPANY.phone}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-colors shadow-lg shadow-blue-600/20 w-fit"
                >
                  <Phone className="w-5 h-5" />
                  <span>Demander une intervention</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
        <div className="bg-orange-500 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-2">Besoin d'un diagnostic ?</h3>
            <p className="text-orange-100 opacity-90">Un technicien vous répond immédiatement.</p>
          </div>
          <a 
            href={`tel:${COMPANY.phone}`}
            className="bg-white text-orange-500 px-10 py-5 rounded-2xl font-black text-2xl transition-all transform hover:scale-105"
          >
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
