
const mult2=(e)=> e*2 
const div2=(e)=> e/2 

const myMap=(arr, fcb)=>{
    const newArr=[]
    for(const element of arr){
        newArr.push(fcb(element))
    }
    return newArr
}

const myFilter=(arr,fcb)=>{
    const newArr=[]
    for(const element of arr){
        if(fcb(element))
            newArr.push(element)
    }
    return newArr
}

const numbers=[1,2,3,4,5,6]
//MAP
console.log(myMap(numbers, div2))
console.log( numbers.map(div2) )

//FILTER
console.log( myFilter(numbers,e => e%2!=0))

console.log( numbers.filter(e => e%2!=0))



