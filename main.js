import "./style.css";

/*1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.*/

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

/*2. Función que reciba 2 números como entrada y determine cuál es el mayor.*/

function determinarMayor(num1, num2) {
  if (num1 > num2) {
    return num1 + " es mayor que " + num2;
  } else if (num1 < num2) {
    return num2 + " es mayor que " + num1;
  } else {
    return num1 + " y " + num2 + " son iguales";
  }
}

let numero1 = 7;
let numero2 = 10;

console.log(determinarMayor(numero1, numero2));
