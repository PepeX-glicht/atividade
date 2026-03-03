
// Teste while
// Repete o código enquanto a condição for real, testando antes de começar.

function exercicio_while() {

    let i = 0;
    while (i < 5) {
    console.log(i);
    i++;
    }
}

// Teste dowhile
// Executa o código primeiro e só depois testa a condição, garantindo uma rodada inicial.

function exercicio_dowhile() {

    let j = 0;
    do {
    console.log(j);
    j++;
    } while (j < 5);
}

// Teste for
// Repetição controlada com contador, condição e incremento integrados.

function exercicio_for() {

    for (let k = 0; k < 5; k++) {
    console.log(k);
    }
}

// Teste for each
// Atalho para percorrer e ler cada item de uma lista.

function exercicio_foreach() {

    let numeros = [1,2,3];
    numeros.forEach(n => console.log(n));
}

// Teste map
// Gera uma nova lista modificada a partir dos dados de uma lista original.

function exercicio_map() {
    let numeros = [1, 2, 3];
    let dobro = numeros.map(n => n * 2);
    console.log(dobro);
}

console.log("Iniciando testes...");
exercicio_while();
console.log("-----------------------------------------------------------------------");
exercicio_dowhile();
console.log("-----------------------------------------------------------------------");
exercicio_for();
console.log("-----------------------------------------------------------------------");
exercicio_foreach();
console.log("-----------------------------------------------------------------------");
exercicio_map();
console.log("Exercício map finalizado.");