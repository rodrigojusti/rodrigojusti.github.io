# Como Adicionar Novos Produtos

Para adicionar novos produtos ao seu portfólio, siga os passos abaixo:

## Passo 1: Abra o arquivo de produtos

Navegue até o arquivo: `src/data/products.ts`

## Passo 2: Adicione um novo produto

Copie e cole este modelo no array de produtos:

```typescript
{
  name: "Nome do Produto",
  type: "agendas", // ou "pastas", "adesivos", "papel_de_carta"
  desc: "Descrição do produto aqui.",
  price: "R$ 000",
  image: "URL_DA_IMAGEM",
  tags: ["tag1", "tag2"],
}
```

## Exemplo completo:

```typescript
{
  name: "Agenda Executiva Premium",
  type: "agendas",
  desc: "Agenda com capa dura em couro sintético, 200 páginas e marcador de fita.",
  price: "R$ 189",
  image: "https://images.unsplash.com/photo-exemplo",
  tags: ["capa dura", "200 páginas"],
}
```

## Tipos de produtos disponíveis:

- `agendas` - Agendas
- `pastas` - Pastas
- `adesivos` - Adesivos
- `papel_de_carta` - Cartas

## Dicas:

1. Use imagens de alta qualidade do Unsplash ou Pexels
2. Mantenha as descrições concisas e informativas
3. Use tags relevantes que descrevam características únicas
4. Certifique-se de adicionar uma vírgula após cada produto (exceto o último)

## Como adicionar sua logo:

Para substituir o placeholder da logo, você tem duas opções:

### Opção 1: Usar uma imagem
No arquivo `src/components/Header.tsx`, substitua:
```tsx
<div className="logo-placeholder">
  <span>Logo</span>
</div>
```

Por:
```tsx
<img src="/caminho/para/sua/logo.png" alt="Arts da Brenda" className="logo-image" />
```

### Opção 2: Personalizar o placeholder
No arquivo `src/index.css`, você pode modificar a classe `.logo-placeholder` para personalizar cores, tamanho, etc.
