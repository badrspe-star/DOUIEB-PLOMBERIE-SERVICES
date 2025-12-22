
import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, VALUES, COMPANY } from '../constants';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6fc201] font-bold uppercase tracking-widest text-sm mb-3">Nos Domaines d'Expertise</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#1a2e05]">Services de Plomberie Professionnels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-[#f0f9e6] hover:shadow-xl hover:border-[#6fc201]/20 transition-all group">
              <div className="w-16 h-16 bg-[#f0f9e6] text-[#6fc201] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6fc201] group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a2e05] mb-3">{service.title}</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link to="/services" className="text-[#6fc201] font-bold text-sm flex items-center space-x-2 group-hover:space-x-4 transition-all">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f0f9e6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-[#6fc201] font-bold uppercase tracking-widest text-sm mb-3">Pourquoi nous choisir ?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a2e05] mb-8">Votre confort, notre priorité absolue à Limoges</h3>
            <div className="space-y-8">
              {VALUES.map((value, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="bg-white p-3 rounded-lg h-fit text-[#6fc201] shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1a2e05]">{value.title}</h4>
                    <p className="text-neutral-500 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-white rounded-2xl border border-[#6fc201]/10 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-2xl font-black text-[#1a2e05]">4.7/5</p>
                <div className="flex text-[#6fc201]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-neutral-400 font-medium mt-1">Avis certifiés Google</p>
              </div>
              <div className="h-12 w-px bg-[#f0f9e6]"></div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#1a2e05]">Artisan Local</p>
                <p className="text-xs text-neutral-400">Limoges & 87</p>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan Plombier Professionnel" 
              className="rounded-3xl shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Trust Banner - Solid Brand Green */}
      <section className="gradient-brand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">10+</p>
              <p className="text-[#f0f9e6] text-xs font-bold uppercase tracking-widest">Ans d'expérience</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">24h</p>
              <p className="text-[#f0f9e6] text-xs font-bold uppercase tracking-widest">Disponibilité</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">100%</p>
              <p className="text-[#f0f9e6] text-xs font-bold uppercase tracking-widest">Engagement Qualité</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">0€</p>
              <p className="text-[#f0f9e6] text-xs font-bold uppercase tracking-widest">Frais de Devis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#6fc201]/10">
          <div className="bg-[#f0f9e6] p-12 text-[#1a2e05] flex-1">
            <h2 className="text-3xl font-extrabold mb-6 leading-tight">Prêt à régler votre problème ?</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Ne laissez pas une fuite s'aggraver. Contactez-nous maintenant pour un dépannage immédiat ou prenez rendez-vous.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-semibold">
                <CheckCircle2 className="text-[#6fc201] w-5 h-5" />
                <span>Intervention en moins de 30 min</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-semibold">
                <CheckCircle2 className="text-[#6fc201] w-5 h-5" />
                <span>Tarification transparente</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-semibold">
                <CheckCircle2 className="text-[#6fc201] w-5 h-5" />
                <span>Paiement sécurisé</span>
              </li>
            </ul>
          </div>
          <div className="p-12 flex flex-col justify-center items-center flex-1">
            <p className="text-[#6fc201] text-sm font-bold uppercase mb-4 tracking-widest">Appel d'urgence</p>
            <a 
              href={`tel:${COMPANY.phone}`}
              className="text-3xl md:text-4xl font-black text-[#1a2e05] hover:text-[#6fc201] transition-colors mb-4"
            >
              {COMPANY.phoneDisplay}
            </a>
            <p className="text-neutral-400 text-sm italic">Service actif actuellement</p>
            <Link to="/contact" className="mt-8 gradient-brand text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-[#6fc201]/20">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
