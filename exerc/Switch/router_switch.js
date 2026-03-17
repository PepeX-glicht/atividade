import express from "express";
import { exercicio_switch } from './swexercicios.js';

const app = express();
const router_switch = express()


router_switch.get("/Switch", (req, res) => {
    const diaNome = exercicio_switch();
    res.send(`Hoje é: ${diaNome}`);
});

export{router_switch}