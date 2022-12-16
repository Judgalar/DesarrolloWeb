'use strict'

function marco( alto , ancho ){
    let matriz = [];
    for( let i = 0 ; i<alto ; i++){ //Filas
        matriz[i] = []
        for( let j = 0 ; j<ancho ; j++){  // Columnas
            if ( i==0 || j==0 || i==alto-1 || j==ancho-1)  matriz[i][j] = 1;
            else  matriz[i][j] = 0;
        }

    }
    return matriz;
}

/* 
const a = marco(3,5);
console.log(a);
*/

let encuentraIndices = ( array , valor ) => {
    let resultado = [];
    for( const key in array){
        if( array[key] == valor )  resultado.push(key);
    }
    return resultado;
    
}

/*
const a = [ 12, 2, 4, 12, 0, -1, 7, 12]; 
const indices12 = encuentraIndices(a, 12);
console.log(indices12); // debe mostrar un array con [0, 3, 7]
*/

function miSplice (array, posicion, ElementosAEliminar){
    while ( ElementosAEliminar > 0){
        let auxiliar=[];
        for( let i = array.length -1 ; i>=posicion ; i--){
            auxiliar.push( array.pop() )
        }
        auxiliar.pop();
        for( let i = auxiliar.length-1 ; i>=0 ; i--) array.push( auxiliar.pop() )
        ElementosAEliminar--;
    }
}

const a = [7, 9, 14, 18, 14, 23, 1];

miSplice(a, 2, 3); 

console.log(a); // Muestra [7, 9, 23, 1];