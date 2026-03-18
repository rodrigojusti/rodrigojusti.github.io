import { useState } from 'react';

interface HeroProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export function Hero({ onFilterChange, activeFilter }: HeroProps) {
  const filters = [
    { id: 'todos', label: 'Tudo' },
    { id: 'agendas', label: 'Agendas' },
    { id: 'pastas', label: 'Pastas' },
    { id: 'adesivos', label: 'Adesivos' },
    { id: 'papel_de_carta', label: 'Cartas' },
  ];

  return (
    <section className="hero">
      <div className="hero__content animate-fade-in">
        <p className="eyebrow">Papelaria personalizada | papelaria teocrática</p>
        <h1>Agendas, pastas e etiquetas feitas com amor e carinho</h1>
        <p className="hero__description">
          Produtos únicos, personalizados e customizados que te ajudam a
          organizar sua rotina, preservar memórias importantes, e a manter o foco
          no que é mais importante na vida.
        </p>
        <div className="hero__actions">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={activeFilter === filter.id ? 'active' : ''}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className="hero__note">Produção própria • Enviamos para todo o Brasil</p>
      </div>
    </section>
  );
}
