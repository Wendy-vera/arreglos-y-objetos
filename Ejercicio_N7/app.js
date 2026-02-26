// 7. Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
//arreglo usando for...of y muestre solo las edades mayores o iguales a 18.


//Se crea el arreglo de 5 personas
let edades = [13,22,16,40,18]

//Se hace el recorrido con un for...of
for (let edad of edades){
    if (edad >= 18){
        console.log(edad);
    }   
}

