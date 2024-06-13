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

/* 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.*/

function calcularAreaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

let radio = prompt("Por favor, ingresa el radio del círculo:");

radio = Number(radio);

if (isNaN(radio) || radio <= 0) {
  console.log("Por favor, ingresa un valor válido para el radio.");
} else {
  let area = calcularAreaCirculo(radio);
  console.log(
    "El área del círculo con radio " + radio + " es: " + area.toFixed(2)
  );
}

/* 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit. */

function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let celsius = prompt("Por favor, ingresa la temperatura en Celsius:");

celsius = Number(celsius);

if (isNaN(celsius)) {
  console.log(
    "Por favor, ingresa un valor válido para la temperatura en Celsius."
  );
} else {
  let fahrenheit = convertirCelsiusAFahrenheit(celsius);
  console.log(celsius + "°C es igual a " + fahrenheit.toFixed(2) + "°F");
}

/* 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10.*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo. */

let numeroa = 0;

while (numeroa >= 0) {
  numeroa = prompt(
    "Por favor, ingresa un número (ingresa un número negativo para salir):"
  );
  numeroa = Number(numeroa);

  if (isNaN(numeroa)) {
    console.log("Por favor, ingresa un valor válido.");
  } else if (numeroa >= 0) {
    console.log("Ingresaste el número: " + numeroa);
  }
}

console.log("Has ingresado un número negativo. El bucle ha terminado.");

/* 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10. */

let numero4 = prompt(
  "Por favor, ingresa un número para ver su tabla de multiplicar:"
);

numero4 = Number(numero4);

if (isNaN(numero4)) {
  console.log("Por favor, ingresa un valor válido.");
} else {
  console.log("Tabla de multiplicar del " + numero4 + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(numero4 + " x " + i + " = " + numero4 * i);
  }
}

/* 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100. */

let sumaPares = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

console.log("La suma de los números pares del 1 al 100 es:", sumaPares);
