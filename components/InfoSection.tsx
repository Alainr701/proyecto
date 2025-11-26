import React from 'react';
import { Target, Search, BookOpen, AlertCircle } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="introduccion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Contexto del Proyecto</h2>
          <p className="mt-4 text-xl text-stone-500">Fundamentos de nuestra iniciativa emprendedora</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-carrot-600" size={28} />
              <h3 className="text-2xl font-bold text-stone-800">Introducción</h3>
            </div>
            <p className="text-stone-600 text-justify leading-relaxed">
              Desarrollamos un emprendimiento de jugo de zanahoria en sachets, respondiendo a las tendencias actuales de consumo saludable, accesibilidad y practicidad. Integramos un enfoque de evaluación formativa para asegurar la calidad y aceptación en el mercado. Buscamos demostrar la viabilidad de este producto como una alternativa saludable y competitiva frente a bebidas artificiales.
            </p>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-carrot-600" size={28} />
              <h3 className="text-2xl font-bold text-stone-800">Comprensión del Problema</h3>
            </div>
            <p className="text-stone-600 text-justify leading-relaxed">
              Existe una limitada disponibilidad de bebidas naturales y nutritivas en formatos prácticos y de bajo costo. Muchos productos actuales contienen aditivos o exceso de azúcar. Los consumidores enfrentan dificultades de tiempo y portabilidad. Nuestro jugo en sachet soluciona esto combinando nutrición, practicidad y un precio accesible.
            </p>
          </div>
        </div>

        <div className="bg-carrot-50 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Target className="text-carrot-700" size={32} />
            <h3 className="text-3xl font-bold text-carrot-900 text-center">Objetivos de la Investigación</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg text-carrot-800 mb-2">Objetivo General</h4>
              <p className="text-stone-600">
                Desarrollar una propuesta de emprendimiento basada en la elaboración y comercialización de jugo de zanahoria en sachets, fundamentada en criterios nutricionales, técnicos y de evaluación formativa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg text-carrot-800 mb-2">Objetivos Específicos</h4>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>Analizar beneficios nutricionales y relevancia.</li>
                <li>Diseñar el proceso de producción y empaque.</li>
                <li>Identificar límites y alcances de la propuesta.</li>
                <li>Evaluar viabilidad técnica y comercial.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;