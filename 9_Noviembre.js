'use strict';


const keys = (objeto) => {
    let cadena = "";
    for(const llave in objeto) { 
        cadena = cadena + llave + ", "
    }
    return cadena;
}


const miObjeto = {
    nombre: "Miguel",
    lugar: 'En un lugar de la Mancha',
    nombreCompleto: function () {
            return 'Miguel de Cervantes Saavedra';
    }
};
const propiedades = keys(miObjeto);
console.log(propiedades); // deberá mostrar el array: ["nombre", "lugar"];
