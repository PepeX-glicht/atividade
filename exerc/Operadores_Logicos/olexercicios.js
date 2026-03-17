
// Operadores Lógicos
// Avalia múltiplas condições (E, OU, NÃO) para determinar se um critério complexo é verdadeiro ou falso.

export function exercicio_ol() {
    let idade = 20;
    let temCarteira = true;

    let podeDirigir = (idade >= 18 && temCarteira); // E (AND)
    let podeEntrar = (idade >= 18 || temCarteira);  // OU (OR)
    let naoTemCarteira = (!temCarteira);            // NÃO (NOT)

    return {
        podeDirigir,
        podeEntrar,
        naoTemCarteira
    };
}
