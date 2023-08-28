const num = 1

const verificaNumPar=( num )=>{
    
    if ( num%2 === 0 ) { 
        return `o número ${num} é par`
    }
    
    return `o número ${num} não é par`
}

console.log( verificaNumPar(num)  )
