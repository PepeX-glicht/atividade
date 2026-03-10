
// Teste while
// Repete o código enquanto a condição for real, testando antes de começar.

export function exercicio_lr1() {

    let i = 0;
    while (i < 5) {
    console.log(i);
    i++;
    }
}

// Teste dowhile
// Executa o código primeiro e só depois testa a condição, garantindo uma rodada inicial.

export function exercicio_lr2() {

    let j = 0;
    do {
    console.log(j);
    j++;
    } while (j < 5);
}

// Teste for
// Repetição controlada com contador, condição e incremento integrados.

export function exercicio_lr3() {

    for (let k = 0; k < 5; k++) {
    console.log(k);
    }
}

// Teste for each
// Atalho para percorrer e ler cada item de uma lista.

export function exercicio_lr4() {

    let numeros = [1,2,3];
    numeros.forEach(n => console.log(n));
}

// Teste map
// Gera uma nova lista modificada a partir dos dados de uma lista original.

export function exercicio_lr5() {
    let numeros = [1, 2, 3];
    let dobro = numeros.map(n => n * 2);
    console.log(dobro);
}
