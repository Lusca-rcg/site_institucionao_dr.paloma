import { motion } from 'framer-motion';
import { Smile, Sparkles, ScanFace, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const tratamentos = [
  {
    icon: Smile,
    title: 'Alinhadores Invisíveis',
    description: 'Correção ortodôntica discreta e confortável com tecnologia de ponta. Sorria durante o tratamento.',
    tag: 'Mais procurado',
  },
  {
    icon: Sparkles,
    title: 'Odontologia Estética',
    description: 'Lentes de contato dental, clareamento e restaurações em resina para um sorriso natural e deslumbrante.',
    tag: null,
  },
  {
    icon: ScanFace,
    title: 'Harmonização Orofacial',
    description: 'Botox, preenchimento labial e bichectomia para harmonizar e rejuvenescer seu rosto com naturalidade.',
    tag: null,
  },
  {
    icon: Wrench,
    title: 'Implantes & Reabilitação',
    description: 'Implantes de última geração e próteses sobre implantes. Recupere sua mastigação e autoestima.',
    tag: null,
  },
  {
    icon: ShieldCheck,
    title: 'Check-up Preventivo',
    description: 'Avaliação completa com radiografia digital, limpeza profissional e plano de cuidados personalizado.',
    tag: 'Essencial',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-beige/40 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-80 h-80 bg-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite">
            Tratamentos que{' '}
            <span className="text-olive italic">transformam</span>
          </h2>
          <p className="mt-4 text-graphite/60 max-w-2xl mx-auto text-base sm:text-lg">
            Do planejamento ao resultado final, cada tratamento é conduzido com precisão, arte e carinho.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {tratamentos.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative bg-white rounded-2xl border border-graphite/6 p-6 md:p-7 shadow-sm hover:shadow-xl hover:shadow-olive/8 hover:border-olive/25 transition-all duration-500 cursor-default ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Tag */}
              {item.tag && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-olive/15 text-olive text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {item.tag}
                </span>
              )}

              <div className="w-12 h-12 rounded-xl bg-olive/8 flex items-center justify-center mb-5 group-hover:bg-olive/15 transition-colors duration-300">
                <item.icon size={22} className="text-olive" />
              </div>

              <h3 className="font-heading text-xl font-bold text-graphite mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-graphite/60 leading-relaxed mb-5">
                {item.description}
              </p>

              <a
                href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${item.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive group-hover:text-emerald-dark transition-colors duration-300"
              >
                Saiba mais
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
