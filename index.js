import express from "express";
const porta = 3000;
const app = express();
app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

import { router_ec } from "./exerc/Estrutura_Condicional/router_exercicio.js";
import { router_jsonvt } from "./exerc/Json_vetores/router_json.js";
import { router_lacorpt } from "./exerc/Laco_Repeticao/router_repeticao.js";
import { router_oparitimetico } from "./exerc/Operadores_Aritimeticos/router_arit.js";
import { router_oplogicos } from "./exerc/Operadores_Logicos/router_logicos.js";
import { router_oprelacionais } from "./exerc/Operadores_Relacionais/router_relacionais.js";
import { router_switch } from "./exerc/Switch/router_switch.js";
import { router_variaveis } from "./exerc/Variaveis/router_variaveis.js";
import { router_vetores } from "./exerc/Vetores/router.vetores.js";




    //REQ.PARAMS
app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params; // Destructuring do ES6
    res.send('Buscando dados do usuário com ID: ${id}');
    }); 

    // REQ.QUERY
app.get('/produtos', (req, res) => {
    const { nome, cor } = req.query;
    res.json({
        mensagem: 'Filtrando produtos por nome: ${nome} e cor: ${cor}'
    });
});

    // REQ.BODY
    // Usar este middleware no topo do seu arquivo //app.use(express.json());
app.post('/produtos', (req, res) => {

    // Capturamos os dados enviados no corpo da requisição
    const { nome, preco, estoque } = req.body;

    // Lógica (ex: salvar no banco)
    const novoProduto = {
        id: Math.random().
        nome,
        preco,
        estoque
    }
});




// ESTRUTURA CONDICIONAL
app.use(router_ec)

// JSON VETORES
app.use(router_jsonvt)

// LAÇO DEREPETIÇÃO
app.use(router_lacorpt)

// OPERADORES ARITIMETICOS
app.use(router_oparitimetico)

// OPERADORES LÓGICOS
app.use(router_oplogicos)

// OPERADORES RELACIONAIS
app.use(router_oprelacionais)

// SWITCH
app.use(router_switch)

// VARIÁVEIS
app.use(router_variaveis)

// VETORES
app.use(router_vetores)


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
