
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { COMPANY } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[#6fc201] p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-[#1a2e05] leading-tight tracking-tight uppercase">AQUA-TECH</span>
                <span className="text-xs font-semibold text-[#6fc201] tracking-wider uppercase">Plomberie Expertise</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-[#6fc201] ${
                  isActive(link.path) ? 'text-[#6fc201]' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="gradient-brand gradient-brand-hover text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-[#6fc201]/20"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-[#6fc201] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-semibold ${
                  isActive(link.path) ? 'text-[#6fc201] bg-neutral-50' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="block w-full text-center gradient-brand text-white px-3 py-4 rounded-md font-bold text-lg"
            >
              Appeler : {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
