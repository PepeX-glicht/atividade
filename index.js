const app = express();
const porta = 3000;
import express from "express";

import { router_ex } from "./exerc/Estrutura_Condicional/router_exercicio.js";
import { router_json } from "./exerc/Json_vetores/router_json.js";
import { router_repeticao } from "./exerc/Laco_Repeticao/router_repeticao.js";
import { router_aritimetico } from "./exerc/Operadores_Aritimeticos/router_arit.js";
import { router_logicos } from "./exerc/Operadores_Logicos/router_logicos.js";
import { router_relacionais } from "./exerc/Operadores_Relacionais/router_relacionais.js";
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
app.use(router_ex)

// JSON VETORES
app.use(router_json)

// LAÇO DEREPETIÇÃO
app.use(router_repeticao)

// OPERADORES ARITIMETICOS
app.use(router_aritimetico)

// OPERADORES LÓGICOS
app.use(router_logicos)

// OPERADORES RELACIONAIS
app.use(router_relacionais)

// SWITCH
app.use(router_switch )

// VARIÁVEIS
app.use(router_variaveis)

// VETORES
app.use(router_vetores)


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
