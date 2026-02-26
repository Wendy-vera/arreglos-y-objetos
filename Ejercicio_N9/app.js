//9. Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
//tres objetos. Cada objeto debe representar un producto con propiedades como
//nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
//cada producto.

//Se crea el arreglo con 3 objectos
let productos = [
    {   
        nombre: "Laptop",
        precio:2500000,
        disponiblidad: true
    },  
    {
        nombre: "Mouse",
        precio:30000,
        disponiblidad: true
    },
    {
        nombre: "Teclado",
        precio:120000,
        disponiblidad: false
    }
];

//Se hacer el bucle for of para mostrar solo el nombre de cada productos
for(let producto of productos){
    console.log(producto.nombre);
}
