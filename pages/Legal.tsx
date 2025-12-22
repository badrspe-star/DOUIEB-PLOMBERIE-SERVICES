
import React from 'react';
import { COMPANY } from '../constants';

const Legal: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-black text-slate-900 mb-12 text-center">Mentions Légales</h1>
        
        <div className="space-y-12 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">1. Présentation du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Propriétaire :</strong> {COMPANY.name}</li>
              <li><strong>Responsable publication :</strong> M. Douieb</li>
              <li><strong>Siège social :</strong> {COMPANY.address}</li>
              <li><strong>Siren :</strong> 123 456 789 (Exemple)</li>
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">2. Conditions générales d'utilisation</h2>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">3. Propriété intellectuelle</h2>
            <p>
              {COMPANY.name} est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'entreprise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">4. Gestion des données personnelles</h2>
            <p>
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et le Règlement Européen sur la Protection des Données (RGPD).
            </p>
            <p className="mt-2">
              Les informations recueillies via le formulaire de contact font l'objet d'un traitement informatique destiné à répondre à vos demandes de devis et d'intervention. Ces données ne sont jamais transmises à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">5. Liens hypertextes et cookies</h2>
            <p>
              La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation.
            </p>
          </section>

          <div className="pt-12 border-t border-slate-100 text-sm italic text-slate-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
