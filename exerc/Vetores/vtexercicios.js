// Verificação de Presença em Array
// Verifica se um elemento existe dentro de uma lista e retorna um valor booleano.

export function exercicio_busca() {
    let lista = ["João", "Maria", "Carlos"];
    let nomeProcurado = "Maria";
    
    return{
        nomeProcurado
    }
}

// Acumulador de Valores (Somatória)
// Percorre um array numérico somando todos os seus elementos para gerar um total único.

export function exercicio_somatoria() {
    let numeros = [10,20,30];
    let soma = numeros.reduce((acc, n) => acc + n, 0);
    
    return{
        soma
    }
}
