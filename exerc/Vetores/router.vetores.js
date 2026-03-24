import express from "express";
import { exercicio_busca, exercicio_somatoria } from './vtexercicios.js';

const router_vetores = express.Router();

router_vetores.get("/Vetores", (req, res) => {

    const busca = exercicio_busca();
    const listaNomes = ["João", "Maria", "Carlos"];
    const encontrado = listaNomes.includes(busca.nomeProcurado) ? "Sim" : "Não";


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

export { router_vetores };
