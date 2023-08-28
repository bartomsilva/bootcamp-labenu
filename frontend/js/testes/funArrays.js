rem "use strict"
// FILTER = FILTRO

const fruits2 = [{nome: "maçã"},{nome: "banana"},{nome: "pêra"},{nome: "laranja"},{nome: "morango"}]

const filterItems = (query) => {
  return fruits2.filter(el => el.nome.indexOf(query) > -1)
}


const r1 = filterItems("an")

//console.log(r1)


// FIND = PROCURAR



const array=[1,2,3]

console.log("--for in sem declarar------------")
for(num in array) console.log(array[num])
console.log("--for in const-------------------")
for(const num in array) console.log(array[num])
console.log("-----for of sem declarar----------")
for(num of array) console.log(num)
console.log("----for of com const--------------")
for(const num of array) console.log(num)



