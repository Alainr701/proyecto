import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300">
      
      {/* Main Contact Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>
              <p className="text-stone-400 mb-8">
                ¿Interesado en distribuir ZanaFresh o quieres probar nuestros sachets? Escríbenos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-carrot-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Ubicación</h4>
                  <p>Av. Emprendedores 123, Zona Comercial</p>
                  <p className="text-sm">Ciudad Central, CP 5000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-carrot-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Teléfono</h4>
                  <p>+51 987 654 321</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-carrot-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p>contacto@zanafresh.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-carrot-500 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Horario</h4>
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-carrot-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-carrot-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-carrot-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Map / Location Visual */}
          <div className="bg-stone-800 rounded-2xl p-4 h-full min-h-[300px] flex flex-col">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <MapPin size={20} /> Nuestra Ubicación
            </h3>
            {/* Simulated Map */}
            <div className="flex-grow w-full bg-stone-700 rounded-xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/id/10/800/600" // Using a generic landscape/city image for map placeholder
                alt="Mapa de Ubicación" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-carrot-600 text-white px-4 py-2 rounded-lg shadow-lg transform -translate-y-4">
                  <p className="font-bold flex items-center gap-2"><MapPin size={16}/> Planta Principal</p>
                </div>
              </div>
            </div>
             <p className="mt-4 text-sm text-stone-500 italic">
                *Distribución a puntos de venta locales, gimnasios y escuelas.
             </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-stone-800 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">© 2024 ZanaFresh. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-carrot-500">Privacidad</a>
            <a href="#" className="hover:text-carrot-500">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;