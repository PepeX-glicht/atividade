import express from "express";
import { exercicio_or } from "./orexercicios.js";

const router_oprelacionais = express.Router();

// Operadores relacionais (exercício fixo)
router_oprelacionais.get("/Operadores_relacionais", (req, res) => {
    const op = exercicio_or();
    
    res.send(`
        <h3>Resultados dos Operadores de Comparação (x=10, y=20):</h3>
        10 é maior que 20? <b>${op.maior}</b> <br>
        10 é menor que 20? <b>${op.menor}</b> <br>
        10 é maior ou igual a 20? <b>${op.maiorIgual}</b> <br>
        10 é menor ou igual a 20? <b>${op.menorIgual}</b> <br>
        10 é igual a 20? <b>${op.igual}</b> <br>
        10 é diferente de 20? <b>${op.diferente}</b>
    `);
});




// Exercicio utilizando req.params
router_oprelacionais.get("/operadores_relacionais/:x/:y", (req, res) => {

    const { x, y } = req.params;
    
    const numX = Number(x);
    const numY = Number(y);
    const resultados = {
        maior: (numX > numY),
        menor: (numX < numY),
        maiorIgual: (numX >= numY),
        menorIgual: (numX <= numY),
        igual: (numX == numY),
        diferente: (numX != numY)
    };

    res.send(`
        <h3>Operadores de Comparação (Relacionais)</h3>
        <p>Comparando <b>X: ${numX}</b> com <b>Y: ${numY}</b></p>
        <hr>
        <ul>
            <li>${numX} > ${numY} ? <b>${resultados.maior}</b></li>
            <li>${numX} < ${numY} ? <b>${resultados.menor}</b></li>
            <li>${numX} >= ${numY} ? <b>${resultados.maiorIgual}</b></li>
            <li>${numX} <= ${numY} ? <b>${resultados.menorIgual}</b></li>
            <li>${numX} == ${numY} ? <b>${resultados.igual}</b></li>
            <li>${numX} != ${numY} ? <b>${resultados.diferente}</b></li>
        </ul>
    `);
});


export { router_oprelacionais };
