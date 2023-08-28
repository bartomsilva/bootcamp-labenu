let numeroDaSorte=0
let numeroSecreto=Math.floor(Math.random() * 100 +1 ) // 1 a 100
let tentativas=0

const rodada=confirm("Vamos jogar?") 
if (rodada){
  numeroDaSorte=Number(prompt("meu Número vai de 1 a 100\nDigite seu palpite:"))
  while(true){    
    if(numeroDaSorte > numeroSecreto){
      if(confirm(`Seu o número é ${numeroDaSorte} - Deseja subtrair 2?`)){
        numeroDaSorte -=2
        console.log(`seu número é ${numeroDaSorte}`)
      }
    } else if (numeroDaSorte < numeroSecreto){
      if (confirm(`seu número é ${numeroDaSorte}- Deseja somar 5?`)){
        numeroDaSorte +=5
        console.log(`seu número é ${numeroDaSorte}`)
      }
    } 
    tentativas++
    if (numeroDaSorte===numeroSecreto){   
        console.log(`nossa parabéns você acertou!!! - número ${numeroSecreto}`)
        alert(`nossa parabéns você acertou!!! - número ${numeroSecreto}`)
      break
    }
    if(!confirm("você não acertou!\nDeseja jogar mais uma rodada?")) {
      console.log("que pena! você perdeu.....")
      alert("que pena! você perdeu.....")
      break
    }
  }
  alert(`fim de jogo... 
  foram ${tentativas} tentativas`)
  console.log("fim de jogo...")
  console.log(`foram ${tentativas} tentativas`)
}
