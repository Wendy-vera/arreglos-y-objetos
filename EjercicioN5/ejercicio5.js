// Lista de tareas: Cree un arreglo vacío llamado tareas. 
// Agregue tres actividades utilizando push(). 
// Luego elimine la última utilizando pop(). 
// Muestre el resultado.

let tareas = [];

tareas.push("Estudiar JavaScript");
tareas.push("Hacer ejercicio");
tareas.push("Leer un libro");

console.log("Tareas después del push:", tareas);

tareas.pop();

console.log("Tareas después del pop:", tareas);