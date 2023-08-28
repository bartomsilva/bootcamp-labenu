/* porque separo os exercícios com funções?
   assim não preciso ficar comentando e descomentado
   o código completo, basta comentar a chamda das funções.
*/

//exercicio1()
//exercicio2()
//exercicio3()
//exercicio4()
//exercicio5()
//exercicio6()


// soma dos números
function exercicio1(){

    let numero=null
    let soma=0

    while(true){
        
        numero=Number(prompt(soma===0?"Digite um número:":"Digite mais um número:"+
        "\nou 0 zero para finalizar"))
        
        if ( numero===0 ){ // vai parar quando digitar 0 ou clicar em cancelar
             break // finaliar
        }
        
        if (numero >=1 ) {
            soma += numero
            console.log(`  + ${numero}`)
        } else {
            console.log("Você não digitou um número válido")
        }
    }
    console.log(`---- total é ${soma}`)
}


// contagem até....
function exercicio2() {
    let contagem="-"
    const numero=prompt("Devo contar até quanto?")
    console.log(`vou contar de 0 até ${numero}`)
    for ( let contador=0; contador <= numero ; contador++) {
        contagem += contador+"-"
    }
    console.log(`${contagem}`)
}


// imprimindo numeros de um array e seu índice
function exercicio3(){
    const numeros=[8,12,22,44,55,66,81]
    for( let indice in numeros ) {
        console.log(`índice ${indice} número ${numeros[indice]}`)

    }
}

// acesso só para admin
function exercicio4(){

    let tipoDoUsuario=null
    
    while(true) {
        tipoDoUsuario = prompt(`Digite o Tipo do Usuário 
          A - Administrador
          B - Usuário Comum
          C - Assinante`)
        
        if ( tipoDoUsuario.toUpperCase() ==="A"){
            break
        } else {
            console.log("Acesso negado.")
        }              
    }
    console.log("Boas-vindas, admin!")
}


// tabuada do dois
function exercicio5(){    
   
    console.log("Tabuada do Número 2")
    for ( let numero=1 ; numero <=10; numero ++){
        console.log(`  2 x ${numero} = ${2 * numero}`)
    }
}


// tudo em caixa ALTA
function exercicio6(){
    const aDiversos=['ozemela','cadeira','copo','computador','labenu']
    for ( let item of aDiversos){
        console.log(item.toUpperCase())
    }
}


