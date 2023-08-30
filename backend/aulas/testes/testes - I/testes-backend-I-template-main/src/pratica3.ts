interface Output {
  sum: number,
  multiplication: number
}

export function convertNumbersToObject(
  numberOne: number, numberTwo: number):(Output | null) {

  if (!numberOne || typeof numberOne != "number") return null
  if (!numberTwo || typeof numberTwo != "number") return null

  const output = {
    sum: numberOne + numberTwo,
    multiplication: numberOne * numberTwo
  }
  return output
}
