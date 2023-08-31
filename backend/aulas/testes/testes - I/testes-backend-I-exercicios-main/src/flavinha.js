"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercise2 = void 0;
var exercise2 = function (date) {
    var dateRegex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/;
    if (typeof date !== "string")
        return null;
    if (dateRegex.exec(date) !== null) {
        var newDate = new Date(date);
        return newDate.toLocaleDateString("pt-BR");
    }
    return null;
};
exports.exercise2 = exercise2;
console.log((0, exports.exercise2)("2022/02/30"));
