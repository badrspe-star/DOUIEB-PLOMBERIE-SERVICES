
import React, { useState } from 'react';
import { COMPANY } from '../constants';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Une question ou une demande de devis ? Nous vous répondons sous 24 heures maximum.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Téléphone (Urgence)</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-lg font-bold text-slate-900 hover:text-blue-600">{COMPANY.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Email</p>
                    <p className="text-lg font-bold text-slate-900">contact@douieb-plomberie.fr</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Localisation</p>
                    <p className="text-lg font-bold text-slate-900 leading-tight">{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6">Disponibilité</h3>
              <ul className="space-y-3 text-sm">
                {Object.entries(COMPANY.hours).map(([day, hour]) => (
                  <li key={day} className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="capitalize">{day}</span>
                    <span className={hour.includes('24h') ? 'text-green-400' : ''}>{hour}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-lg min-h-[600px] flex flex-col">
              {submitted ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Message envoyé !</h2>
                  <p className="text-slate-500 max-w-sm">
                    Merci de votre confiance. Notre équipe étudie votre demande et vous recontactera très rapidement.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold border-b-2 border-blue-600"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Nom Complet</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Ex: Jean Dupont"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="email@exemple.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Sujet de la demande</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none bg-white">
                        <option>Dépannage Urgent</option>
                        <option>Installation Chauffage</option>
                        <option>Rénovation Salle de Bain</option>
                        <option>Devis Gratuit</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Votre Message</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Détaillez votre besoin ici..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma demande</span>
                    </button>
                  </form>
                  <p className="mt-8 text-xs text-slate-400 text-center">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité et l'utilisation de vos données pour la gestion de votre demande.
                  </p>
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
