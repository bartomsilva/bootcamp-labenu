enum SIZE_BLOUSES {
  P = "36/38",
  M = "38/40",
  G = "40/42",
}

interface BLOUSES {
  id: string
  name: string
  size: SIZE_BLOUSES
}

const body = {
  id: "fskffsfjksjfsjkf9sf90s809s8B",
  name: "Blusa Start two",
  size: "J"
}

console.log(Object.keys(SIZE_BLOUSES).includes(body.size))
console.log(Object.values(SIZE_BLOUSES.P))