import express from "express";
import { exercicio_var1, exercicio_var2, exercicio_var3 } from './exerc/Variaveis/vaexercicios.js';
import { exercicio_busca, exercicio_somatoria } from './exerc/Vetores/vtexercicios.js';



const app = express();
const porta = 3000;

//VARIAVEIS

//EX.1
app.get("/exercicio1", (req, res) => {
    const produto = exercicio_var1();
    res.send(`Produto: ${produto.nomeProduto} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque}`);
});


//EX.2

app.get("/exercicio2", (req, res) =>{
    const operacao = exercicio_var2();
    res.send(`Soma e multiplicação: ${operacao.soma} | ${operacao.produto}`)
   
})


//EX.3

app.get("/exercicio3", (req, res) =>{
    const apresentacao = exercicio_var3();
    res.send(`Olá meu nome é: ${apresentacao.nomeCompleto} e eu tenho ${apresentacao.idade} anos `)
   
})

//VETORES

//EX.1

app.get("/vetor1", (req, res) =>{
   const procurar = exercicio_busca();
   res.send(`O nome procurado foi ${procurar.nomeProcurado}`)
   
})


//EX.2

app.get("/vetor2", (req, res) =>{
   const somatoria = exercicio_somatoria();
   res.send(`A soma dos numeros e ${somatoria.soma}`)
   
})

//ESTRUTURA CONDICIONAL







app.listen(porta, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

