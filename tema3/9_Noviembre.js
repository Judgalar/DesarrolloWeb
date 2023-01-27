'use strict';


const keys = (objeto) => {
    let array = [];
    for(const llave in objeto) { 
        if(typeof (objeto[llave])!='function'){
            array.push(llave);
        }
    }
    return array;
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
