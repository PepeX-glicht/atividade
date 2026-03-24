// Validador de Dias
// Estrutura de controle que mapeia números para nomes de dias da semana.

export function exercicio_switch() {
    let dia = 4;
    let resultado = "";

    switch (dia) {
        case 1: resultado = "Segunda"; break;
        case 2: resultado = "Terça"; break;
        case 3: resultado = "Quarta"; break;
        case 4: resultado = "Quinta"; break;
        default: resultado = "Outro dia";
    }
    return resultado;
}
