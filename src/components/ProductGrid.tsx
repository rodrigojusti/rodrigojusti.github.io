/**
 * ProductGrid — Seção de produtos
 * 
 * Adicione seus produtos aqui no array `products`.
 * Cada produto deve ter: name, type, desc, price, image, tags
 * 
 * Tipos disponíveis: "agendas" | "pastas" | "adesivos" | "papel_de_carta"
 */

export interface Product {
  id: string;
  name: string;
  type: "agendas" | "pastas" | "adesivos" | "papel_de_carta";
  desc: string;
  price: string;
  image: string;
  tags: string[];
}

// Adicione seus produtos aqui
const products: Product[] = [];

const ProductGrid = () => {
  if (products.length === 0) {
    return (
      <section className="py-16 px-6">
        <div className="section-heading">
          <p className="eyebrow">Unicidade & Personalidade</p>
          <h2 className="font-display text-accent-foreground">Conheça nossos produtos</h2>
          <p>Cada produto é feito com carinho, amor e cuidado, como você merece.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div
            className="h-48 rounded-2xl flex items-center justify-center text-muted-foreground font-body text-sm"
            style={{ border: "2px dashed hsl(var(--border))" }}
          >
            Em breve: Agendas, Pastas, Adesivos & Papéis de Carta
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="section-heading">
        <p className="eyebrow">Unicidade & Personalidade</p>
        <h2 className="font-display text-accent-foreground">Conheça nossos produtos</h2>
        <p>Cada produto é feito com carinho, amor e cuidado, como você merece.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="bg-card rounded-lg p-4 shadow-card overflow-hidden transition-transform duration-200 ease-expo-out hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="font-display text-lg mb-1 text-accent-foreground">{product.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{product.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2.5 py-0.5 rounded-full bg-secondary/30 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
