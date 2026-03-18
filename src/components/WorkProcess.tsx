import { motion } from "framer-motion";

const steps = [
  {
    icon: "✍️",
    title: "Pedido",
    desc: "Atendimento exclusivo via WhatsApp, com personalizações essenciais inclusas.",
    note: "Para projetos do zero ou mudanças profundas, consulte nossa Customização Avançada.",
  },
  {
    icon: "💳",
    title: "Pagamento",
    desc: "Aceitamos Pix, cartões de crédito/débito ou dinheiro.",
    note: "O pagamento oficializa seu pedido e garante sua reserva em nossa agenda de produção.",
  },
  {
    icon: "🕊️",
    title: "Produção",
    desc: "Padrão: 10 dias · Prioritária: 72 horas",
    note: "Os prazos começam a contar logo após a confirmação do seu pagamento.",
  },
  {
    icon: "📦",
    title: "Entrega",
    desc: "Retirada gratuita em nossa papelaria ou envio via frete para sua casa.",
    note: "Escolha a opção que melhor se adapta à sua rotina no momento de finalizar o pedido.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const WorkProcess = () => {
  return (
    <section className="px-6 py-8">
      <motion.div
        className="max-w-3xl mx-auto rounded-lg p-8"
        style={{ background: "var(--work-gradient)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <h2 className="font-display text-accent-foreground">Como trabalho</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-soft text-center transition-transform duration-200 ease-expo-out hover:-translate-y-1"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div
                className="w-14 h-14 rounded-lg mx-auto mb-3 grid place-items-center text-2xl"
                style={{ background: "var(--icon-gradient)" }}
              >
                {step.icon}
              </div>
              <h3 className="font-display text-base mb-2 text-accent-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              <small className="block mt-2 text-xs text-muted-foreground/70">{step.note}</small>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkProcess;
