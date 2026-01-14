
import React, { useState } from 'react';
import { COMPANY } from '../constants';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="gradient-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase">Contactez-nous</h1>
          <p className="text-[#f0f9e6] max-w-xl mx-auto font-medium">
            Une question ou une demande d'intervention à Chiconi ? Nous vous répondons avec réactivité.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#f0f9e6]">
              <h3 className="text-xl font-bold text-[#1a2e05] mb-8 uppercase tracking-wider">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f0f9e6] p-3 rounded-xl text-[#6fc201]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Contact Direct</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-lg font-bold text-[#1a2e05] hover:text-[#6fc201] transition-colors">{COMPANY.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f0f9e6] p-3 rounded-xl text-[#6fc201]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold text-[#1a2e05]">contact@amdplomberie.yt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f0f9e6] p-3 rounded-xl text-[#6fc201]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Adresse</p>
                    <p className="text-lg font-bold text-[#1a2e05] leading-tight">{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f9e6] p-8 rounded-3xl border border-[#6fc201]/10 text-[#1a2e05]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Horaires d'Ouverture</h3>
              <ul className="space-y-3 text-sm font-semibold">
                {Object.entries(COMPANY.hours).map(([day, hour]) => (
                  <li key={day} className="flex justify-between border-b border-[#6fc201]/10 pb-2">
                    <span className="capitalize text-neutral-500">{day}</span>
                    <span className={hour === 'Fermé' ? 'text-neutral-400' : 'text-neutral-700'}>{hour}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-2xl min-h-[600px] flex flex-col border border-[#f0f9e6]">
              {submitted ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-[#f0f9e6] text-[#6fc201] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-14 h-14" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1a2e05]">Message transmis !</h2>
                  <p className="text-neutral-500 max-w-sm">
                    Nous avons bien reçu votre demande. AMD Plomberie reviendra vers vous très rapidement.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="gradient-brand text-white px-8 py-3 rounded-full font-bold shadow-lg"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#1a2e05] mb-8 uppercase tracking-tight">Formulaire de Contact</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-600">Nom / Prénom</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50 focus:border-[#6fc201] focus:ring-4 focus:ring-[#6fc201]/10 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-600">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="email@exemple.fr"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50 focus:border-[#6fc201] focus:ring-4 focus:ring-[#6fc201]/10 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-600">Sujet de la demande</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50 focus:border-[#6fc201] outline-none">
                        <option>Dépannage Urgent</option>
                        <option>Installation Chauffe-eau</option>
                        <option>Rénovation Sanitaire</option>
                        <option>Demande de Devis</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-600">Description détaillée</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Précisez votre besoin (localisation, type de panne...)"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50 focus:border-[#6fc201] focus:ring-4 focus:ring-[#6fc201]/10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full gradient-brand hover:brightness-110 text-white font-black py-4 rounded-xl shadow-xl shadow-[#6fc201]/20 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                      <span>Envoyer la demande</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
