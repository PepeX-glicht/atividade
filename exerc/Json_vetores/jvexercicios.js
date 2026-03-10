
// Manipulação de Vetor de Objetos
// Cria e exibe uma lista estruturada de produtos, utilizando JSON.stringify para formatar a saída do array de objetos no terminal.

export function exercicio_vetor(){

let produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônico",
    estoque: 10
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 80,
    categoria: "Eletrônico",
    estoque: 50
  },
  {
    id: 3,
    nome: "Teclado",
    preco: 120,
    categoria: "Eletrônico",
    estoque: 30
  },
  {
    id: 4,
    nome: "Cadeira Gamer",
    preco: 900,
    categoria: "Móveis",
    estoque: 5
  },
  {
    id: 5,
    nome: "Monitor",
    preco: 1200,
    categoria: "Eletrônico",
    estoque: 8
  }
];

console.log(JSON.stringify(produtos, null, 2));
}
