//Crie a const para a frase aqui

/*
# Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
*/
const frase='Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
let novaFrase = frase.replace("verde","rosa").replace("azul","laranja")
console.log(frase)
console.log(novaFrase)
console.log("a frase nova tem verde ?",novaFrase.includes("verde"))
console.log("a frase nova tem Laranja ?",novaFrase.includes("laranja"))
const fraseAlterar="mas não deixe o gato sair"
console.log(novaFrase=novaFrase.replace(fraseAlterar,fraseAlterar.toUpperCase()))