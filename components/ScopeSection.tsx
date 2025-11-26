import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const ScopeSection: React.FC = () => {
  return (
    <section id="alcances" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Alcances y Límites</h2>
          <p className="mt-4 text-xl text-stone-500">Transparencia y estructura de nuestra investigación</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Alcances */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-nature-600 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-nature-600" size={32} />
              <h3 className="text-2xl font-bold text-stone-800">1.5.1 Alcances</h3>
            </div>
            <div className="prose text-stone-600">
              <p className="mb-4">
                El presente estudio se enfoca en el <strong>diseño conceptual del emprendimiento</strong>. Abarca:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-nature-500 rounded-full flex-shrink-0" />
                  <span>Análisis teórico y estructura del proceso productivo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-nature-500 rounded-full flex-shrink-0" />
                  <span>Fundamentos nutricionales de la zanahoria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-nature-500 rounded-full flex-shrink-0" />
                  <span>Diseño del empaque en sachet y criterios de calidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-nature-500 rounded-full flex-shrink-0" />
                  <span>Estudio preliminar de mercado meta y tendencias saludables.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Límites */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-carrot-600 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-carrot-600" size={32} />
              <h3 className="text-2xl font-bold text-stone-800">1.5.2 Límites</h3>
            </div>
            <div className="prose text-stone-600">
              <p className="mb-4">
                El estudio mantiene las siguientes delimitaciones para garantizar su viabilidad académica y operativa:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-carrot-500 rounded-full flex-shrink-0" />
                  <span>No incluye pruebas de laboratorio avanzadas ni análisis microbiológicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-carrot-500 rounded-full flex-shrink-0" />
                  <span>No desarrolla proyecciones financieras complejas o planes de inversión a gran escala.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 bg-carrot-500 rounded-full flex-shrink-0" />
                  <span>La propuesta es conceptual, sustentada en fundamentos teóricos y metodológicos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;