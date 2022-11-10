'use strict';

const unica = (array) => {
    let resultado = [];
    for( const elemento of array){
        if( ! resultado.includes( elemento ) ) resultado.push(elemento);
    }
    return resultado;
}


const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];
const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]