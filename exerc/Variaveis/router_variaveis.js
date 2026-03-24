import express from "express";
import { exercicio_var1, exercicio_var2, exercicio_var3 } from './vaexercicios.js';

const router_variaveis = express.Router();


router_variaveis.get("/Variaveis", (req, res) => {

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

export { router_variaveis };
