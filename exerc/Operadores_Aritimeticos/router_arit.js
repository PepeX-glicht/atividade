import express from "express";
import { exercicio_oa } from "./oaexercicios.js";

const router_oparitimetico = express.Router();

// Exercicio fixo
router_oparitimetico.get("/operadores_aritimeticos", (req, res) => {
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


// Exercicio utilizando req.params
router_oparitimetico.get("/operadores_aritimeticos/:num1/:num2", (req, res) => {

    const { num1, num2 } = req.params;
        const a = Number(num1);
        const b = Number(num2);

        const resultados = {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: a / b,
        resto: a % b,
        potencia: Math.pow(a, b),
        raiz_de_a: Math.sqrt(a)
    };

    res.send(`
        <h3>Calculadora Dinâmica (Params)</h3>
        <p>Valores utilizados: <b>A: ${a}</b> e <b>B: ${b}</b></p>
        <hr>
        <ul>
            <li>Soma: ${resultados.soma}</li>
            <li>Subtração: ${resultados.subtracao}</li>
            <li>Multiplicação: ${resultados.multiplicacao}</li>
            <li>Divisão: ${resultados.divisao}</li>
            <li>Resto: ${resultados.resto}</li>
            <li>Potência (A^B): ${resultados.potencia}</li>
            <li>Raiz Quadrada de A: ${resultados.raiz_de_a.toFixed(2)}</li>
        </ul>
    `);
});


export { router_oparitimetico };
