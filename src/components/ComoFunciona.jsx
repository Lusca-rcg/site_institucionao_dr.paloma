import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, ClipboardList, Stethoscope, Smile, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Contato Inicial',
    description: 'Entre em contato pelo WhatsApp ou formulário. Nossa equipe vai atender você com carinho e agilidade.',
  },
  {
    icon: ClipboardList,
    title: 'Avaliação Completa',
    description: 'Consulta detalhada com exames digitais, radiografias e planejamento personalizado do seu tratamento.',
  },
  {
    icon: Stethoscope,
    title: 'Plano de Tratamento',
    description: 'Apresentamos todas as opções, valores e prazos com total transparência. Você decide com calma.',
  },
  {
    icon: Smile,
    title: 'Tratamento com Conforto',
    description: 'Cada sessão é realizada com técnicas modernas, minimamente invasivas e foco total no seu bem-estar.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento Contínuo',
    description: 'Após o tratamento, continuamos cuidando de você com retornos, manutenções e suporte permanente.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ComoFunciona() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.7'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
            Jornada do Paciente
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite">
            Como funciona sua{' '}
            <span className="text-olive italic">experiência</span>
          </h2>
          <p className="mt-4 text-graphite/60 max-w-2xl mx-auto text-base sm:text-lg">
            Do primeiro contato ao pós-tratamento, cada etapa foi pensada para que você se sinta seguro e acolhido.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-graphite/8" />
          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-8 top-0 w-0.5 bg-gradient-to-b from-olive via-gold to-olive origin-top"
          />

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative flex gap-5 md:gap-7 pl-2"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-olive text-white flex items-center justify-center shadow-lg shadow-olive/20">
                    <step.icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="text-[11px] font-bold text-olive uppercase tracking-widest">
                    Etapa {i + 1}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-graphite mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-graphite/60 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
