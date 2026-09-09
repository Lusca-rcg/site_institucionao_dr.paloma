import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Carolina M.',
    tratamento: 'Lentes de Contato Dental',
    texto: 'A Dra. Paloma mudou a minha vida! Eu tinha vergonha de sorrir e hoje não paro mais. O atendimento é impecável, o ambiente é lindo e ela é extremamente cuidadosa. Super recomendo!',
    estrelas: 5,
  },
  {
    nome: 'Rafael S.',
    tratamento: 'Alinhadores Invisíveis',
    texto: 'Fiz o tratamento com alinhadores e estou impressionado com o resultado. Tudo foi explicado com muita clareza e o acompanhamento é de altíssima qualidade. A melhor decisão que tomei!',
    estrelas: 5,
  },
  {
    nome: 'Amanda L.',
    tratamento: 'Harmonização Orofacial',
    texto: 'Tinha receio de fazer harmonização, mas a Dra. Paloma me deixou tão segura que foi super tranquilo. O resultado ficou natural e lindo. O consultório parece um spa, me senti acolhida!',
    estrelas: 5,
  },
  {
    nome: 'Pedro H.',
    tratamento: 'Implante Dentário',
    texto: 'Perdi um dente em um acidente e achei que nunca mais teria um sorriso bonito. A Dra. Paloma fez um implante perfeito! Parece meu dente natural. Gratidão eterna pela dedicação.',
    estrelas: 5,
  },
  {
    nome: 'Juliana F.',
    tratamento: 'Clareamento Dental',
    texto: 'Fiz clareamento e o resultado superou minhas expectativas. A equipe é maravilhosa, o consultório é lindo e moderno. Me senti uma VIP durante todo o atendimento. Nota 1000!',
    estrelas: 5,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Depoimentos() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const timerRef = useRef(null);

  const paginate = useCallback((newDirection) => {
    setCurrent(([prev]) => [(prev + newDirection + depoimentos.length) % depoimentos.length, newDirection]);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  // Reset autoplay timer whenever current changes or on manual action
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timerRef.current);
  }, [current, paginate]);

  const dep = depoimentos[current];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-beige/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-olive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite">
            O que nossos pacientes{' '}
            <span className="text-olive italic">dizem</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl border border-graphite/6 p-8 md:p-10 shadow-lg relative">
                  <Quote size={40} className="absolute top-6 right-6 text-olive/15" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(dep.estrelas)].map((_, i) => (
                      <Star key={i} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-graphite/80 leading-relaxed italic mb-6">
                    "{dep.texto}"
                  </p>

                  <div>
                    <p className="font-heading text-lg font-bold text-graphite">
                      {dep.nome}
                    </p>
                    <p className="text-sm text-olive font-medium">
                      {dep.tratamento}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border border-graphite/10 flex items-center justify-center hover:bg-olive hover:text-white hover:border-olive transition-all duration-300 text-graphite/60 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? 'bg-olive w-6'
                      : 'bg-graphite/15 hover:bg-graphite/30'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border border-graphite/10 flex items-center justify-center hover:bg-olive hover:text-white hover:border-olive transition-all duration-300 text-graphite/60 cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
