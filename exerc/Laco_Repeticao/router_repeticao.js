import express from "express";
import { exercicio_lr1, exercicio_lr2, exercicio_lr3, exercicio_lr4, exercicio_lr5 } from "./lrexercicios.js";


const app = express();
const router_repeticao = express()


// Laço de repetição
router_repeticao.get("/Laco_repeticao", (req, res) => {
    const resWhile = exercicio_lr1();
    const resDoWhile = exercicio_lr2();
    const resFor = exercicio_lr3();
    const resForEach = exercicio_lr4();
    const resMap = exercicio_lr5();

    res.send(`
        <h3>Laços de Repetição:</h3>
        <b>While:</b> ${resWhile.join(" - ")} <br>
        <b>Do-While:</b> ${resDoWhile.join(" - ")} <br>
        <b>For:</b> ${resFor.join(" - ")} <br>
        <hr>
        <b>ForEach (Lista):</b> ${resForEach} <br>
        <b>Map (Dobro da lista [1,2,3]):</b> ${resMap.join(" e ")}
    `);
});

export{router_repeticao}



