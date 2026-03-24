import express from "express";
import { exercicio_switch } from './swexercicios.js';

const router_switch = express.Router();

router_switch.get("/Switch", (req, res) => {
  
    const diaNome = exercicio_switch();
    
    res.send(`
        <h3>Estrutura de Decisão (Switch):</h3>
        <p>O resultado da validação é: <b>${diaNome}</b></p>
    `);
});

export { router_switch };
