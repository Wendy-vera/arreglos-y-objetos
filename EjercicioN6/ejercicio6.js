//Describiendo un objeto personal: Cree un objeto que represente algo que lleve consigo todos los días
// (ej. audífonos, libreta, termo). Debe tener al menos cuatro propiedades. 
// Recorra sus claves y valores usando un ciclo for...of sobre Object.entries().

const lapicero = {
    marca: "Ofi-esco",
    color: "Rojo",
    tipo: "Bolígrafo",
    punta: "0.7mm"
};

for (const [clave, valor] of Object.entries(lapicero)) {
    console.log(`${clave}: ${valor}`);
}
