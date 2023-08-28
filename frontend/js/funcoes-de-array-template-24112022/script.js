// by bart - 11/2022
const pokemons = [
  { name: 'Bulbasaur', type: 'grama', life: 40 },
  { name: 'Bellsprout', type: 'grama', life: 20 },
  { name: 'Charmander', type: 'fogo', life: 35 },
  { name: 'Vulpix', type: 'fogo', life: 25 },
  { name: 'Squirtle', type: 'água', life: 45 },
  { name: 'Psyduck', type: 'água', life: 25 },
]

// a)
// função que altera o valor da vida para 100%
// função nomeada
function lifeFull(obj){
  obj.life=100  
  return obj
}

//b) MAP
// alterando os valores da vida para vida cheia (DUAS FORMAS)

// utilizando uma função nomeada como callback
const pokemonsVidaCheia = pokemons.map(lifeFull)

// utilizando uma função arrow function como callback
const pokemonsVidaCheia2= pokemons.map(obj => {return{...obj,life:100}})
printPokemons("Pokemons de Vida Cheia",pokemonsVidaCheia)
printPokemons("Pokemons de Vida Cheia - 2",pokemonsVidaCheia2)

//c) FILTER
// função não nomeada
const pokeFire=function(obj){
  return obj.type==="fogo"
}
// selecionando pokemons de fogo (DUAS FORMAS)

// usando a função não nomeada como callback
const pokemonsDeFogo = pokemons.filter(pokeFire)

// utilizando arrow function como callback
const pokemonsDeFogo2 = pokemons.filter(obj => obj.type==="fogo")
printPokemons("Pokemons de Fogo",pokemonsDeFogo)
printPokemons("Pokemons de Fogo - 2",pokemonsDeFogo2)


////////////////////////////
///// impressão dos Pokemons
////////////////////////////

// recebe o texto do cabeçalho e o obj 
function printPokemons(text,obj){
  console.log("\n")
  console.log("-".repeat(text.length))
  console.log(`${text}`)  
  console.log("-".repeat(text.length))
  obj.map(e=> {
    console.log(`Nome: ${e.name} - Tipo: ${e.type} - Vida ${e.life}%`)    
  })
}
