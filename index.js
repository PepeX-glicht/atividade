import express from "express";
import { exercicio_var1, exercicio_var2, exercicio_var3 } from './exerc/Variaveis/vaexercicios.js';
import { exercicio_busca, exercicio_somatoria } from './exerc/Vetores/vtexercicios.js';
import { exercicio_or } from "./exerc/Operadores_Relacionais/orexercicios.js";
import { exercicio_vetor } from "./exerc/Json_vetores/jvexercicios.js";
import { exercicio_oa } from "./exerc/Operadores_Aritimeticos/oaexercicios.js";



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

//Operadores logicos 

app.get("/operadores", (req, res) =>{
    const operadores = exercicio_or();
    res.send(`Os resultados dos operadores logicos são <br>
        ${operadores.maior} <br>
        ${operadores.menor} <br>
        ${operadores.maiorIgual}<br>
        ${operadores.menorIgual}<br>
        ${operadores.igual} <br>
        ${operadores.diferente}`)
})

//JSON
  app.get("/json/:id", (req, res) =>{
    const id = req.params.id;
    const produto = exercicio_vetor(id);
    res.send(produto);
  })

  //Operadores aritimeticos 

  app.get("/operadoresAr", (req, res) =>{
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






app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});