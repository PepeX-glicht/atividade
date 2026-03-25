import express from "express";
import { exercicio_ol } from "./olexercicios.js";

const router_oplogicos = express.Router();

// Exercicio fixo
router_oplogicos.get("/operadores_logicos", (req, res) => {
    const logico = exercicio_ol();
    res.send(`
        <h3>Testes de Lógica:</h3>
        Pode dirigir? (Idade >= 18 E tem Carteira): <b>${logico.podeDirigir}</b> <br>
        Pode entrar na festa? (Idade >= 18 OU tem Carteira): <b>${logico.podeEntrar}</b> <br>
        Inverso de tem carteira (NOT): <b>${logico.naoTemCarteira}</b>
    `);
});




// Exercicio utilizando req.params
router_oplogicos.get("/operadores_logicos/:idade/:carteira", (req, res) => {
    const { idade, carteira } = req.params;
    const idadeNum = Number(idade);
    const temCarteira = (carteira.toLowerCase() === 'true');
    const podeDirigir = (idadeNum >= 18 && temCarteira); 
    const podeEntrar = (idadeNum >= 18 || temCarteira);  
    const naoTemCarteira = (!temCarteira);               

    res.send(`
        <h3>Validação de Operadores Lógicos</h3>
        <p>Dados recebidos: Idade <b>${idadeNum}</b> | Tem Carteira? <b>${temCarteira ? "Sim" : "Não"}</b></p>
        <hr>
        <ul>
            <li><b>Pode dirigir? (AND):</b> ${podeDirigir ? "Sim ✅" : "Não ❌"}</li>
            <li><b>Pode entrar na festa? (OR):</b> ${podeEntrar ? "Sim ✅" : "Não ❌"}</li>
            <li><b>Inverso de tem carteira (NOT):</b> ${naoTemCarteira ? "Verdadeiro" : "Falso"}</li>
        </ul>
    `);
});


export { router_oplogicos };
