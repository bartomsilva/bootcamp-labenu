/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")
if (confirm("Deseja iniciar uma nova rodada?")) {
   const usLetter = ["",""]
   const pcLetter = ["",""]

   while (true) {

      usLetter[0] = comprarCarta()
      usLetter[1] = comprarCarta()

      pcLetter[0] = comprarCarta()
      pcLetter[1] = comprarCarta()

      if (usLetter[0].texto + usLetter[1].texto != "AA"
         && pcLetter[0].texto + pcLetter[1].texto != "AA")
         break

   }

   // soma dos pontos
   const usPoints = usLetter[0].valor + usLetter[1].valor
   const pcPoints = pcLetter[0].valor + pcLetter[1].valor

   console.log(`Usuário - Cartas: ${usLetter[0].texto} ${usLetter[1].texto} - ${usPoints}`)
   console.log(`Computador - Cartas: ${pcLetter[0].texto} ${pcLetter[1].texto} - ${pcPoints}`)
   if (usPoints === pcPoints) {
      console.log("Houve um empate!")
   } else if (usPoints > pcPoints) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computudador ganhou!")
   }
} else {
   console.log("O jogo acabou!")
}   
