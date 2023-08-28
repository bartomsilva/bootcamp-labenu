// novo array com os valores multiplicados por 2
// novo array com os valores divididos por 2
// novo array com os números pares

const numeros = [1, 2, 3, 4, 5, 6, 8]
const pessoas =[{name: "Bart", age: 55},{name: "Sandra", age: 48}]


function myFuncArr(arr, fCb) {
    const array1 = []
    let result=""
    for (const index in arr) {
        result=fCb(arr[index])
        if(typeof result=="boolean" && result){
            result=arr[index] 
        }else if (typeof result=="boolean")  {
            result=null
        }
        typeof result!="undefined"&&result?array1.push(result):""
    }
    return array1
}


const soPares=(e)=> {
   if (e%2===0){
      return e
   }
}

const mult2=(e)=> {
     return e * 2 
}

//map()
let ex1 = myFuncArr( numeros, (e) => e * 2 )
ex1=myFuncArr( pessoas, (e) => e.age /2 )
console.log(ex1)


//filter()
ex1 = myFuncArr(numeros,e => e%2===0)

//find()
ex1 = myFuncArr(numeros, e => e === 8 )









