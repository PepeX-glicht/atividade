import express from "express";
import { exercicio_switch } from './swexercicios.js';

const router_switch = express.Router();

// Exercicio fixo
router_switch.get("/switch", (req, res) => {
    const diaNome = exercicio_switch();
    res.send(`
        <h3>Estrutura de Decisão (Switch):</h3>
        <p>O resultado da validação é: <b>${diaNome}</b></p>
    `);
});




// Exercicio utilizando req.params
router_switch.get("/switch/:num", (req, res) => {
    const { num } = req.params;
    const dia = Number(num);
    let resultado = "";
    switch (dia) {
        case 1: 
            resultado = "Segunda-feira"; 
            break;
        case 2: 
            resultado = "Terça-feira"; 
            break;
        case 3: 
            resultado = "Quarta-feira"; 
            break;
        case 4: 
            resultado = "Quinta-feira"; 
            break;
        case 5: 
            resultado = "Sexta-feira"; 
            break;
        case 6: 
            resultado = "Sábado"; 
            break;
        case 7: 
            resultado = "Domingo"; 
            break;
        default: 
            resultado = "Dia inválido (escolha de 1 a 7)";
    }

    res.send(`
        <h3>Validador de Dias (Switch Case)</h3>
        <p>Número digitado: <b>${dia}</b></p>
        <p>O dia correspondente é: <b>${resultado}</b></p>
    `);
});


export { router_switch };
