
const numeros=["062726","2833--f","333-a","33a","024942","62002","171558999-r","9156",
 "BART88","BART68","bart55","bart30","246958","78342-e","34035","423610-gg","52073","55552663",
 "99307","2256889-z","91501","2342385236-b","42776558-g","51643","2044317",
 "56867","9723326","903694443333"]
let snumeros = numeros.toString()

//const mR = /[0-9]g/
//console.log(snumeros)
//const my = mR.exec(snumeros)
//console.log(snumeros)
//let regexp = /[^0-5]+[a-z]/gi
let regexp = /[0-9]{4}/g
regexp = /\d{6}/g
//snumeros="12345snvsflopo90"
let ma=snumeros.match(regexp)
console.log(ma)

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
regexp = /[^A-C]/gi;
const matches_array = str.match(regexp);

//console.log(matches_array);
