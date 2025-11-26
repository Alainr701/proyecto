import React, { useState } from 'react';
import { Menu, X, Carrot } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#introduccion' },
  { label: 'El Producto', href: '#producto' },
  { label: 'Alcances y Límites', href: '#alcances' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-carrot-500 p-2 rounded-full text-white">
              <Carrot size={24} />
            </div>
            <span className="font-bold text-2xl text-stone-800 tracking-tight">Zana<span className="text-carrot-600">Fresh</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-600 hover:text-carrot-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-carrot-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-600 hover:text-carrot-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;