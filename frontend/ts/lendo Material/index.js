"use strict";
function sayHello(name) {
    console.log("Olá ", name || "World");
}
sayHello("Bart");
sayHello("");
// utilizando este tipo, nosso objeto fica assim:
const person1 = {
    name: "Bart",
    age: 30
};
// olha só como fica sem um type (tipagem anônima)
const person2 = {
    name: "Astrodev",
    age: 30
};
// com um type o código fica mais limpo e também ganhamos a reutilização da tipagem (podemos usar o TPerson quando quisermos)
