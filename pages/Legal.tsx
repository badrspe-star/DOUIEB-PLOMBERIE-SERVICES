
import React from 'react';
import { COMPANY } from '../constants';

const Legal: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-sm border border-neutral-100">
        <h1 className="text-3xl font-black text-[#1a2e05] mb-12 text-center uppercase tracking-tight">Mentions Légales</h1>
        
        <div className="space-y-12 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1a2e05] mb-4 uppercase tracking-wider border-b-2 border-[#6fc201] pb-2 inline-block">1. Présentation du site</h2>
            <p className="mt-4">
              Conformément aux dispositions de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique :
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Propriétaire :</strong> {COMPANY.name}</li>
              <li><strong>Responsable publication :</strong> Direction AMD Plomberie</li>
              <li><strong>Siège social :</strong> {COMPANY.address}</li>
              <li><strong>Localisation :</strong> Chiconi, Mayotte</li>
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2e05] mb-4 uppercase tracking-wider border-b-2 border-[#6fc201] pb-2 inline-block">2. Conditions d'utilisation</h2>
            <p className="mt-4">
              L'accès au site et son utilisation sont réservés à un usage strictement personnel. Toute utilisation à des fins commerciales ou publicitaires est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2e05] mb-4 uppercase tracking-wider border-b-2 border-[#6fc201] pb-2 inline-block">3. Propriété intellectuelle</h2>
            <p className="mt-4">
              L'ensemble du contenu de ce site (textes, logos, images) est la propriété exclusive de AMD Plomberie. Toute reproduction totale ou partielle est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2e05] mb-4 uppercase tracking-wider border-b-2 border-[#6fc201] pb-2 inline-block">4. Données personnelles</h2>
            <p className="mt-4">
              Les informations collectées via le formulaire de contact sont destinées exclusivement au traitement de vos demandes par AMD Plomberie et ne font l'objet d'aucune cession à des tiers.
            </p>
          </section>

          <div className="pt-12 border-t border-neutral-100 text-sm italic text-neutral-400">
            Mise à jour le : {new Date().toLocaleDateString('fr-FR')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
