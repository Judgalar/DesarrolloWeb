'use strict';

const unica = (array) => {
    let resultado = [];
    for( const key in array){
        if( ! resultado.includes( array[key] ) ) resultado.push(array[key]);
    }
    return resultado;
}


const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];
const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]