
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-4xl mx-auto bg-white border border-[#6fc201]/20 text-[#1a2e05] p-6 rounded-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          <p className="font-extrabold mb-1 text-[#6fc201] uppercase tracking-wider">Respect de votre vie privée</p>
          <p className="text-neutral-500 font-medium">
            Nous utilisons des cookies essentiels pour le bon fonctionnement de notre site et l'analyse de notre trafic local.
          </p>
        </div>
        <div className="flex space-x-3 shrink-0">
          <button 
            onClick={accept}
            className="gradient-brand hover:brightness-110 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#6fc201]/20"
          >
            Accepter
          </button>
          <button 
            onClick={() => setShow(false)}
            className="text-neutral-400 hover:text-[#6fc201] px-4 py-2 text-sm font-bold transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
