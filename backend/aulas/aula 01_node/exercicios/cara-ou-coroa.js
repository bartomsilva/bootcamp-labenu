// par cara
// impar e coroa

const myOption = process.argv[2]
console.clear()
console.log("\n")
console.log("--------------------------------------------------------")
if (myOption && (myOption.toLowerCase() === 'cara' || myOption.toLowerCase() == 'coroa')) {

  const prizeDraw = Math.floor(Math.random() * 101) % 2 === 0 ? "cara" : "coroa"

  console.log(`deu ${prizeDraw} e você escolheu ${myOption}, você`,
   myOption === prizeDraw ? "Ganhou!" : "Perdeu!")

} else {
  console.log("escolha cara ou corora!")
}
console.log("--------------------------------------------------------")
console.log("\n")
