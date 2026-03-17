import express from "express";
import { exercicio_oa } from "./oaexercicios.js";

const app = express();
const router_aritimetico = express()



// Operadores aritimeticos
router_aritimetico.get("/Operadores_aritimetico", (req, res) =>{
    const operadoresArit = exercicio_oa();
    res.send (`Os resultados dos operadores aritimeticos são: <br>
        ${operadoresArit.soma} <br>
        ${operadoresArit.sub} <br>
        ${operadoresArit.mult} <br>
        ${operadoresArit.div} <br>
        ${operadoresArit.resto} <br>
        ${operadoresArit.potencia} <br>
        ${operadoresArit.raiz}`)
})

export{router_aritimetico}
