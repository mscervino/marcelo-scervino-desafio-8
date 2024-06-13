import "./style.css";

/* 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.*/

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

/* 2. Función que reciba 2 números como entrada y determine cuál es el mayor.*/

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

/* 3. Función que reciba un número y retorne si es un número dado es par o impar.*/

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return numero + " es par";
  } else {
    return numero + " es impar";
  }
}

let numero = prompt("Por favor, ingresa un número:");

numero = Number(numero);

if (isNaN(numero)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  console.log(esParOImpar(numero));
}

/* 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.*/

function calcularPrecioFinal(precioOriginal, porcentajeDescuento) {
  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioFinal = precioOriginal - descuento;
  return precioFinal;
}

let precioOriginal = 5000;
let porcentajeDescuento = 15;

console.log(
  "El precio final después de aplicar el descuento es: $" +
    calcularPrecioFinal(precioOriginal, porcentajeDescuento)
);

/* 4. VERSION 2 Pidiendo los datos. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.*/

function calcularPrecioFinal2(precioOriginal2, porcentajeDescuento2) {
  let descuento = (precioOriginal2 * porcentajeDescuento2) / 100;
  let precioFinal = precioOriginal2 - descuento;
  return precioFinal;
}

let precioOriginal2 = prompt(
  "Por favor, ingresa el precio original del producto:"
);

let porcentajeDescuento2 = prompt(
  "Por favor, ingresa el porcentaje de descuento:"
);

precioOriginal2 = Number(precioOriginal2);
porcentajeDescuento2 = Number(porcentajeDescuento2);

if (isNaN(precioOriginal2) || isNaN(porcentajeDescuento2)) {
  console.log(
    "Por favor, ingresa valores válidos para el precio y el porcentaje de descuento."
  );
} else {
  console.log(
    "El precio final después de aplicar el descuento es: $" +
      calcularPrecioFinal2(precioOriginal2, porcentajeDescuento2)
  );
}
