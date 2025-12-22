
import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, VALUES, COMPANY } from '../constants';
import { Star, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Nos Domaines d'Expertise</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Services de Plomberie Professionnels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link to="/services" className="text-blue-600 font-bold text-sm flex items-center space-x-2 group-hover:space-x-4 transition-all">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan Plombier" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Pourquoi nous choisir ?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Votre confort, notre priorité absolue à Limoges</h3>
            <div className="space-y-8">
              {VALUES.map((value, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="bg-orange-50 p-3 rounded-lg h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{value.title}</h4>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-2xl font-black text-blue-900">4.7/5</p>
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current opacity-80" />
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">Sur 34 avis Google</p>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-900">Expertise Locale</p>
                <p className="text-xs text-slate-500">Haute-Vienne (87)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">10+</p>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">Années d'expérience</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">24h</p>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">Disponibilité</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">100%</p>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">Satisfait ou refait</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">0€</p>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">Frais de Devis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-slate-900 p-12 text-white flex-1">
            <h2 className="text-3xl font-bold mb-6">Prêt à régler votre problème ?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Ne laissez pas une fuite s'aggraver. Contactez-nous maintenant pour un dépannage immédiat ou prenez rendez-vous pour vos installations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span>Intervention en moins de 30 min</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span>Matériel certifié NF</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span>Paiement sécurisé par carte</span>
              </li>
            </ul>
          </div>
          <div className="p-12 flex flex-col justify-center items-center flex-1">
            <p className="text-slate-500 text-sm font-bold uppercase mb-4 tracking-widest">Appel d'urgence</p>
            <a 
              href={`tel:${COMPANY.phone}`}
              className="text-4xl md:text-5xl font-black text-blue-900 hover:text-blue-600 transition-colors mb-4"
            >
              {COMPANY.phoneDisplay}
            </a>
            <p className="text-slate-400 text-sm italic">Artisan disponible actuellement</p>
            <Link to="/contact" className="mt-8 text-blue-600 border-b-2 border-blue-600 font-bold py-1">
              Préférer un message ?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
