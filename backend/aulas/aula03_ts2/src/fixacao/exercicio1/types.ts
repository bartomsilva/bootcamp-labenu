// a. nome, que é uma string;
// b. idade, que é um número;
// c. corFavorita, que é uma string.

//vermelha, laranja, amarela, verde, azul, anil e violeta.

export enum COLORS {
  VERMELHA = "Vemelha",
  LARANJA = "Laranja",
  AMARELA = "Amarela",
  VERDE = "Verde",
  AZAUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

export type Person = {
  name: string,
  age: number,
  favourite_colour: COLORS
}