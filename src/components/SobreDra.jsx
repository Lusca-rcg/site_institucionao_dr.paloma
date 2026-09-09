import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';

export default function SobreDra() {
  return (
    <section id="dra-paloma" className="py-20 md:py-28 bg-beige/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-olive/10 to-gold/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-graphite/10">
              <img
                src="/images/dra-paloma.jpg"
                alt="Dra. Paloma Grecco"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              {/* Overlay Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-graphite/60 to-transparent" />
              {/* CRO Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-olive/15">
                  <p className="font-heading text-lg font-bold text-graphite">
                    Dra. Paloma Grecco
                  </p>
                  <p className="text-sm text-graphite/60">
                    CRO-SP 00000 · Cirurgiã-Dentista
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
                Conheça a profissional
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-graphite leading-tight">
                Cuidado que vai além da{' '}
                <span className="text-olive italic">técnica</span>
              </h2>
            </div>

            <p className="text-base text-graphite/70 leading-relaxed">
              A Dra. Paloma Grecco acredita que a odontologia transforma vidas. Com formação sólida e atualização constante, ela combina conhecimento técnico com empatia genuína para oferecer um atendimento que respeita o tempo, o corpo e as emoções de cada paciente.
            </p>

            <p className="text-base text-graphite/70 leading-relaxed">
              Sua missão é criar um espaço onde saúde e beleza se encontram em um ambiente acolhedor, sem pressa e sem medo — onde cada sorriso é tratado como uma obra de arte.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: GraduationCap, label: 'Pós-graduação em Estética Dental' },
                { icon: Award, label: 'Certificação em Harmonização Orofacial' },
                { icon: Heart, label: 'Atendimento Humanizado & Acolhedor' },
              ].map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-graphite/6"
                >
                  <cred.icon size={22} className="text-olive mb-2" />
                  <span className="text-xs font-medium text-graphite/70 leading-snug">
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Instagram CTA */}
            <a
              href="https://instagram.com/espacosaude_drapaloma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-emerald-dark transition-colors duration-300 mt-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @espacosaude_drapaloma
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
