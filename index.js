import express from "express";

import { exercicio_ec1, exercicio_ec2, exercicio_ec3, exercicio_ec4 } from "./exerc/Estrutura_Condicional/ecexercicios.js";
import { exercicio_vetor } from "./exerc/Json_Vetores/jvexercicios.js";
import { exercicio_lr1, exercicio_lr2, exercicio_lr3, exercicio_lr4, exercicio_lr5 } from "./exerc/Laco_Repeticao/lrexercicios.js";
import { exercicio_oa } from "./exerc/Operadores_Aritimeticos/oaexercicios.js";
import { exercicio_ol } from "./exerc/Operadores_Logicos/olexercicios.js";
import { exercicio_or } from "./exerc/Operadores_Relacionais/orexercicios.js";
import { exercicio_switch } from './exerc/Switch/swexercicios.js';
import { exercicio_var1, exercicio_var2, exercicio_var3 } from './exerc/Variaveis/vaexercicios.js';
import { exercicio_busca, exercicio_somatoria } from './exerc/Vetores/vtexercicios.js';

const app = express();
const porta = 3000;


// Rota principal (Home)
// Esta rota é acessada quando o usuário visita a raiz do servidor.
app.get("/", (req, res) => {
    res.send("Servidor rodando! Acesse as rotas...");
});


// Estrutura Condicional
app.get("/Estrutura_condicional", (req, res) => {
    const ex1 = exercicio_ec1();
    const ex2 = exercicio_ec2();
    const ex3 = exercicio_ec3();
    const ex4 = exercicio_ec4();

    res.send(`
        <h3>Testes de Condicionais (IF/ELSE):</h3>
        <b>1. Nota 8.5:</b> ${ex1} <br>
        <b>2. Número -10:</b> ${ex2} <br>
        <b>3. Idade 15:</b> ${ex3} <br>
        <b>4. Saldo 50.00 (Ternário):</b> ${ex4}
    `);
});


// Json_vetores
app.get("/Json_vetores", (req, res) =>{
    const id = req.params.id;
    const produto = exercicio_vetor(id);
    res.send(produto);
})


// Laço de repetição
app.get("/Laco_repeticao", (req, res) => {
    const resWhile = exercicio_lr1();
    const resDoWhile = exercicio_lr2();
    const resFor = exercicio_lr3();
    const resForEach = exercicio_lr4();
    const resMap = exercicio_lr5();

    res.send(`
        <h3>Laços de Repetição:</h3>
        <b>While:</b> ${resWhile.join(" - ")} <br>
        <b>Do-While:</b> ${resDoWhile.join(" - ")} <br>
        <b>For:</b> ${resFor.join(" - ")} <br>
        <hr>
        <b>ForEach (Lista):</b> ${resForEach} <br>
        <b>Map (Dobro da lista [1,2,3]):</b> ${resMap.join(" e ")}
    `);
});


// Operadores aritimeticos
app.get("/Operadores_aritimetico", (req, res) =>{
    const operadoresArit = exercicio_oa();
    res.send (`Os resultados dos operadores aritimeticos são: <br>
        ${operadoresArit.soma} <br>
        ${operadoresArit.sub} <br>
        ${operadoresArit.mult} <br>
        ${operadoresArit.div} <br>
        ${operadoresArit.resto} <br>
        ${operadoresArit.potencia} <br>
        ${operadoresArit.raiz}`)
})


// Operadores Lógicos
app.get("/Operadores_logicos", (req, res) => {
    const logico = exercicio_ol();
    
    res.send(`
        <h3>Testes de Lógica:</h3>
        Pode dirigir? (Idade >= 18 E tem Carteira): <b>${logico.podeDirigir}</b> <br>
        Pode entrar na festa? (Idade >= 18 OU tem Carteira): <b>${logico.podeEntrar}</b> <br>
        Inverso de tem carteira (NOT): <b>${logico.naoTemCarteira}</b>
    `);
});


// Operadores Relacionais
app.get("/Operadores_relacionais", (req, res) =>{
    const op = exercicio_or();
    
    res.send(`
        <h3>Resultados dos Operadores de Comparação (x=10, y=20):</h3>
        10 é maior que 20? <b>${op.maior}</b> <br>
        10 é menor que 20? <b>${op.menor}</b> <br>
        10 é maior ou igual a 20? <b>${op.maiorIgual}</b> <br>
        10 é menor ou igual a 20? <b>${op.menorIgual}</b> <br>
        10 é igual a 20? <b>${op.igual}</b> <br>
        10 é diferente de 20? <b>${op.diferente}</b>
    `);
});


// Switch
app.get("/Switch", (req, res) => {
    const diaNome = exercicio_switch();
    res.send(`Hoje é: ${diaNome}`);
});

// Variáveis
// EX.1
app.get("/exercicio1", (req, res) => {
    const produto = exercicio_var1();
    res.send(`
        <h3>Cadastro de Produto</h3>
        <b>Item:</b> ${produto.nomeProduto} <br>
        <b>Preço:</b> R$ ${produto.preco.toFixed(2)} <br>
        <b>Estoque:</b> ${produto.estoque} unidades
    `);
});

// EX.2
app.get("/exercicio2", (req, res) =>{
    const operacao = exercicio_var2();
    res.send(`
        <h3>Operações Matemáticas (10 e 5)</h3>
        A soma é: <b>${operacao.soma}</b> <br>
        A multiplicação é: <b>${operacao.produto}</b>
    `);
});

// EX.3
app.get("/exercicio3", (req, res) =>{
    const apresentacao = exercicio_var3();
    res.send(`
        <h3>Apresentação</h3>
        <p>Olá, meu nome é <b>${apresentacao.nomeCompleto}</b> e eu tenho <b>${apresentacao.idade}</b> anos.</p>
    `);
});


// Vetores
// Exercício 1
app.get("/Vetor1", (req, res) =>{
   const procurar = exercicio_busca();
   res.send(`O nome procurado foi ${procurar.nomeProcurado}`)
})

// Exercício 2
app.get("/Vetor2", (req, res) =>{
   const somatoria = exercicio_somatoria();
   res.send(`A soma dos numeros e ${somatoria.soma}`)
})




app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});