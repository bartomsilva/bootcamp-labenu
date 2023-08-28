function sayHello( name?: string): void {

  console.log( "Olá ",name || "World")
}

sayHello("Bart")
sayHello("")

// export type TPerson = { 
// export deu erro unaught ReferenceError: exports is not defined
type TPerson = { 
	name: string, 
	age: number
}

// utilizando este tipo, nosso objeto fica assim:
const person1: TPerson = {
	name: "Bart",
	age: 30
}


// olha só como fica sem um type (tipagem anônima)
const person2: {
	name: string,
	age: number
} = {
	name: "Astrodev",
	age: 30
}



// com um type o código fica mais limpo e também ganhamos a reutilização da tipagem (podemos usar o TPerson quando quisermos)