// Operadores Lógicos
// Avalia múltiplas condições (E, OU, NÃO) para determinar se um critério complexo é verdadeiro ou falso.

export function exercicio_ol() {
    let idade = 20;
    let temCarteira = true;

    let podeDirigir = (idade >= 18 && temCarteira); 
    let podeEntrar = (idade >= 18 || temCarteira);  
    let naoTemCarteira = (!temCarteira);            

    return {
        podeDirigir,
        podeEntrar,
        naoTemCarteira
    };
}
