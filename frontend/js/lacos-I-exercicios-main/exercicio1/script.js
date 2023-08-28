/*
# Exercício 1

Utilizando o laço `while`, escreva um código que recebe um 
`prompt` perguntando se a pessoa deseja comer mais coxinhas.
 “S” deve representar “sim”, e
  “N” deve representar “não”. Crie também uma
  `let conta` para guardar o valor total.

Toda vez que a resposta for
 **sim**, o laço deve se repetir, e 
 devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
 devemos imprimir o valor total da conta.
*/

let coxinhas=0 // acumula o total de coxinhas ( QUANTIDADE )
let continuar="s" // s ou n  = defino incialment com o valor s para entrar no while
let conta=0  // total da conta em dinheiro

// faça enquanto o valor
// da variável continuar 
// não seja igual a n
while(continuar!="n") {  
                                    // if ternário: primeira      da segunda coxinha em diante
    continuar=prompt(`Deseja comer ${coxinhas===0?"uma coxinha ":"mais uma coxinha "}?
    digite S = sim ou N = não`)
    
    
    if (typeof continuar == "object") { break } // clicou em cancelar o retorno é null
                                                // não foi ensinado mais o break também
                                                // funciona no while
           
    continuar=continuar.toLowerCase()  // converte para minusculas 
                                       // se tentar converver direto no prompt vai
                                       // dar erro de excução, porque ao clicar cancelar
                                       // é devolvido null e null não é string. 

    if (continuar=="s"){ 
        coxinhas++  // adicionado para somar o número de coxinhas
        console.log(`uma coxinha consumida...(${coxinhas})`) // vai mostrando a quantidade de coxinhas 
        conta += 2.50
    } else if (continuar!="n") {
        console.log("Digite uma opção válida!!!")
    }
}

console.log("-- Resumo das Vendas---------------")
console.log(`número de coxinhas consumidas: ${coxinhas}`)    
console.log(`Valor total da conta R$ ${conta.toFixed(2)}`)


// então compreendendo isso 
// sabemos que para um loop ser interrompido ( parar )
// precisa que uma condição aconteça

// exemplo: um loop que só sairá quando chegar em 100

let x=0
while(x<100){
    console.log("x = ",x)
    x = x + 1  // ou pode fazer x++
}

// com for

for ( let y = 0 ;  y < 100 ; y = y + 1) {
    console.log("y = ",y)
}