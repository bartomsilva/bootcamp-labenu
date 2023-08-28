"use strict"
// declaração das variáveis
let usLetter = []
let pcLetter = []
let usPoints = 0
let pcPoints = 0
// iniciando o Jogo
   while (true) {
      const resp = confirm("Olá, esse é BLACKJACK do Bart" +
         "\nDeseja iniciar uma nova rodada?")
      if (!resp) break
      // sorteio das cartas iniciais 
      usLetter = []
      pcLetter = []
      while (true) {
         usLetter[0] = comprarCarta()
         usLetter[1] = comprarCarta()
         pcLetter[0] = comprarCarta()
         pcLetter[1] = comprarCarta()
         usPoints = usLetter[0].valor + usLetter[1].valor
         pcPoints = pcLetter[0].valor + pcLetter[1].valor
         if (usLetter[0].texto + usLetter[1].texto != "AA" && pcLetter[0].texto + pcLetter[1].texto != "AA")
            break
      }
      // compra de cartas adicionais (usuário)
      while (true) {
         const resp = confirm("Suas cartas são:" + " " + listLetters(usLetter) + "." +
            "\nA carta revelada do computdor é " + pcLetter[0].texto +
            "\nDeseja comprar mais uma carta?")
         if (!resp) {
            break
         }
         usLetter.push(comprarCarta())
         usPoints += usLetter[usLetter.length - 1].valor
         if (usPoints >= 21) break
      }
      // VEZ DO COMPUTADOR JOGAR - compra de cartas 
      while (true) {
         if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
            break
         }
         pcLetter.push(comprarCarta())
         pcPoints += pcLetter[pcLetter.length - 1].valor
      }
      // monta o texto final com as cartas compradas por ambos, mais os pontos.
      const text = resum()
      // VERIFICAÇÃO DO RESULTADO
      if (pcPoints === usPoints) {
         alert(text + "\n" + "Houve um empate!")
      } else if (usPoints > pcPoints) {
         usPoints > 21 ? alert(text + "\n" + "o Computador Ganhou!") : alert(text + "\n" + "o Usuário Ganhou!")
      } else if (pcPoints > usPoints) {
         pcPoints > 21 ? alert(text + "\n" + "o Usuário Ganhou!") : alert(text + "\n" + "o Computador Ganhou!")
      }
   }
   
   /// retorna lista de CARTAS COMPRADAS
   function listLetters(arr) {
      let result = ""
      arr.forEach(obj => result += obj.texto + " ")
      return result.trim()
   }

   /// RESUMO DAS CARTAS E PONTOS
   function resum() {
      const text = "Usuário Cartas - " + listLetters(usLetter) + " - " + usPoints + "\n" +
         "Computador Cartas -" + listLetters(pcLetter) + " - " + pcPoints + "\n"
      return text
   }


