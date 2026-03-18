export type ProductType = 'agendas' | 'pastas' | 'adesivos' | 'papel_de_carta';

export interface Product {
  name: string;
  type: ProductType;
  desc: string;
  price: string;
  image: string;
  tags: string[];
}
