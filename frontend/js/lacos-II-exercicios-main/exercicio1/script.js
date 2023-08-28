const array = [
    [27, 4, 20, 13, 14],  // 0
    [11, 15, 12, 8, 9],   // 1
    [5, 5, 12, 16, 4],    // 2
    [20, 33, 11, 12, 19], // 3
    [3, 3, 4, 5, 10]      // 4 
]

let linha=""
let arrayInt=[]

for(let ce=0 ; ce < array.length ; ce++){

    linha=`Jogador ${Number(ce)+1}: `
    arrayInt = array[ce]  // capturei o array interno
    
    for(let ci=0; ci < arrayInt.length; ci++){
        linha = linha+`(${arrayInt[ci]}) `
    }
    console.log(linha)
}

for(let ce=0 ; ce < array.length ; ce++){

    linha=`Jogador ${Number(ce)+1}: `
    
    for(let ci=0; ci < array[ce].length; ci++){
        linha = linha+`(${array[ce][ci]}) ${ce+"-"+ci} `
        
    }
    console.log(linha)
}





