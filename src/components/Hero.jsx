import { motion } from 'framer-motion';
import { Star, Users, Award, ChevronDown } from 'lucide-react';

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-clinic.jpg"
          alt="Consultório moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 md:from-white/90 md:via-white/75 md:to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-olive/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-olive/10 text-olive text-xs font-semibold rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 bg-olive rounded-full animate-pulse-soft" />
                Vagas limitadas para avaliação exclusiva
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold text-graphite leading-[1.1] tracking-tight"
            >
              Seu sorriso merece{' '}
              <span className="text-olive italic">cuidado</span> e{' '}
              <span className="relative inline-block">
                <span className="relative z-10">excelência</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-olive/15 -z-0" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-graphite/70 max-w-xl leading-relaxed"
            >
              Odontologia estética e funcional com tecnologia de ponta, atendimento humanizado e resultados que transformam sua autoestima. Agende sua avaliação personalizada.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-sm font-medium text-graphite/80">5.0 no Google</span>
              </div>
              <div className="w-px h-5 bg-graphite/15" />
              <div className="flex items-center gap-1.5">
                <Users size={15} className="text-olive" />
                <span className="text-sm font-medium text-graphite/80">+1.000 pacientes</span>
              </div>
              <div className="w-px h-5 bg-graphite/15" />
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-olive" />
                <span className="text-sm font-medium text-graphite/80">CRO ativo</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-olive/20 via-gold/10 to-olive/20 rounded-3xl blur-xl animate-glow" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-olive/15 p-6 sm:p-8 shadow-2xl shadow-olive/5">
              {/* Form Header */}
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-olive/10 text-olive text-[11px] font-bold uppercase tracking-widest rounded-full mb-3">
                  Avaliação VIP
                </span>
                <h2 className="font-heading text-2xl sm:text-[1.7rem] font-bold text-graphite">
                  Agende Sua Consulta
                </h2>
                <p className="text-sm text-graphite/60 mt-1.5">
                  Preencha seus dados e entraremos em contato
                </p>
              </div>

              {/* Form */}
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const nome = formData.get('nome');
                  const whatsapp = formData.get('whatsapp');
                  const procedimento = formData.get('procedimento');
                  const msg = `Olá Dra. Paloma! Meu nome é ${nome}, gostaria de agendar uma avaliação. Procedimento de interesse: ${procedimento}. Meu WhatsApp: ${whatsapp}`;
                  window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
                }}
              >
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    className="w-full px-4 py-3 bg-beige/60 border border-graphite/8 rounded-xl text-sm text-graphite placeholder:text-graphite/40 focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp (DDD + número)"
                    required
                    className="w-full px-4 py-3 bg-beige/60 border border-graphite/8 rounded-xl text-sm text-graphite placeholder:text-graphite/40 focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <select
                    name="procedimento"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 bg-beige/60 border border-graphite/8 rounded-xl text-sm text-graphite appearance-none focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-300"
                  >
                    <option value="" disabled>Procedimento de interesse</option>
                    <option value="Alinhadores Invisíveis">Alinhadores Invisíveis</option>
                    <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                    <option value="Harmonização Orofacial">Harmonização Orofacial</option>
                    <option value="Implantes Dentários">Implantes Dentários</option>
                    <option value="Clareamento Dental">Clareamento Dental</option>
                    <option value="Check-up Preventivo">Check-up Preventivo</option>
                    <option value="Outro">Outro</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-graphite/40 pointer-events-none" />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-olive text-white font-semibold text-sm rounded-xl hover:bg-emerald-dark transition-colors duration-300 shadow-lg shadow-olive/25 cursor-pointer"
                >
                  Quero Agendar Minha Avaliação
                </motion.button>
              </form>

              {/* Trust Note */}
              <p className="text-center text-[11px] text-graphite/45 mt-4">
                🔒 Seus dados estão protegidos. Entraremos em contato apenas pelo WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
