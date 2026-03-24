import express from "express";
import { exercicio_lr1, exercicio_lr2, exercicio_lr3, exercicio_lr4, exercicio_lr5 } from "./lrexercicios.js";

const router_repeticao = express.Router();

router_repeticao.get("/Laco_repeticao", (req, res) => {

    const resWhile = exercicio_lr1();
    const resDoWhile = exercicio_lr2();
    const resFor = exercicio_lr3();
    const resForEach = exercicio_lr4();
    const resMap = exercicio_lr5();

    res.send(`
        <h3>Laços de Repetição:</h3>
        <b>While (1 a 5):</b> ${resWhile.join(" - ")} <br>
        <b>Do-While (1 a 5):</b> ${resDoWhile.join(" - ")} <br>
        <b>For (1 a 5):</b> ${resFor.join(" - ")} <br>
        <hr>
        <b>ForEach (Nomes):</b> ${resForEach} <br>
        <b>Map (Dobro de [1,2,3]):</b> ${resMap.join(" e ")}
    `);
});

export { router_repeticao };
