const Hero = () => {
  return (
    <header
      className="rounded-b-3xl mb-8 px-6 pt-16 pb-20"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="max-w-3xl mx-auto text-left">
        <p className="eyebrow hero-animate">Papelaria personalizada | papelaria teocrática</p>
        <h1 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] leading-tight mb-4 text-accent-foreground hero-animate">
          Agendas, pastas e etiquetas feitas com amor e carinho
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl text-lg hero-animate-delay-1">
          Produtos únicos, personalizados e customizados que te ajudam a organizar
          sua rotina, preservar memórias importantes, e a manter o foco no que é
          mais importante na vida.
        </p>

        <div className="flex flex-wrap gap-3 mt-6 hero-animate-delay-2">
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
        </div>

        <p className="mt-4 text-sm text-muted-foreground hero-animate-delay-3">
          Produção própria • Enviamos para todo o Brasil
        </p>
      </div>
    </header>
  );
};

export default Hero;
