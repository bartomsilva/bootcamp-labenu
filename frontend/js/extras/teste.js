

(function(x) {
    console.log("Função que chama ela mesma - TABUADA DO ",x)
    for(let num = 1; num <=10 ; num++) 
        console.log(` ${x} x ${num} = ${num*x}`)
})(7)


