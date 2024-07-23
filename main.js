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

let numeros = [23, 32, 88, 99, 40];

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
