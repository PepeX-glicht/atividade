import express from "express";
import { exercicio_var1, exercicio_var2, exercicio_var3 } from './vaexercicios.js';

const router_variaveis = express.Router();

// Exercicios fixos
router_variaveis.get("/variaveis", (req, res) => {

    const produto = exercicio_var1();
    const operacao = exercicio_var2();
    const apresentacao = exercicio_var3();

    res.send(`
        <h2>Exercícios de Variáveis - Resumo Geral</h2>
        <hr>
        
        <h3>1. Cadastro de Produto</h3>
        <p>
            <b>Item:</b> ${produto.nomeProduto} <br>
            <b>Preço:</b> R$ ${produto.preco.toFixed(2)} <br>
            <b>Estoque:</b> ${produto.estoque} unidades
        </p>

        <hr>

        <h3>2. Operações Matemáticas (10 e 5)</h3>
        <p>
            A soma resultante é: <b>${operacao.soma}</b> <br>
            A multiplicação resultante é: <b>${operacao.produto}</b>
        </p>

        <hr>

        <h3>3. Apresentação de Usuário</h3>
        <p>
            Olá, meu nome é <b>${apresentacao.nomeCompleto}</b> e eu tenho <b>${apresentacao.idade}</b> anos.
        </p>
    `);
});




// Exercicio utilizando req.params
// Ex1
router_variaveis.get("/variaveis/ex1/:nome/:preco/:qtd", (req, res) => {
    const { nome, preco, qtd } = req.params;

    const produto = {
        nomeProduto: nome,
        preco: Number(preco),
        estoque: Number(qtd)
    };

    res.send(`
        <h3>Cadastro de Produto Recebido</h3>
        <b>Item:</b> ${produto.nomeProduto} <br>
        <b>Preço:</b> R$ ${produto.preco.toFixed(2)} <br>
        <b>Estoque:</b> ${produto.estoque} unidades
    `);
});


// Ex2
router_variaveis.get("/variaveis/ex2/:n1/:n2", (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);

    const soma = n1 + n2;
    const produto = n1 * n2;

    res.send(`
        <h3>Cálculos com Variáveis</h3>
        A soma de ${n1} + ${n2} é: <b>${soma}</b> <br>
        A multiplicação é: <b>${produto}</b>
    `);
});


// Ex3
router_variaveis.get("/variaveis/ex3/:nome/:sobrenome/:idade", (req, res) => {
    const { nome, sobrenome, idade } = req.params;
    const nomeCompleto = `${nome} ${sobrenome}`;

    res.send(`
        <h3>Dados da Pessoa</h3>
        <p>Olá, meu nome completo é <b>${nomeCompleto}</b> e eu tenho <b>${idade}</b> anos.</p>
    `);
});


export { router_variaveis };
