import express from "express";
import { exercicio_vetor } from "./exercicio.js";

const router_jsonvt = express.Router();

// Exercício fixo
router_jsonvt.get("/json_vetores/:id", (req, res) =>{
    const id = req.params.id;
    const produto = exercicio_vetor(Number(id)); 
    res.json(produto);
});




// Exercicio utilizando req.params
router_jsonvt.get("/json_vetores/produto/:id", (req, res) => {
    const { id } = req.params;
    const produtoEncontrado = exercicio_vetor(Number(id));
    if (produtoEncontrado) {
        res.json(produtoEncontrado);
    } else {
        res.status(404).json({
            erro: "Produto não encontrado",
            id_buscado: id
        });
    }
});


export { router_jsonvt };
