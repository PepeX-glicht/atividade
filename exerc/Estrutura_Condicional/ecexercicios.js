
// 1 - If Simples
// Crie uma variável para a nota de um aluno. Se a nota for maior ou igual a 6, imprima "Aprovado".
export function exercicio_ec1() {
    let nota = 8.5;
    if (nota >= 6) {
        return "Aprovado";
    }
    return "Reprovado"; // Adicionado para não retornar vazio no navegador
}

// 2 - If Básico (Else)
// Crie uma variável para um número. Verifique se ele é positivo (maior ou igual a 0) ou negativo e imprima o resultado.
export function exercicio_ec2() {
    let numero = -10;
    if (numero >= 0) {
        return `O número ${numero} é Positivo.`;
    } else {
        return `O número ${numero} é Negativo.`;
    }
}

// 3 - If Composto (Else If)
// Verifique a idade de uma pessoa e classifique-a em: "Criança" (até 12 anos), "Adolescente" (13 a 17) ou "Adulto" (18 ou mais).

export function exercicio_ec3() {
    let idade = 15;
    if (idade <= 12) {
        return "Classificação: Criança";
    } else if (idade <= 17) {
        return "Classificação: Adolescente";
    } else {
        return "Classificação: Adulto";
    }
}

// 4 - Ternário
// Crie uma variável para o saldo de uma conta. Use o operador ternário para imprimir "Saldo Positivo" se for maior que 0, ou "Saldo Insuficiente" caso contrário.

export function exercicio_ec4() {
    let saldo = 50.00;
    // O ternário já retorna o valor para a variável statusConta
    let statusConta = (saldo > 0) ? "Saldo Positivo" : "Saldo Insuficiente";
    return statusConta;
}