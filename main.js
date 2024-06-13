import "./style.css";

let a = 5;
let b = 10;

console.log("Antes del intercambio:");
console.log("a =", a);
console.log("b =", b);

let temp = a;
a = b;
b = temp;

console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);
