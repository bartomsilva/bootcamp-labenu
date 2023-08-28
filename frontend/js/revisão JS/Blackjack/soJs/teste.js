function sumPoint(arr) {
    return arr.reduce( (total, current ) => { 
       total += current.valor  
       return total   
    },0)
}

arr = [
    { texto: "sss",valor:1},
    { texto: "sss",valor:2},
    { texto: "sss",valor:3},
]

console.log(sumPoint(arr))