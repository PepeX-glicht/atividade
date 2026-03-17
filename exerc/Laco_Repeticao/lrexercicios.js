
// Teste while
// Repete o código enquanto a condição for real, testando antes de começar.
export function exercicio_lr1() {
    let i = 0;
    let resultados = []; // Array para guardar os números
    while (i < 5) {
        resultados.push(i);
        i++;
    }
    return resultados; // Retorna [0, 1, 2, 3, 4]
}

// Teste dowhile
// Executa o código primeiro e só depois testa a condição, garantindo uma rodada inicial.
export function exercicio_lr2() {
    let j = 0;
    let resultados = [];
    do {
        resultados.push(j);
        j++;
    } while (j < 5);
    return resultados;
}

// Teste for
// Repetição controlada com contador, condição e incremento integrados.
export function exercicio_lr3() {
    let resultados = [];
    for (let k = 0; k < 5; k++) {
        resultados.push(k);
    }
    return resultados;
}

// Teste for each
// Atalho para percorrer e ler cada item de uma lista.
export function exercicio_lr4() {
    let numeros = [1, 2, 3];
    let listaFormatada = "";
    numeros.forEach(n => {
        listaFormatada += `Número: ${n} | `;
    });
    return listaFormatada;
}

// Teste map
// Gera uma nova lista modificada a partir dos dados de uma lista original.
export function exercicio_lr5() {
    let numeros = [1, 2, 3];
    let dobro = numeros.map(n => n * 2);
    return dobro; // Retorna a nova lista [2, 4, 6]
}
