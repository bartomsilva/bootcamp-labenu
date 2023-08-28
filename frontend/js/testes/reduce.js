//Redução de um array de arrays

let obj=[ [{nome: "bart"},{nome: "sandra"}], {nome: "xoe"}]

//let reduzido = [[0, 1], [2, 3], [4, 5]].reduce(
let reduzido = obj.reduce(
  function(acumulador, valorAtual) {
    return acumulador.concat(valorAtual)
  },
  []
)
console.log(reduzido)
// reduzido é [0, 1, 2, 3, 4, 5]
