import { motion } from 'framer-motion';
import { Clock, Cpu, Heart, Sparkles } from 'lucide-react';

const diferenciais = [
  {
    icon: Clock,
    title: 'Atendimento Sem Pressa',
    description: 'Cada paciente é único. Dedicamos tempo para ouvir, planejar e executar com calma e perfeição.',
    accent: 'from-olive/10 to-gold/10',
  },
  {
    icon: Cpu,
    title: 'Tecnologia & Planejamento Digital',
    description: 'Scanner intraoral 3D, planejamento digital do sorriso e equipamentos de última geração.',
    accent: 'from-gold/10 to-olive-light/10',
  },
  {
    icon: Heart,
    title: 'Procedimentos Confortáveis',
    description: 'Técnicas minimamente invasivas e sedação consciente para uma experiência sem dor e sem medo.',
    accent: 'from-olive/10 to-gold/10',
  },
  {
    icon: Sparkles,
    title: 'Ambiente Exclusivo & Relaxante',
    description: 'Espaço projetado como um spa: aromaterapia, música ambiente e privacidade total.',
    accent: 'from-gold/10 to-olive-light/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function Diferenciais() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-beige/50 rounded-full blur-3xl -z-0" />

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
            Por que nos escolher
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite">
            Uma experiência{' '}
            <span className="text-olive italic">diferente</span> no dentista
          </h2>
          <p className="mt-4 text-graphite/60 max-w-2xl mx-auto text-base sm:text-lg">
            Combinamos excelência técnica, conforto e tecnologia para cuidar do seu sorriso com o cuidado que ele merece.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {diferenciais.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-graphite/6 p-6 md:p-7 shadow-sm hover:shadow-xl hover:shadow-olive/8 hover:border-olive/25 transition-all duration-500 cursor-default"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-olive/8 flex items-center justify-center mb-5 group-hover:bg-olive/15 transition-colors duration-300">
                  <item.icon size={22} className="text-olive" />
                </div>
                <h3 className="font-heading text-xl font-bold text-graphite mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
