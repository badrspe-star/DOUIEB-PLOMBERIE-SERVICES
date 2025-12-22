
import React from 'react';
import { COMPANY, VALUES } from '../constants';
import { ShieldCheck, Users, Trophy, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">DOUIEB PLOMBERIE SERVICES</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg italic">
          "L'excellence au service de votre sérénité à Limoges depuis plus de 10 ans."
        </p>
      </div>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Notre Histoire</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Une entreprise familiale ancrée dans le Limousin</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Fondée avec la volonté de proposer un service de plomberie authentique et fiable, DOUIEB PLOMBERIE SERVICES est devenue une référence à Limoges. Nous ne nous contentons pas de réparer des tuyaux ; nous protégeons votre habitat.
              </p>
              <p>
                Notre équipe est composée d'artisans passionnés qui allient savoir-faire traditionnel et technologies modernes de détection de fuites et d'optimisation énergétique.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Artisans locaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Expertise 10 ans+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" 
                alt="Travail de Plomberie Précis" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-blue-600 rounded-3xl z-0 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-16">Nos Engagements Qualité</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="mr-3 text-blue-500" />
              Où nous trouver ?
            </h3>
            <p className="mb-8 text-slate-400">
              Basés au cœur de Limoges, nous couvrons un rayon de 50km pour toutes vos interventions d'urgence.
            </p>
            <address className="not-italic text-lg space-y-2">
              <p className="font-bold">{COMPANY.name}</p>
              <p>{COMPANY.address}</p>
              <p className="text-blue-400 font-bold">{COMPANY.city}</p>
            </address>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-slate-200">
            {/* Map Placeholder */}
            <iframe 
              title="Localisation Limoges"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.2526543166847!2d1.258!3d45.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f9349c256e6f7b%3A0x400000000000000!2sLimoges!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr`}
              className="w-full h-full grayscale opacity-80"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
