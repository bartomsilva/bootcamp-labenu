/*
# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, 
como no exemplo abaixo:

```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
*/

const melhoresSelecoes = ["Brasileira", "Alemã", "Holandesa", "Argentina", "Portuguesa"];

console.log("---Lista das Melhores Seleções em 2022---\n")
for ( let count in melhoresSelecoes ) {
    console.log(`   ${Number(count)+1} - ${melhoresSelecoes[count]}`)
}

