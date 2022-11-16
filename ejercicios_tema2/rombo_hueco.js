'use strict'


let tamaño = 4;

function dibujaRombo( size ){
    let blanco=size-1;
    let asteriscos=1;
    
   
    let linea="";
    for(let z=0 ; z<blanco ; z++) linea = linea + " ";
    linea=linea+"*"
    console.log(linea);
    blanco--;
    

    for( let i=0 ; i<size ; i++ , asteriscos=asteriscos+2 ){
        let linea="";
        for(let z=0 ; z<blanco ; z++) linea = linea + " ";
        linea=linea+"*";
        for( let j=0; j<asteriscos ; j++){
            linea=linea+" ";
        }
        linea=linea+"*";
        console.log(linea);
        blanco--;
    }

    blanco=blanco+2;
    asteriscos=asteriscos-4;
    
    for( let i=size-1 ; i>0 ; i-- , asteriscos=asteriscos-2 ){
        let linea="";
        for(let z=0 ; z<blanco+1 ; z++) linea = linea + " ";
        linea=linea+"*";
        for( let j=0; j<asteriscos-2 ; j++){
            linea=linea+" ";
        }
        linea=linea+"*";
        console.log(linea);
        blanco++;
    }
}

dibujaRombo(4);