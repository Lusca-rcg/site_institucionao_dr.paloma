import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="localizacao" className="bg-graphite text-white/80 relative overflow-hidden">
      {/* Map Strip */}
      <div className="w-full h-64 md:h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.196324432097!2d-46.655!3d-23.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ2LjgiUyA0NsKwMzknMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Espaço Saúde Dra. Paloma Grecco"
          className="grayscale-[0.3] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite pointer-events-none" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Logo Espaço Saúde Dra. Paloma Grecco"
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold text-white leading-tight">
                  Dra. Paloma Grecco
                </span>
                <span className="text-[10px] text-olive-light tracking-[0.2em] uppercase font-medium">
                  Espaço Saúde
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Cuidando de sorrisos com excelência, tecnologia e muito carinho. Sua saúde bucal em boas mãos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-olive-light flex-shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123 – Sala 45<br />Bairro Centro, São Paulo – SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-olive-light flex-shrink-0" />
                <a href="tel:+5511999999999" className="hover:text-olive-light transition-colors">(11) 99999-9999</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-olive-light flex-shrink-0" />
                <a href="mailto:contato@drapaloma.com.br" className="hover:text-olive-light transition-colors">contato@drapaloma.com.br</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">
              Horário
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-olive-light flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="text-white/50">8h às 18h</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-olive-light flex-shrink-0" />
                <div>
                  <p>Sábado</p>
                  <p className="text-white/50">8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/espacosaude_drapaloma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-olive hover:border-olive hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© 2024 Espaço Saúde Dra. Paloma Grecco. Todos os direitos reservados.</p>
          <p>
            Responsável Técnica: Dra. Paloma Grecco – CRO-SP 00000
          </p>
        </div>
      </div>
    </footer>
  );
}
