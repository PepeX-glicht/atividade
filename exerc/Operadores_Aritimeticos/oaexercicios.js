// Operadores e Funções Matemáticas
// Realiza operações matemáticas básicas (adição, subtração, multiplicação, divisão) e avançadas (potência, raiz) para manipular números.

export function exercicio_oa() {

    let a = 10;
    let b = 5;

    let soma = (a + b);
    let sub = (a - b);
    let mult = (a * b);
    let div = (a / b);
    let resto = (a % b);
    let potencia = (Math.pow(a, b));
    let raiz = (Math.sqrt(a));

    return{
        soma,
        sub,
        mult,
        div,
        resto,
        potencia,
        raiz
    }
}
