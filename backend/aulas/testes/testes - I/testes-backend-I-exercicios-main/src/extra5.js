"use strict";
/*
Crie uma função que recebe dois números e retorna
uma lista com os números entre o primeiro e o segundo
números recebidos, inclusivos.
Por exemplo, o input 5 e 9 retorna [ 5, 6, 7, 8, 9 ]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.challenge5 = void 0;
function challenge5(numberOne, numberTwo) {
    var result = [];
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        return null;
    }
    // deixe propositalmente sendo numberOne maior que numberTwo
    // if ( numberOne>numberTwo) return null
    for (var x = numberOne; x <= numberTwo; x++) {
        result.push(x);
    }
    return result;
}
exports.challenge5 = challenge5;
console.log(challenge5(2, 4));
