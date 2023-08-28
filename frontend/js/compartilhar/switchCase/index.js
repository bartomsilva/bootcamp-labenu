//switch

/* 
utiizado quando temos apenas escolhas
baseadas em igualdade.
*/

/*
    digamos que temos um menu:
    
    Seleciona uma das opções abaixo:
    
    1 - Segunda via da fatura
    2 - Consultar limite disponível
    3 - Ver melhor dia para compra
    4 - Falar com um atendente
    
*/
const opcao = 1

switch (opcao) {
    case 1:
        segundaViaDeConta()
        break
    case 2:
        cosultarLimiteDisponível()
        break
    case 3:
        verMelhorDiaParaCompra()
        break
    case 4:
        falarComUmAtendente()
        break
    default:
        console.log("opção inválida, atendimento finalizado")
}

// fim










function segundaViaDeConta() {
    console.log("segunda via de conta.......")
}
function cosultarLimiteDisponível() {
    console.log("consulta de limite.....")
}
function verMelhorDiaParaCompra() {
    console.log("ver melhor dia para compra")
}
function falarComUmAtendente() {
    console.log("falar com um atendente.")
}
