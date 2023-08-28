let myOption = process.argv[2]
let myNumber = process.argv[3]
let cpOption = null
let cpNumber = 0

console.clear()

const isEven = () => {
  return (myNumber + cpNumber) % 2 === 0 
}

if (myOption && myNumber && +myNumber &&
  (myOption.toLowerCase() === "par" || myOption.toLowerCase() === "impar")) {

  myOption = myOption.toLowerCase()
  myNumber = +myNumber

  if (myOption === 'par') {
    cpOption = "impar"
  } else {
    cpOption = "par"
  }

  cpNumber = Math.floor(Math.random() * 6)

  console.log(`\n`)
  console.log('---------------------------------------------------------------------------------------')
  if (isEven()) {
    if (myOption === "par") {
      console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${myNumber + cpNumber}. Você ganhou!`)
    } else {
      console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${myNumber + cpNumber}. Você perdeu!`)
    }
  } else {
    if (myOption === "impar") {
      console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${myNumber + cpNumber}. Você ganhou!`)
    } else {
      console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${myNumber + cpNumber}. Você perdeu!`)
    }
  }
  console.log('---------------------------------------------------------------------------------------')

} else {
  console.log("informe sua escolha (par ou impar) e um número")
}