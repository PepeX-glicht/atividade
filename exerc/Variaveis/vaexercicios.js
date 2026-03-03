
// Cadastro de Produto
// Crie variáveis para armazenar o nome de um produto, seu preço e a quantidade em estoque. Imprima essas informações no console.

function exercicio1() {
    const nomeProduto = "Monitor Gamer 24'";
    let preco = 1200.50;
    let estoque = 15;

    console.log("--- Exercício 1 ---");
    console.log("Produto:", nomeProduto, "| Preço: R$", preco, "| Estoque:", estoque);
}

// Operações Matemáticas
// Crie variáveis para armazenar dois números. Calcule e imprima a soma e a multiplicação desses números no console.

function exercicio2() {
    let num1 = 10;
    let num2 = 5;
    let soma = num1 + num2;
    let produto = num1 * num2;

    console.log("--- Exercício 2 ---");
    console.log("A soma é:", soma);
    console.log("A multiplicação é:", produto);
}

// Texto e Concatenação
// Crie variáveis para armazenar seu nome, sobrenome e idade. Concatene essas informações em uma frase e imprima no console.

function exercicio3() {
    let nome = "Ana";
    let sobrenome = "Silva";
    let nomeCompleto = nome + " " + sobrenome;
    let idade = 25;

    console.log("--- Exercício 3 ---");
    console.log("Olá, meu nome é " + nomeCompleto + " e eu tenho " + idade + " anos.");
}

console.log("Iniciando testes...");
exercicio1();
console.log("-----------------------------------------------------------------------");
exercicio2();
console.log("-----------------------------------------------------------------------");
exercicio3();
console.log("Todos os exercícios finalizados.");