let myOption = process.argv[2]
const options = ["pedra", "papel","tesoura","papel","tesoura","pedra"]
const cpOption = options[Math.floor(Math.random() * 6)]


console.clear()

const validOption = (option) => {
  return (options.filter((opt) => opt === option.toLowerCase())).length > 0
}

console.log("\n")
console.log("-----------------------------------------------------------------------")
if (myOption && validOption(myOption)) {
  if (myOption === cpOption) {
    console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Empate!"`)
  } else if (myOption === 'pedra') {
    if (cpOption === "tesoura") {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você ganhou!"`)
    } else {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você perdeu!"`)
    }
  } else if (myOption=="tesoura"){
    if (cpOption === "pedra") {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você perdeu!"`)
    } else {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você Ganhou!"`)
    }
  } else if (myOption=="papel"){
    if (cpOption === "pedra") {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você ganhou!"`)
    } else {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você Perdeu!"`)
    }
  }
} else {
  console.log("informe sua escolha: pedra, papel ou tesoura")
}

console.log("-----------------------------------------------------------------------")
console.log("\n")

