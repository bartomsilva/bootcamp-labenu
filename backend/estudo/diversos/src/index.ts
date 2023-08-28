
import express, { Request, Response } from 'express'
import cors from 'cors'
import exp from 'constants';

const server = express()
server.use(express.json())
server.use(cors())

server.listen(3003, () => console.log("server on in port 3003...."))

// desafios

// 1 e 2
let numberOne: number = +process.argv[2];
let numberTwo: number = +process.argv[3];

// console.log(`${numberOne} + ${numberTwo} é igual a ${numberOne+numberTwo}`)
// console.log(`${numberOne} - ${numberTwo} é igual a ${numberOne-numberTwo}`)
// console.log(`${numberOne} * ${numberTwo} é igual a ${numberOne*numberTwo}`)
// console.log(`${numberOne} / ${numberTwo} é igual a ${numberTwo!=0?numberOne/numberTwo:"impossível dividir por zero"}`)

// 3 

const totalDistance = 200 // kilometros
const spentFuel = 100 // litros
const averageConsumption = spentFuel / totalDistance

// console.log(`o consumo médio foi de ${averageConsumption} litros por kilômetro`)

// 4

server.post("/", (req: Request, res: Response) => {
  try {
    const v1 = req.body.v1 as string
    const v2 = req.body.v2 as string
    const v3 = req.body.v3
    const v4 = req.body.v4

    // exercicio 4
    //ex4(v1, v2, v3)

    // exercicio 5
    //ex5(v1,v2,v3,v4)

    // exercicio 6
    //ex6(v1,v2)

    // exercicio 7
    //ex7(v1)

    // exericicio extra - converter número romano para inteiro
    romanoToInt(v1)



    res.send("finish...")

  } catch (error) {
    res.send("erro: " + error)
  }
})

function ex4(name: string, wage: number, tStales: number) {
  const commission = (tStales * 15) / 100
  console.log("Nome do vendedor: ", name)
  console.log("Salário Fixo: ", wage)
  console.log("Salário Total: ", wage + commission)
  return "finish"
}

function ex5(name: string, n1: number, n2: number, n3: number) {
  console.log("Aluno: ", name)
  console.log("Média: ", (n1 + n2 + n3) / 3)
}

function ex6(A: any, B: any) {
  const aux = B
  console.log("Before : ", A, "-", B)
  B = A
  A = aux
  console.log("After : ", A, "-", B)
}

function ex7(tempCel: number) {
  // F = ( 9*C+160)/5
  console.log(`a temperatura ${tempCel}C, em Fahrenheit é: ${(9 * tempCel + 160) / 5}F`)
}

// CONVERTE NÚMERO ROMANO PARA DECIMAL ( com validação )
function romanoToInt(aRomano: string) {

  // converte para maiusculo
  aRomano = aRomano.toUpperCase()

  const indMax = aRomano.length

  let result: number = 0
  let rCurrent: string = ""        // número romano - atual 
  let rNext: string | null = ""    // número romano - próximo

  interface Romanos {
     [key:string]:number
  } 

  // const romanos: { [key: string]: number } = {
  const romanos:Romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  /* exemplos
    XI = 11 (atual maior que o próximo ou igual soma)
    XX = 20 (atual maior que o próximo ou igual soma)
    IX = 20 (atual menor que o próximo subtrai)
 */

  // verifica se é um número romano válido
  if (!validRomano(aRomano)) {
    console.log("número romano inválido!")
    return
  }

  for (let ind = 0; ind < indMax; ind++) {
    // algarismo romano - atual
    rCurrent = aRomano[ind]

    rNext = null  // reset

    // verifica se existe um próximo número romano
    if (ind + 1 < indMax) {
      // algarismo romano - próximo
      rNext = aRomano[ind + 1]
    }

    if (rNext && romanos[rNext] > romanos[rCurrent]) {
      result -= romanos[rCurrent]
    } else {
      result += romanos[rCurrent]
    }

  }

  console.log(`${aRomano}  = ${result}`)

}
// Validaçaõ do número romano
function validRomano(romano: string) {
  const regexLetterAcepted = /^([IVXLCDM]+)$/i // letras válidas
  const regexPatternValid1 = /(\w)\1\1\1/g // não permite mais de três repetições de uma letra)
  const regexNoValidSequence1 = /I[LCDM]/ // I não pode aparecer antes de L,C,D e M
  const regexNoValidSequence2 = /X[DM]/  //  X não pode aparecer antes de D e M
  const regexNoValidSequence3 = /(V|L|D).*\1/; // as letras V,L e D não podem se repetir seguidamente

  if (romano.match(regexLetterAcepted) === null) return false
  if (romano.match(regexPatternValid1) !== null) return false
  if (romano.match(regexNoValidSequence1) !== null) return false
  if (romano.match(regexNoValidSequence2) !== null) return false
  if (romano.match(regexNoValidSequence3) !== null) return false

  return true
}

