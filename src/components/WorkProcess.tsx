import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: '✍️',
    title: 'Pedido',
    description:
      'Atendimento exclusivo via WhatsApp, com personalizações essenciais inclusas.',
    note: 'Para projetos do zero ou mudanças profundas, consulte nossa Customização Avançada.',
  },
  {
    icon: '💳',
    title: 'Pagamento',
    description: 'Aceitamos Pix, cartões de crédito/débito ou dinheiro.',
    note: 'O pagamento oficializa seu pedido e garante sua reserva em nossa agenda de produção.',
  },
  {
    icon: '🕊️',
    title: 'Produção',
    description: 'Padrão: 10 dias | Prioritária: 72 horas',
    note: 'Os prazos começam a contar logo após a confirmação do seu pagamento.',
  },
  {
    icon: '📦',
    title: 'Entrega',
    description:
      'Retirada gratuita em nossa papelaria ou envio via frete para sua casa.',
    note: 'Escolha a opção que melhor se adapta à sua rotina no momento de finalizar o pedido.',
  },
];

export function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`work-process ${isVisible ? 'visible' : ''}`}
      id="processo"
    >
      <div className="section-heading">
        <h2>Como trabalho</h2>
      </div>
      <div className="work-grid">
        {steps.map((step, index) => (
          <article
            key={index}
            className="work-step"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="work-step__icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <small>{step.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
