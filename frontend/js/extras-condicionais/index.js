
// calculando a média utilizando loops ou laços
// ( os 4 tipos apresentados no curso )


const minhasNotas=[8,6,5,4]

let somaDasNotas=0 // vai ser utilizado em todos exemplos por isso
                  // antes de casa execução recebe 0


// utilizando o loop WHILE
let contador = 0; // criando o contador

//         condição de execução
while(contador < minhasNotas.length){
  somaDasNotas += minhasNotas[contador]
  contador ++  // incremento do contador
}
console.log("while - a média foi",somaDasNotas/minhasNotas.length)


somaDasNotas = 0 // zerando para poder utiizar em outro loop
// utilizando loop FOR 
//  cria contador=0    condição de execução         incremento do contador
for(let counter=0 ; counter < minhasNotas.length ; counter ++){
    somaDasNotas += minhasNotas[counter]
}
console.log("for - a média foi",somaDasNotas/minhasNotas.length)


// utilizando o FOR IN ( resumido ) retorna o índice 
somaDasNotas = 0 // zerando para poder utiizar em outro loop
// não tem incremento nem inicializa com valor o contador
// contador assume o idice do array indicado após o in
for ( let count in minhasNotas ){
  somaDasNotas += minhasNotas[count]  
}
console.log("for in - a média foi",somaDasNotas/minhasNotas.length)


// utilizando o FOR OF ( resumido ) retorna o valor 
somaDasNotas = 0 // zerando para poder utiizar em outro loop
// não tem contador, não tem incremento 
// utiliza o valor do elemento contido no array
for ( let nota of minhasNotas ){
  somaDasNotas += nota  // o conteúdo vem direto não praciso por array[indice] 
}
// nesse caso das notas esse é a melhor escolha
console.log("for of - a média foi",somaDasNotas/minhasNotas.length)

// APRESENTADO /  WHILE  /  FOR   / FOR IN   /  FOR OF
// com excessão do FOR OF os outros três tem funcionamento bem parecidos 
// podem ser utilizados para fazer a mesma coisa.
// mais uma vez vai de cada caso o que ficar menos confuso visualmente
// o for normal fica mais limpo para se fazer for aninhado

