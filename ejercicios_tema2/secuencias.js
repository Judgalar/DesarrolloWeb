'use strict'

console.log("<--1-->");
for( let i=1 ; i<=10 ; i++ ){
    console.log(i);
}

console.log("<--2-->");
for( let i=5 ; i<=15 ; i++ ){
    console.log(i);
}

console.log("<--3-->");
for( let i=15 ; i>=1 ; i-- ){
    console.log(i);
}

console.log("<--4-->");
for( let i=11 ; i<=51 ; i=i+2 ){
    console.log(i);
}

console.log("<--5-->");
for( let i=50 ; i>=0 ; i=i-3 ){
    console.log(i);
}

console.log("<--6-->");
for( let i=-6 ; i<=3 ; i++ ){
    console.log(i);
}

console.log("<--7-->");
for( let i=97 ; i<=103 ; i++ ){
    console.log(String.fromCharCode(i));
}

console.log("<--8-->");
let palabra = "mensaje";
for( let i= 0 ; i<palabra.length ; i++){
    console.log(palabra[i]);
}