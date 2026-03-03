
// Verificação de Presença em Array
// Verifica se um elemento existe dentro de uma lista e retorna um valor booleano.

function exercicio_busca() {
    let lista = ["João", "Maria", "Carlos"];
    console.log(lista.includes("Maria"));
}

// Acumulador de Valores (Somatória)
// Percorre um array numérico somando todos os seus elementos para gerar um total único.

function exercicio_somatoria() {
    let numeros = [10,20,30];
    let soma = numeros.reduce((acc, n) => acc + n, 0);
    console.log("Soma:", soma);
}

    console.log("Iniciando testes...");
    exercicio_busca();
    console.log("-----------------------------------------------------------------------");
    exercicio_somatoria();
    console.log("Todos os exercícios finalizados.");