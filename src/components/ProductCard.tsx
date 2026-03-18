import { Product } from '../types';
import { useEffect, useRef, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`product-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="product-card__image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="product-card__tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
