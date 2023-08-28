/*
- Desafios
    1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
        
        a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
        
        b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
        Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
        
    2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
     Retorne este valor, invoque a função e imprima o resultado no console. 
        - 💡  Dica
            ☝ A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
            É necessário isolar a hipotenusa, então ao final temos: **hip = √(a² + b²)**
            
           
*/
// parte 1 

//a)
const primeiraFunction=(dados)=> {
    console.log(dados)
} 
//b) 
const segundaFunction=(valor1,valor2)=>{
    primeiraFunction(valor1+valor2)
}

segundaFunction(10,20)  // esperado 30
segundaFunction(50,20)  // esperado 70
segundaFunction(80,20)  // esperado 100

// parte 2
/*
A hipotenusa é igual à raiz quadrada da soma dos catetos ao quadrado”
Para calcular a medida da hipotenusa:

Elevamos as medidas dos catetos ao quadrado;
Somamos os resultados;
Extraímos a raiz quadrada.

*/

const calcHipotenusa=(c1,c2)=>{
    // c1 e c2 são os catetos
    const somaDosCatetos= ( c1*c1)+(c2*c2)  // ao quadrado é igual a ele mesmo se multiplicando
    const valorHipotenusa= somaDosCatetos ** 0.5  // não tenho certeza se elevando o resultado 
                                                  // dos catetos elevando a 50% e se podemos usar ** 
                                                  // que é elevado (potenciação)
    return valorHipotenusa
}

console.log("o valor da hipotenusa",calcHipotenusa(3,4))  // esperado 5
console.log("o valor da hipotenusa",calcHipotenusa(5,12))  // esperado ?

