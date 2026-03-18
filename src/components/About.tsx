import { useEffect, useRef, useState } from 'react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-me ${isVisible ? 'visible' : ''}`}
      id="sobre"
    >
      <div className="section-heading">
        <h2>Sobre mim</h2>
      </div>
      <p>
        Sou apaixonada por papelaria e acredito que a organização e o cuidado com as
        nossas atividades espirituais merecem um toque especial de beleza e dedicação.
        O desejo de transformar papelaria em ferramentas de zelo, criando itens
        personalizados que acompanham você no ministério, nas reuniões e no dia a dia
        inspirou a idéia. Entrego peças feitas à mão, pensadas para quem valoriza cada
        detalhe da sua rotina teocrática, escolar e de escritório.
      </p>
    </section>
  );
}
