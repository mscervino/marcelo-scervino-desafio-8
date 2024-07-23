import "./style.css";

/* 1. Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array*/

let frutas = ["manzana", "durazno", "pomelo", "mandarina", "banana"];

let frutaEliminada = frutas.pop();
console.log("Fruta eliminada:", frutaEliminada);

frutas.push("mango");

console.log("Array de frutas actualizado:", frutas);

/* 2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.*/

let tareas = ["ir al gym", "ir al banco", "ir a trabajar"];

let tareaCompletada = tareas.shift();
console.log("Tarea completada:", tareaCompletada);

tareas.unshift("salir a correr");

console.log("Lista de tareas actualizada:", tareas);

/* 3. Fila de Espera: Simula una fila de espera con un array clientes.  Añade 2 nuevos clientes al final de la fila con push.  Atiende al primer cliente usando shift y muestra su nombre por consola.*/

let filaDeEspera = ["Juan", "Pedro", "Marcelo", "Daniela", "Agustina"];

filaDeEspera.push("Mercedez");
filaDeEspera.push("Victoria");

let clienteAtendido = filaDeEspera.shift();
console.log("Cliente atendido:", clienteAtendido);

console.log("Fila de espera actualizada:", filaDeEspera);

/* 4. Rotación de Elementos: Crea un array numeros con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.*/

let numeros = [112, 202, 609, 99, 401];

function rotarArray(arr) {
  let ultimoNumero = arr.pop();
  arr.unshift(ultimoNumero);
}

rotarArray(numeros);
console.log("Después de 1 rotación:", numeros);

rotarArray(numeros);
console.log("Después de 2 rotaciones:", numeros);

rotarArray(numeros);
console.log("Después de 3 rotaciones:", numeros);

/* 5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.*/

let carrito = [];

carrito.push("televisor");
carrito.push("impresora");
carrito.push("notebook");

console.log("Carrito después de agregar productos:", carrito);

let productoEliminado = carrito.pop();
console.log("Producto eliminado:", productoEliminado);

console.log("Carrito actualizado:", carrito);

/* 6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.*/

let valores = [7, 30, 32, 14, 18];

let dobles = valores.map(function (valor) {
  return valor * 2;
});

console.log("Array original:", valores);
console.log("Array con valores doblados:", dobles);

/* 7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.*/

let nombres = ["Juan", "Daniela", "Delfina", "ezequiel", "bruno"];

let nombresEnMayusculas = nombres.map(function (nombre) {
  return nombre.toUpperCase();
});

console.log("Array original:", nombres);
console.log("Array con nombres en mayúsculas:", nombresEnMayusculas);

/* 8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.*/

let precios = [100, 200, 300, 400, 500];

const IVA = 0.21;

let preciosConIVA = precios.map(function (precio) {
  return precio * (1 + IVA);
});

console.log("Array original de precios sin IVA:", precios);
console.log("Array de precios con IVA incluido:", preciosConIVA);

/* 9. (map) Cuadrados de Números:  Crea un array numeros del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.*/

let cuadrados = Array.from({ length: 10 }, (v, i) => i + 1).map(
  (numero) => numero * numero
);

console.log("Array de cuadrados de los números:", cuadrados);

/* 10. (filter) Números Pares:  Filtra un array numeros para obtener solo los números pares.*/

let enteros = [13, 18, 20, 45, 63, 96, 88];

let resultadoPares = enteros.filter(function (entero) {
  return entero % 2 === 0;
});

console.log("Array original de enteros:", enteros);
console.log("Array de números pares:", resultadoPares);

/* 11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.*/

let palabras = [
  "manzana",
  "perro",
  "elefante",
  "gato",
  "hipopotamo",
  "ratón",
  "cielo",
];

let palabrasLargas = palabras.filter(function (palabra) {
  return palabra.length > 5;
});

console.log("Array original de palabras:", palabras);
console.log("Array de palabras largas:", palabrasLargas);

/* 12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).*/

let productos = [
  { nombre: "televisor", precio: 450 },
  { nombre: "impresora", precio: 550 },
  { nombre: "notebook", precio: 1200 },
  { nombre: "smartphone", precio: 300 },
  { nombre: "audífonos", precio: 100 },
];

let productosEnOferta = productos.filter(function (producto) {
  return producto.precio < 500;
});

console.log("Array original de productos:", productos);
console.log("Array de productos en oferta:", productosEnOferta);

/*13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.*/

let estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 6 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pedro", nota: 5 },
  { nombre: "Sofía", nota: 7 },
];

let estudiantesAprobados = estudiantes.filter(function (estudiante) {
  return estudiante.nota >= 7;
});

console.log("Array original de estudiantes:", estudiantes);
console.log("Array de estudiantes aprobados:", estudiantesAprobados);

/* 14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripcion y completada), filtra las tareas que estén marcadas como completadas.*/

let trabajos = [
  { descripcion: "Hacer la compra", completada: true },
  { descripcion: "Lavar la ropa", completada: false },
  { descripcion: "Ir al gimnasio", completada: true },
  { descripcion: "Leer un libro", completada: false },
  { descripcion: "Escribir un informe", completada: true },
];

let trabajosCompletos = trabajos.filter(function (item) {
  return item.completada;
});

console.log("Array original de trabajos:", trabajos);
console.log("Array de trabajos completados:", trabajosCompletos);

/* 15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.*/

let name = ["Juan", "Daniela", "Delfina", "Ezequiel", "Bruno"];

name.forEach(function (name) {
  console.log(name);
});

/* 16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.*/

let edades = [25, 30, 45, 50, 60];

let sumaEdades = 0;

edades.forEach(function (edad) {
  sumaEdades += edad;
});

console.log("Suma de las edades:", sumaEdades);

/* 17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.*/

let product = [
  { nombre: "televisor", precio: 450 },
  { nombre: "impresora", precio: 550 },
  { nombre: "notebook", precio: 1200 },
  { nombre: "smartphone", precio: 300 },
  { nombre: "audífonos", precio: 100 },
];

product.forEach(function (producto) {
  producto.precio = producto.precio * 0.9;
});

console.log("Array de product con descuento:", product);

/* 18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).*/

let invitados = ["Juan", "Daniela", "Delfina", "Ezequiel", "Bruno"];

invitados.forEach(function (invitado) {
  console.log("Invitación enviada a " + invitado);
});
