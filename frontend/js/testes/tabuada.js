
// recursividade.......
const tabuada=(num,mult)=>{
    if (mult==1) console.log(`Tabuada do: ${num}`)
    console.log(`  ${num} x ${mult} = ${num*mult}`)
    if (mult==10) return
    tabuada(num,mult+1)
}

function tabu(n){
    return tabuada(n)
}
