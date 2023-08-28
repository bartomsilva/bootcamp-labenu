/*
console.log("Hello, World!")

type Person = { 
	name: string, 
	age: number
};

const astrodev: Person = {
	name: "Astrodev",
	age: 30
};

type EFoda = { name: string, age?: number}

const result : EFoda = {
  name:"ssss"
}

result.age=55



console.log(astrodev)
console.log(result)

*/

enum LABENU_CLASSES {
  LOVELACE = "Lovelace",
  MARYAM = "Maryam",
  CARVER = "Carver",
  JOY = "Joy",
  GUIMARAES = "Guimarães",
  VAUGHAN = "Vaughan"
  }
  
  // type tipado com um Enum
  type TTeacher = {
    name: string,
    className: LABENU_CLASSES
  }

  // constante recebendo um valor de um Enum (atribuição)
  const labenuTeacher: TTeacher = {
    name: "Janaylla",
    className: LABENU_CLASSES.MARYAM
  }
  console.log(labenuTeacher)