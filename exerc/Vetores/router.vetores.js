import express from "express";
import { exercicio_busca, exercicio_somatoria } from './vtexercicios.js';

const router_vetores = express.Router();

// Exercicios fixos
// Ex1
router_vetores.get("/Vetores", (req, res) => {
    const busca = exercicio_busca();
    const listaNomes = ["João", "Maria", "Carlos"];
    const encontrado = listaNomes.includes(busca.nomeProcurado) ? "Sim" : "Não";

    
// Ex2
    const total = exercicio_somatoria();

    res.send(`
        <h2>Exercícios de Vetores (Arrays)</h2>
        <hr>

        <h3>1. Verificação de Presença</h3>
        <p>
            <b>Lista:</b> [${listaNomes.join(", ")}] <br>
            <b>Procurando por:</b> ${busca.nomeProcurado} <br>
            <b>Encontrado?</b> <b>${encontrado}</b>
        </p>

        <hr>

        <h3>2. Acumulador de Valores (Somatória)</h3>
        <p>
            <b>Números no Array:</b> [10, 20, 30] <br>
            <b>Soma Total (usando .reduce):</b> <b>${total.soma}</b>
        </p>
    `);
});




// Exercicio utilizando req.params
// Ex1
router_vetores.get("/vetores/buscar/:nome", (req, res) => {
    const { nome } = req.params;
    const lista = ["João", "Maria", "Carlos"];

    const encontrado = lista.includes(nome);

    res.send(`
        <h3>Busca em Array</h3>
        <p>Lista de nomes: [${lista.join(", ")}]</p>
        <p>O nome <b>${nome}</b> foi encontrado? <b>${encontrado ? "Sim ✅" : "Não ❌"}</b></p>
    `);
});


// Ex2
router_vetores.get("/vetores/soma/:n1/:n2/:n3", (req, res) => {
    const { n1, n2, n3 } = req.params;

    const numeros = [Number(n1), Number(n2), Number(n3)];
    
    const total = numeros.reduce((acc, n) => acc + n, 0);

    res.send(`
        <h3>Somatória de Array (Reduce)</h3>
        <p>Números recebidos: [${numeros.join(", ")}]</p>
        <p>O total acumulado é: <b>${total}</b></p>
    `);
});


export { router_vetores };
