import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    pergunta: 'A primeira consulta é paga?',
    resposta: 'A avaliação inicial pode ter um valor de investimento que será abatido do tratamento. Entre em contato para saber mais sobre as condições especiais.',
  },
  {
    pergunta: 'Vocês parcelam os tratamentos?',
    resposta: 'Sim! Trabalhamos com diversas formas de pagamento: cartões de crédito (parcelamos em até 12x), PIX, boleto e planos personalizados. Nosso objetivo é tornar o tratamento acessível para você.',
  },
  {
    pergunta: 'Os procedimentos estéticos doem?',
    resposta: 'A grande maioria dos procedimentos é realizada com anestesia local e técnicas minimamente invasivas, proporcionando conforto durante todo o tratamento. Oferecemos também sedação consciente para pacientes com maior ansiedade.',
  },
  {
    pergunta: 'Quanto tempo dura um tratamento com alinhadores?',
    resposta: 'O tempo varia conforme a complexidade do caso, geralmente entre 6 a 18 meses. Na avaliação, montamos um planejamento digital 3D para você visualizar todo o processo e o resultado final antes de começar.',
  },
  {
    pergunta: 'A clínica atende convênios?',
    resposta: 'Atualmente trabalhamos com atendimento particular, o que nos permite dedicar mais tempo e atenção exclusiva a cada paciente. Oferecemos condições especiais de pagamento.',
  },
  {
    pergunta: 'Como funciona o atendimento de emergência?',
    resposta: 'Nossos pacientes têm acesso a um canal direto pelo WhatsApp para urgências. Priorizamos atendimentos de emergência no mesmo dia sempre que possível.',
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-graphite/8 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
      >
        <span className="font-heading text-base md:text-lg font-semibold text-graphite group-hover:text-olive transition-colors duration-300 pr-4">
          {faq.pergunta}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className={`transition-colors duration-300 ${isOpen ? 'text-olive' : 'text-graphite/40'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-sm md:text-base text-graphite/65 leading-relaxed pr-10">
              {faq.resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
              Perguntas Frequentes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-graphite leading-tight">
              Tire suas{' '}
              <span className="text-olive italic">dúvidas</span>
            </h2>
            <p className="mt-4 text-graphite/60 text-base sm:text-lg leading-relaxed">
              Reunimos as perguntas mais frequentes dos nossos pacientes. Se você tiver outras dúvidas, entre em contato!
            </p>

            <motion.a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-olive text-white text-sm font-semibold rounded-full hover:bg-emerald-dark transition-colors duration-300 shadow-lg shadow-olive/20"
            >
              Fale Conosco pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl border border-graphite/6 p-6 md:p-8 shadow-sm"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
