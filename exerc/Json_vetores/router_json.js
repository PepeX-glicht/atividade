import express from "express";
import { exercicio_vetor } from "./exercicio.js";

const app = express();
const router_json = express()


// Json_vetores
router_json.get("/json_vetores/", (req, res) =>{
    const id = req.params.id;
    const produto = exercicio_vetor(4);
    res.json(produto);
})

export{router_json}




