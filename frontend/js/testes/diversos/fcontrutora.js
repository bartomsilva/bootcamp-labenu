
// criação de um objeto pessoa1
const pessoa1 = {
    nome: "Bart",
    idade: 55
}

// função construtora que cria objeto pessoa
function pessoa(nome,idade){
    this.nome = nome               // nome: nome,
    this.idade = idade             // idade: idade 
   
}

// chamando a função construtora e criando a pessoa2
const pessoa2 = new pessoa("Bart",55)

const pessoa3 = {...pessoa1} // copia 
pessoa3.nome = "Jose"
pessoa3.idade = 25

const pessoa4 = new pessoa("Maria", 22)

// imprimindo no console os dados dos objetos criado
console.log("objetos criados")
console.log("manual",pessoa1)
console.log("função",pessoa2)





// imprimindo no console os tipos de dados de pessoa1 e pessoa2
console.log("tipo dos dados")
console.log("pessoa1", typeof pessoa1)
console.log("pessoa2", typeof pessoa2)
console.log("pessoa3", typeof pessoa3)
console.log("pessoa4", typeof pessoa4)

//arroz".split("").reverse().join(""); //"zorra"
