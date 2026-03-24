import express from "express";
import { exercicio_vetor } from "./exercicio.js";

const router_json = express.Router();

router_json.get("/json_vetores/:id", (req, res) =>{
    
    const id = req.params.id; 

    const produto = exercicio_vetor(Number(id)); 
    
    res.json(produto);
});

export { router_json };
