import express from "express";
import { exercicio_ol } from "./olexercicios.js";

const router_logicos = express.Router();

router_logicos.get("/Operadores_logicos", (req, res) => {
    const logico = exercicio_ol();
    
    res.send(`
        <h3>Testes de Lógica:</h3>
        Pode dirigir? (Idade >= 18 E tem Carteira): <b>${logico.podeDirigir}</b> <br>
        Pode entrar na festa? (Idade >= 18 OU tem Carteira): <b>${logico.podeEntrar}</b> <br>
        Inverso de tem carteira (NOT): <b>${logico.naoTemCarteira}</b>
    `);
});

export { router_logicos };
