const functions = require("./utils.js");

let a = [
    [1, 2],
    [3, 4]
];
let b = [
    [5, 6],
    [7, 8]
];
console.log(functions.matrixProduct(a, b));


let c = [
    [1, 2, 2],
    [3, 4, 3],
    [8, 9, 1]
];
let d = [
    [5, 6, 3],
    [7, 8, 4],
    [3, 5, 2]
];
console.log(functions.sumOfMatrices(c, d));


let e = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(functions.sumOfEachRow(e));