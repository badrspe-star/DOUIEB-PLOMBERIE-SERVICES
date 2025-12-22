
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
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 text-white p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p className="font-semibold mb-1">Protection de votre vie privée</p>
          <p className="text-slate-400">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="flex space-x-3 shrink-0">
          <button 
            onClick={accept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors"
          >
            Accepter tout
          </button>
          <button 
            onClick={() => setShow(false)}
            className="text-slate-400 hover:text-white px-4 py-2 text-sm transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
