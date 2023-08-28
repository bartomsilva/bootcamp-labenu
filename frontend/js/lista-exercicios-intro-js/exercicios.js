// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const ladoA = Number(prompt("informe o tamanho do lado A"))
  const ladoB = Number(prompt("informe o tamanho do lado B"))
  console.log(ladoA*ladoB)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNasc = Number(prompt("Digite o ano de Nascimento"))
  console.log(anoAtual-anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc=peso/(altura*altura)
  return (imc)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const userNome = prompt("Digite seu nome:")
  const userIdade = Number(prompt("Digite sua idade:"))
  const userEmail = prompt("Digite seu e-mail:")
  console.log(`Meu nome é ${userNome}, tenho ${userIdade} anos, e o meu email é ${userEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Digite uma cor Favorita")
  const corFavorita2 = prompt("Digite outra cor Favorita")
  const corFavorita3 = prompt("Digite mais uma cor Favorita")
  const myColorsFav=[corFavorita1,corFavorita2,corFavorita3]
  console.log(myColorsFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const posEnd=array.length-1
  const ultimoElemento = array[posEnd]
  array[posEnd]=array[0]
  array[0]=ultimoElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toUpperCase()===string2.toUpperCase())

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

/*
  - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
*/  
  const anoAtual = Number(prompt("Ano Atual"))
  const anoNasc = Number(prompt("Ano de Nascimento"))
  const anoErg = Number(prompt("Ano de Emissão do RG"))
  const idade = anoAtual-anoNasc
  const tempoRg= anoAtual-anoErg
  const result =  (idade <= 20 && tempoRg >= 5 ) ||
                  (idade > 20 && idade <=50 && tempoRg>=10 ) || 
                  (idade > 50 && tempoRg >=15 )  
  console.log(result)

}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  // dados para implementar a fórmula..
  // o ano para ser bissexto precisa das seguintes condições:
  // precisa ser for divisível exato por 400 já é
  // ou precisa ser divisível por 4 e não ser divisível por 100

  let restopor400 = (ano%400) // true já é
  let restopor4 = (ano%4)     // ou true + 
  let restopor100 = (ano%100) //          false
  const result = (restopor400 == 0) || ( (restopor4 == 0) && (restopor100 != 0) )  
  return result
} 
    

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const pIdade = prompt("Tem mais de 18?")
  const pEscolar = prompt("Tem ensino médio completo?")
  const pDisp = prompt("Tem disponibilidde de horários?")
  const resposta = (pIdade+pEscolar+pDisp)=="simsimsim"    
  console.log(resposta)

}
