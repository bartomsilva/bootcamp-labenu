

let jogar=""    // PERGUNTA
let numChut=0   // número chutado
let numTent=0   // número de tentativas
// uso do jogador computador
let numSecreto= 0  // 1 a 100

while(true) {  

   jogar=prompt(`Você quer Adivinhar meu número?
               >>> digite S para Sim <<<
         >>ou qualquer outra coisa para não <<`)
   // jogar = mull = objetct
   if (typeof jogar =="object" ) {break} 
   
   jogar = jogar.toUpperCase()
   
   if (jogar!="S") {
      console.log("Que pena!, fica para próxima.")
      break
   }

   numTent = 0 // reset
   // reset = gerar um número aleatório ente 1 e 100
   numSecreto = Math.floor(Math.random() * 100 + 1 ) 
   //                  >>> aqui alterar de 10 para 100        
   console.log("Vamos jogar então!")
   // deixo em loop infinito, a saída vou tratar nas condições
   while(true) {
      
      numChut=prompt("Qual é seu palpite?")
      
      // se clicou cancelar, volto para o início usando o continue             
      if (typeof numChut =="object") {continue}  
      
      numChut = Number(numChut)
      // se digitar srings tipo um j = Number(numChut) = retorna NaN não é um número
      // se não digitar nada "" = Number(numChut) = retorna 0
      
      // se o número digitado não for de 1 em diante volto para o começo usando o continue
      if (!numChut>=1) {continue}

      console.log(`seu palpite foi: ${numChut}`)
      numTent ++

      if (numChut != numSecreto) {
         console.log(`infelizmente você errou, é ${numChut<numSecreto?"maior!":"menor!"} `)
      } else {
         console.log(`Meus parabéns, ACERTOU!!!`)
         // quando acerta interrompo o loop while com o break
         break
      }
   }
   console.log(`o número de tentativas foi ${numTent}`)
}