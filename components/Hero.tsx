import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 lg:pt-28 pb-16 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-carrot-100 text-carrot-700 rounded-full text-sm font-semibold">
              Innovación Saludable
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Energía Natural en cada <span className="text-carrot-600">Sachet</span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Jugo de zanahoria 100% natural, diseñado para tu estilo de vida activo. 
              Nutrición, practicidad y frescura en un formato innovador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-carrot-600 hover:bg-carrot-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl">
                Contáctanos
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a href="#introduccion" className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-base font-medium rounded-lg text-stone-700 bg-white hover:bg-stone-50 md:py-4 md:text-lg transition-all">
                Saber más
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-carrot-500/20 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/id/1080/600/600" 
              alt="Jugo de Zanahoria Fresco" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-bold text-stone-800 text-lg">100% Natural</p>
              <p className="text-stone-500 text-sm">Sin conservantes ni azúcares añadidos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;