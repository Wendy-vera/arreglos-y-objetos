//Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor, número de páginas y género. 
// Luego imprima un mensaje descriptivo usando estas propiedades, por ejemplo:
// "El libro '___' del autor ___ pertenece al género ___."

const libro = {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    paginas: 294,
    idioma: "ingles",
    genero: "Ficción gótica, Ciencia ficción, Terror"
};

console.log(
    `\nEl libro '${libro.titulo}' de la autora ${libro.autor} pertenece al género ${libro.genero}. Su idioma original es ${libro.idioma} y contiene ${libro.paginas} paginas.`
);
