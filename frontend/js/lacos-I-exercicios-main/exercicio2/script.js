/*
# Exercício 2

Crie um programa que peça um 
input de número para o usuário.
Com este número, 
o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```
*/

// não pede para utilizar loop

while(true){  // loop infinito sai apenas com breeak
    
    // o enunciado não impõe limite, mas eu fixei um limite,
    // aceito de ( - 100 a + 100 com excessão do zero )
    const number=Number(prompt(`Digite um número entre -100 e 100 para imprimir a tabuada:
     pra finalizar digite 0 ou clique em Cancelar.`,0)) // no prompt adicionei um valor padrão 0

    // se clicar em cancelar o digitar 0 finaliza o programa
    if (typeof number =="object" || number==0 ) { break } // sai do while
    
    if (number >= -100 && number <= 100) {
        // chama a função que faz a impressão da tabuada
        imprimeTabuada(number)
    } else {
        console.log("digite um número válido")
    }

}
console.log("até a próxima...")

// executa a impressão da tabuada
// precisa ser uma função? NÃO!!
function imprimeTabuada(number){

    const numbers=[1,2,3,4,5,6,7,8,9,10] // precisa usar array? não
                                         // escolhi usar array porque vou usar o ( for of )  
    // cabeçalho                                            
    console.log(`\nTabuda do Número ( ${number} )`)

    // loop para ir pegando os valores do array e multiplicar pelo número escolhido
    for (let mult of  numbers ) {
        console.log(`  ${number} x ${mult} = ${number * mult}`)    
    }
    console.log("------------------------")
}



const number=Number(prompt("Digite um número para imprimir a tabuada:"))

// cabeçalho                                            
console.log(`\nTabuda do Número ( ${number} )`)

for ( let num = 1 ; num <= 10 ; num++ ){
    console.log(`  ${number} x ${mult} = ${number * num}`)    
}