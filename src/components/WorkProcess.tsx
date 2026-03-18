import useInView from "@/hooks/use-in-view";

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

const WorkProcess = () => {
  const { ref, inView } = useInView();

  return (
    <section className="px-6 py-8">
      <div
        ref={ref}
        className="max-w-3xl mx-auto rounded-lg p-8"
        style={{ background: "var(--work-gradient)" }}
      >
        <div className="section-heading">
          <h2 className="font-display text-accent-foreground">Como trabalho</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className={`bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-soft text-center transition-all duration-200 ease-expo-out hover:-translate-y-1 reveal reveal-delay-${i + 1} ${inView ? "is-visible" : ""}`}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
