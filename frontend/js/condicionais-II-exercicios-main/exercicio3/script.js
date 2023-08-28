/*
# Exercício 3

Reescreva os códigos do arquivo script.js utilizando o if ternário.

**Relembrando o if ternário**
```jsx
condição ? expr1 : expr2
```

Onde :

`condição` é uma expressão que é avaliada como `true` ou `false`.

`expr1`, `expr2` são xpressões com valores de qualquer tipo.
*/

// a) código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

// console.log("teste 3")


const nome="José"
const idade=18

console.log( nome==="José"?"Oi, Zé!":"Olá, "+nome)

console.log(idade >= 18?"pode tirar carteira de motorista!":
						"Ainda não pode tirar carteira de motorista")
