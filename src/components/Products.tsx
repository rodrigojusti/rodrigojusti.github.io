import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductsProps {
  filter: string;
}

export function Products({ filter }: ProductsProps) {
  const filteredProducts =
    filter === 'todos'
      ? products
      : products.filter((product) => product.type === filter);

  return (
    <section className="products" id="produtos">
      <div className="section-heading animate-fade-in">
        <p className="eyebrow">UNICIDADE & PERSONALIDADE</p>
        <h2>Conheça nossos produtos</h2>
        <p>Cada produto é feito com carinho, amor e cuidado, como você merece.</p>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
