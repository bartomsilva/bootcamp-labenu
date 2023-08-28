const number = Number(prompt("Digite um número qualquer"))
const divPor2= number%2===0
const divPor3= number%3===0
  

if (divPor2) {
  if (divPor3) {
    console.log(`o número ${number} é divisível por 2 e 3`)

    console.log(number===30?"UFA ACERTEI!":"não foi desta vez")

    switch(number) {
        case 6:
          console.log("seis foi o número escolhido")
          break
        case 12:
          console.log("doze foi o número escolhido")
          break
        case 18:
          console.log("dezoito o número foi escolhido")
          break
        case 24:
          console.log("24 foi o número escolhido")
          break
        case 30:
          console.log("30 foi o número escolhido")
          break
        default:
          console.log(`o número ${number} é maior que 30`) // como flavia falou o enunciado ruim sai o < 6 ai sim   
    }

  } else {
    console.log(`o número ${number} não é divisível por 2 e por 3`)
  }

} else {    
  console.log(`o número ${number} não é divisível por 2 e por 3`)
}





































/*# Exercício 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(expressao){
        if(expressao){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
```
*/

/*
const number = Number(prompt("digite um número qualquer"))

// não permite entrada de valores não válidos ( apenas valores tipo Number são permitidos )   
if ( isNaN(Number(number)) || number===""  || (typeof number !="string") ) {
    console.log("você não digitou um número válido!!!")   
    console.log("---Resultado dos Testes --------")
    // isNaN = não é possivel converter para um número válido
    console.log("resultado do isNaN (Not a Number)",isNaN(Number(number))," = ",Number(number) )
    // number===""  = quando não digita nada e clica no ok
    console.log(`resultado de number ===""`,number==="")
    // typeof number !="string" = quando clica no cancelar retorna um object null
    console.log(`resultado de typeof number !="string"`,typeof number !="string"," = ",number, typeof number)
    console.log("-------------------------------")
} else { 

    console.log("parte 1")

    //1. Utilizando ifs aninhados

    const objDiv = {
        divPor2: (number%2===0),
        divPor3: (number%3===0)
    }

    if (objDiv.divPor2) {
        if (objDiv.divPor3) {
            console.log(`o número ${number} é divisível por 2 e por 3`)
        } else {
            console.log(`o número ${number} é divisível apenas por 2`)
        }
    } else if (objDiv.divPor3) {
        console.log(`o número ${number} é divisível apenas por 3`)
    } else {
        console.log(`o número ${number} nãe é divisível por 2 nem por 3`)    
    }

    console.log("*".repeat(45))
    console.log("parte 2")
    //2. Utilizando um operador lógico para unir duas operações relacionais

    if (objDiv.divPor2 || objDiv.divPor3){
        if (objDiv.divPor2 && objDiv.divPor3){        
            console.log("o número",number,"é divisível por 2 e por 3")
        } else if (objDiv.divPor2){
            console.log("o número",number,"é divisível apenas por 2")
        } else {
            console.log("o número",number,"é divisível apenas por 3")
        }
    } else {
        console.log("o número",number,"não é divisível por 2 nem por 3")
    }
}


let num=8
console.log(resposta%2===0?"número par":resposta%2===1?"número impar":"dado inválido")
*/
