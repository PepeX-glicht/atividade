import express from "express";
import { exercicio_oa } from "./oaexercicios.js";

const router_aritimetico = express.Router();

router_aritimetico.get("/Operadores_aritimeticos", (req, res) => {
    const operadoresArit = exercicio_oa();
    
    res.send(`
        <h3>Resultados dos Operadores Aritméticos:</h3>
        <b>Soma:</b> ${operadoresArit.soma} <br>
        <b>Subtração:</b> ${operadoresArit.sub} <br>
        <b>Multiplicação:</b> ${operadoresArit.mult} <br>
        <b>Divisão:</b> ${operadoresArit.div} <br>
        <b>Resto:</b> ${operadoresArit.resto} <br>
        <b>Potência:</b> ${operadoresArit.potencia} <br>
        <b>Raiz Quadrada:</b> ${operadoresArit.raiz}
    `);
});

export { router_aritimetico };
