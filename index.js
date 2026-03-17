import express from "express";

import { router_ex } from "./exerc/Estrutura_Condicional/router_exercicio.js";
import { router_json } from "./exerc/Json_vetores/router_json.js";
import { router_repeticao } from "./exerc/Laco_Repeticao/router_repeticao.js";




import { exercicio_var1, exercicio_var2, exercicio_var3 } from './exerc/Variaveis/vaexercicios.js';
import { exercicio_busca, exercicio_somatoria } from './exerc/Vetores/vtexercicios.js';
import { router_aritimetico } from "./exerc/Operadores_Aritimeticos/router_arit.js";
import { router_logicos } from "./exerc/Operadores_Logicos/router_logicos.js";
import { router_relacionais } from "./exerc/Operadores_Relacionais/router_relacionais.js";
import { router_switch } from "./exerc/Switch/router_switch.js";

const app = express();
const porta = 3000;


// Rota principal (Home)
// Esta rota é acessada quando o usuário visita a raiz do servidor.
app.get("/", (req, res) => {
    res.send("Servidor rodando! Acesse as rotas...");
});

//  CONDICIONAL
app.use('/', router_ex)

//JSON

app.use('/', router_json)

//REPETIÇÃO
app.use('/', router_repeticao)

//ARITIMETICOS
app.use('/', router_aritimetico)

//LOGICOS
app.use('/', router_logicos)

// Relacionais
app.use('/', router_relacionais)


// Switch
app.use('/', router_switch )

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