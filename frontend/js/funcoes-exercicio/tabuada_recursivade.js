
// seu eu fosse dar um return teria que ir de recursividade.......

const tabuada=(num,mult)=>{
    console.log(`${num} x ${mult} = ${num*mult}`)
    if (mult==10) return 
    tabuada(num,mult+1)
}
tabuada(6,1)