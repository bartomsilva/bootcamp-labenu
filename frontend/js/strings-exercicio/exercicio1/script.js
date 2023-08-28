/*
aça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso
*/
const nomedoUsuario =  prompt("Digite seu nome aqui: ")
const comida1 = prompt("Agora digite uma comida favorita:")
const comida2 = prompt("Digite outra comida favorita:")
const comida3 = prompt("Digite só mais uma comida favorita:")

let frase1 = `Estas são as comidas favoritas de ${nomedoUsuario}\n`+
                        `- ${comida1}\n- ${comida2}\n- ${comida3}`
console.log(frase1)
let frase2 = "Estas são as comidas favoritas de "+nomedoUsuario+"\n"+
                        "- "+comida1+"\n- "+comida2+"\n- "+comida3
console.log(frase2)