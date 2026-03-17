import express from "express";
import { exercicio_or } from "./orexercicios.js";

const app = express();

const router_relacionais = express()

router_relacionais.get("/Operadores_relacionais", (req, res) =>{
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

export{router_relacionais}

