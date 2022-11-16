'use strict';

let x = 10;
let y = 10;
let z = 30;


let menor="No hay", mediano="No hay", mayor="No hay";

if( x>=y && x>=z ) mayor = x;
else if( x<=y && x<=z ) menor = x;
else mediano = x;

if( y>=x && y>=z ) mayor = y;
else if( y<=x && y<=z ) menor = y;
else mediano = y;

if( z>=x && z>=y ) mayor = z;
else if( z<=x && z<=y ) menor = z;
else mediano = z;

console.log("Mayor: " , mayor);
console.log("Mediano: " , mediano);
console.log("Menor: " , menor);

