/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

import { Person, COLORS } from './types'

const personOne: Person = {
  name: "Bart",
  age: 105,
  favourite_colour: COLORS.VIOLETA
}

const personTwo: Person = {
  name: "Ozemelildo",
  age: 25,
  favourite_colour: COLORS.LARANJA
}

const personThree: Person = {
  name: "Ozemelinda",
  age: 35,
  favourite_colour: COLORS.ANIL
}
