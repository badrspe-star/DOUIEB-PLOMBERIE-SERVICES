
import React from 'react';
import { COMPANY, VALUES } from '../constants';
import { Users, Trophy, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#f0f9e6] py-24 px-4 text-center border-b border-[#6fc201]/10">
        <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-[#1a2e05]">
          DOUIEB <span className="text-[#6fc201]">PLOMBERIE</span> SERVICES
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto text-lg italic">
          "L'excellence au service de votre sérénité à Limoges depuis plus de 10 ans."
        </p>
      </div>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[#6fc201] font-bold uppercase tracking-widest text-sm mb-4">Notre Histoire</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a2e05] mb-6">Une entreprise familiale ancrée dans le Limousin</h3>
            <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
              <p>
                Fondée avec la volonté de proposer un service de plomberie authentique, DOUIEB PLOMBERIE SERVICES est devenue une référence à Limoges. Nous protégeons votre habitat avec passion et rigueur.
              </p>
              <p>
                Notre équipe d'artisans allie savoir-faire traditionnel et technologies modernes pour vous garantir des installations pérennes et économes en énergie.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f0f9e6] p-2 rounded-lg text-[#6fc201]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#1a2e05]">Artisans locaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f0f9e6] p-2 rounded-lg text-[#6fc201]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#1a2e05]">10+ Ans de métier</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#6fc201] rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" 
                alt="Expertise Plomberie" 
                className="rounded-3xl shadow-2xl relative z-10 border-4 border-white"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-brand rounded-full z-0 flex items-center justify-center text-white text-center p-4 shadow-xl">
                <span className="font-black text-xs uppercase leading-tight">Expert Certifié</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[#f0f9e6]/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#1a2e05] mb-16 uppercase tracking-tight">Nos Engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((v, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-10 rounded-[2rem] shadow-sm border border-[#6fc201]/5">
                <div className="w-16 h-16 bg-[#f0f9e6] text-[#6fc201] rounded-full flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#1a2e05]">{v.title}</h4>
                <p className="text-neutral-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-[#f0f9e6]">
          <div className="md:w-1/2 p-12 text-[#1a2e05]">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="mr-3 text-[#6fc201]" />
              Où intervenons-nous ?
            </h3>
            <p className="mb-8 text-neutral-600">
              Basés à Limoges, nous couvrons la Haute-Vienne dans un rayon de 50km pour tous vos travaux et urgences.
            </p>
            <address className="not-italic text-lg space-y-4">
              <div className="p-4 bg-[#f0f9e6] rounded-xl border-l-4 border-[#6fc201]">
                <p className="font-extrabold text-[#1a2e05] uppercase mb-1">{COMPANY.name}</p>
                <p className="text-neutral-700">{COMPANY.address}</p>
                <p className="text-[#6fc201] font-bold">{COMPANY.city}</p>
              </div>
            </address>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-[#f0f9e6]/50">
            <iframe 
              title="Localisation Limoges"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.2526543166847!2d1.258!3d45.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f9349c256e6f7b%3A0x400000000000000!2sLimoges!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr`}
              className="w-full h-full grayscale-[0.5] contrast-[1.1]"
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
