//10.Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
//debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
//con un ejemplo.
//a. Lista de colores favoritos.
//b. Información completa de un estudiante.
//c. Precios de diferentes camisetas.
//d. Descripción de un computador portátil.


// Lista de colores favoritos
// Se usa objecto porque respresenta una ola entidad
let ColoresFavoritos = ["Azul","Verde","Negro","Rojo"];

console.log("--- Colores Favoritos---");
for (let color  of ColoresFavoritos){
    console.log(color);
}

//La informacion completa del estudiante
// Se usa objecto porque son varios productos con propiedades
let Estudiante = {
    Nombre: "Carlos",
    Edad: 20,
    Carrera: "Ingeneria En sistema",
    Activo: true
};

console.log("\nInformación del estudiante:");
console.log("Nombre:", Estudiante.nombre);
console.log("Edad:", Estudiante.edad);
console.log("Carrera:", Estudiante.carrera);
console.log("Activo:", Estudiante.activo);


//Precios de diferentes camisas
//Seria un arreglo de objectos porque son varios productos con propiedades cada una
let Camisas = [
    {   
        modelo: "Deportivo",
        precio: 50000
    },
    {
        modelo: "Casual",
        precio: 100000
    },
    {
        modelo: "Elegante",
        precio: 300000
    }
]

//Se muestra con for..of
for (let camisa of Camisas){
    console.log("Modelo: ", camisa.modelo, "\nPrecio:", camisa.precio);
}


