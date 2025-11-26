import React from 'react';
import { Leaf, ShieldCheck, Droplet, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="producto" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-carrot-500 font-semibold tracking-wide uppercase">Fundamentación Teórica</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Diseño, Nutrición y Practicidad
          </p>
          <p className="mt-4 max-w-2xl text-xl text-stone-400 lg:mx-auto">
            Basado en estudios de mercado y ergonomía, nuestro producto integra funcionalidad y estética.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-stone-800 rounded-xl hover:bg-stone-750 transition-colors">
            <div className="w-12 h-12 bg-carrot-600 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nutrición Natural</h3>
            <p className="text-stone-400">Alto contenido de betacarotenos, vitamina B y antioxidantes. Sin aditivos artificiales.</p>
          </div>

          <div className="p-6 bg-stone-800 rounded-xl hover:bg-stone-750 transition-colors">
            <div className="w-12 h-12 bg-nature-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Practicidad</h3>
            <p className="text-stone-400">Envase sachet ergonómico, fácil de abrir, transportar y consumir en cualquier lugar.</p>
          </div>

          <div className="p-6 bg-stone-800 rounded-xl hover:bg-stone-750 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Seguridad</h3>
            <p className="text-stone-400">Material de grado alimentario, resistente y sellado herméticamente para garantizar inocuidad.</p>
          </div>

          <div className="p-6 bg-stone-800 rounded-xl hover:bg-stone-750 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Droplet className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Evaluación Continua</h3>
            <p className="text-stone-400">Mejora constante basada en retroalimentación sobre sabor, textura y presentación.</p>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://picsum.photos/id/431/800/600" 
              alt="Proceso de Calidad" 
              className="rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Elaboración de la Propuesta</h3>
                <p className="text-stone-300">
                    El proceso parte de la identificación de necesidades, continúa con la producción (extracción, filtrado, pasteurización) y culmina con el envasado.
                </p>
                <div className="bg-stone-800 p-6 rounded-xl border-l-4 border-carrot-500">
                    <h4 className="font-bold text-white mb-2">Criterios de Éxito</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-400 text-sm">
                        <li>• Calidad Sensorial (Sabor/Color)</li>
                        <li>• Aporte Vitamínico</li>
                        <li>• Diseño Funcional</li>
                        <li>• Precio Competitivo</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;