'use strict';

let tamaño = 4;

function dibujaRombo( size ){
    let blanco=size-1;
    let asteriscos=1;
    for( let i=0 ; i<size ; i++ , asteriscos=asteriscos+2 ){
        let linea="";
        for(let z=0 ; z<blanco ; z++) linea = linea + " ";
        for( let j=0; j<asteriscos ; j++){
            linea=linea+"*";
        }
        console.log(linea);
        blanco--;
    }

    blanco=blanco+2;
    asteriscos=asteriscos-4;

    for( let i=0 ; i<size ; i++ , asteriscos=asteriscos-2 ){
        let linea="";
        for(let z=0 ; z<blanco ; z++) linea = linea + " ";
        for( let j=0; j<asteriscos ; j++){
            linea=linea+"*";
        }
        console.log(linea);
        blanco++;
    }
}

dibujaRombo(4);