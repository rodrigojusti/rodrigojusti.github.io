import { Product } from '../types';

export const products: Product[] = [
  {
    name: "Agenda de Colorir",
    type: "agendas",
    desc: "Capa dura plasticada estilo caquinhos, interior com desenhos para colorir em papel 120g.",
    price: "R$ 1",
    image: "https://raw.githubusercontent.com/rodrigojusti/rodrigojusti.github.io/refs/heads/main/static/agenda_colorir_infantil.png",
    tags: ["infantil", "tamanho A5"],
  },
  {
    name: "Bloco de Cartas para Testemunho",
    type: "papel_de_carta",
    desc: "Capa com papel liso, personalizada com nome e interior com papel pautado para escrita de texto manuscrito, com decorações florais",
    price: "R$ 1",
    image: "https://raw.githubusercontent.com/rodrigojusti/rodrigojusti.github.io/refs/heads/main/static/bloco_cartas.png",
    tags: ["adulto", "tamanho AA", "testemunho"],
  },
  {
    name: "Agenda para Anotações de Testemunho",
    type: "agendas",
    desc: "Capa dura plastificada, personalizada com nome e interior com papel 75g com informações auxiliares para testemunho",
    price: "R$ 1",
    image: "https://raw.githubusercontent.com/rodrigojusti/rodrigojusti.github.io/refs/heads/main/static/agenda_pregacao_a6.png",
    tags: ["adulto", "tamanho A6", "testemunho"],
  },
  
];
