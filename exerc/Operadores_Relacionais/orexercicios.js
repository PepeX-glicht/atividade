// Operadores de Comparação
// Testa a lógica entre dois números usando símbolos matemáticos para retornar verdadeiro ou falso.

export function exercicio_or() {
let x = 10;
let y = 20;

let maior = (x > y);
let menor = (x < y);
let maiorIgual = (x >= y);  
let menorIgual = (x <= y);  
let igual = (x == y); 
let diferente = (x != y);

return{
    maior,
    menor,
    maiorIgual,
    menorIgual,
    igual,
    diferente
}
}
