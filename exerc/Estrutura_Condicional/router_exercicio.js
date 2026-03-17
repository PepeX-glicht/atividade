import express from "express";
import { exercicio_ec1, exercicio_ec2, exercicio_ec3, exercicio_ec4 } from "./ecexercicios.js";

const app = express();
const router_ex = express()

// Estrutura Condicional
router_ex.get("/Estrutura_condicional", (req, res) => {
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

export{router_ex}