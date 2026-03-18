import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header
      className="rounded-b-3xl mb-8 px-6 pt-16 pb-20"
      style={{ background: "var(--hero-gradient)" }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Papelaria personalizada | papelaria teocrática</p>
        <h1 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] leading-tight mb-4 text-accent-foreground">
          Agendas, pastas e etiquetas feitas com amor e carinho
        </h1>
        <motion.p
          className="text-muted-foreground leading-relaxed max-w-xl text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Produtos únicos, personalizados e customizados que te ajudam a organizar
          sua rotina, preservar memórias importantes, e a manter o foco no que é
          mais importante na vida.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {["Tudo", "Agendas", "Pastas", "Adesivos", "Cartas"].map((label, i) => (
            <button
              key={label}
              className={`rounded-full px-5 py-2.5 font-body font-semibold text-sm transition-all duration-200 ease-expo-out cursor-pointer
                ${i === 0
                  ? "bg-primary/10 text-accent-foreground shadow-soft"
                  : "bg-transparent text-foreground hover:bg-primary/5 hover:-translate-y-0.5"
                }
              `}
              style={{ border: "1px solid hsl(var(--border))" }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Produção própria • Enviamos para todo o Brasil
        </motion.p>
      </motion.div>
    </header>
  );
};

export default Hero;
