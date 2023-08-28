

let array = [9 , 18 , 7]

/*

2) pode ordernar  ( mais simples?  não, precisa de função callback)

1 ) pode fazer por comparação ( recomendo para treinar a cabeça )

3) e pode apelar rsrsrsrs

const menorValor = Math.min(...array)
const maiorValor = Math.max(...array)


 */

let vMenor=array[0]
let vMaior=array[0]

for ( let x = 0 ; x < array.length; x++ ){
    if ( vMenor > array[x] ) {vMenor = array[x]}
    if ( vMaior < array[x] ) {vMaior = array[x]}
}

//console.log("método manual")
//console.log("valor menor",vMenor)
//console.log("valor maior",vMaior)

console.log("metodo de ordenação")
array.sort((a, b) => a - b )
console.log(array)
console.log("valor menor",array[0])
console.log("valor maior",array[array.length-1])



/*
let animals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant', "gato","cachorro","Elefante","Abelha", "formiga"
];

animals.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
});

console.log(animals)
*/
