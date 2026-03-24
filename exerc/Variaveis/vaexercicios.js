// Cadastro de Produto
// Crie variáveis para armazenar o nome de um produto, seu preço e a quantidade em estoque. Imprima essas informações no console.

export function exercicio_var1() {
    const nomeProduto = "Monitor Gamer 24'";
    let preco = 1200.50;
    let estoque = 15;

    return {
        nomeProduto,
        preco,
        estoque
    };
}

// Operações Matemáticas
// Crie variáveis para armazenar dois números. Calcule e imprima a soma e a multiplicação desses números no console.

export function exercicio_var2() {
    let num1 = 10;
    let num2 = 5;
    let soma = num1 + num2;
    let produto = num1 * num2;

    return{
        soma,
        produto
    }
}

// Texto e Concatenação
// Crie variáveis para armazenar seu nome, sobrenome e idade. Concatene essas informações em uma frase e imprima no console.

export function exercicio_var3() {
    let nome = "Ana";
    let sobrenome = "Silva";
    let nomeCompleto = nome + " " + sobrenome;
    let idade = 25;

    return{
        nomeCompleto,
        idade
    }
}
