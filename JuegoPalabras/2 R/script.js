import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";


// Elimina los diacríticos de un texto excepto si es una "ñ" (ES6)
//
function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}

const tiempoRestante = setInterval(()=>{
    document.getElementById('tiempo').innerHTML = tiempo;
    if(tiempo == 0){
        document.getElementById('formulario').innerHTML = "<h1>Se acabó</h1>";
        document.getElementById('puntos').innerHTML = "Puntuación: " + puntos;
        document.getElementById('palabrasAcertadas').style = 'display: flex';
        listaPalabras.forEach(element=>{
            document.getElementById('palabrasAcertadas').innerHTML += '<li>'+element+'</li>';
        })
        clearTimeout(tiempoRestante);
    }
    if(tiempo > 5) document.getElementById('tiempo').style = 'color: blue;'
    if(tiempo <= 5) document.getElementById('tiempo').style = 'color: goldenrod;'
    if(tiempo <= 2) document.getElementById('tiempo').style = 'color: red;'
    if(tiempo>0) tiempo--;
},1000);

function letraAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz'; 
    letra =  caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return letra;
}

function comprobarPalabras(palabraBusqueda) {

    if ( palabraBusqueda[0] === letra ) //si la primera letra de la palabra es igual a la letra aleatoria
    {
        if( listaPalabras.includes(palabraBusqueda) ) alert('Palabra introducida anteriormente');
        else if( diccionarioSet.has(palabraBusqueda)  ){
            puntos = puntos + sumarPuntos(palabraBusqueda);
            listaPalabras.push(palabraBusqueda);
            letra = letraAleatoria();
            document.getElementById('letra').innerHTML =  letraAleatoria() ;
            tiempo = 10;
            mensaje.style = 'border-color: green';
        }
        else mensaje.style = 'border-color: red';

        
    }
    else alert('No válida');
}

document.getElementById("formulario").addEventListener("submit", (event) =>//Se ejecuta cada vez que se envia el input
 {
   event.preventDefault();
    let palabraBusqueda = document.getElementById("mensaje").value;//metemos la palabra en una variable
    palabraBusqueda = palabraBusqueda.toLowerCase();
    comprobarPalabras(palabraBusqueda);
    document.getElementById("mensaje").value="";//borramos la palabra
});

function sumarPuntos(palabraBusqueda){
    let resul = 0;
    let p = palabraBusqueda[0];
    
    //Puntuación por letra inicial
    if ( p == 'a' ||  p == 'c'||  p == 'd' ||  p == 'e') resul = 1;
    else if ( p == 'm' || p == 'p'|| p == 'r' || p == 's' || p == 't') resul = 2;
    else if ( p == 'b' || p == 'f'|| p == 'g' || p == 'h' || p == 'i' || p == 'v') resul = 3;
    else if ( p == 'j' || p == 'l'|| p == 'n' || p == 'o' || p == 'z' ) resul = 4;
    else if ( p == 'k' || p == 'ñ'|| p == 'g' || p == 'q' || p == 'u' || p == 'w' || p == 'y') resul = 5;
    
    //Puntuación por longitud de palabra
    let largo = palabraBusqueda.length;
    if ( largo == 8 || largo == 9 || largo == 10 || largo == 11 || largo == 12 ) resul ++;
    else if ( largo == 6 || largo == 7 || largo == 13 || largo == 14 ) resul = resul + 2;
    else if ( largo == 5 || largo == 15 ) resul = resul + 3;
    else if ( largo == 4 || largo == 16 || largo == 17 ) resul = resul + 4;
    else if ( largo == 1 || largo == 2 || largo == 3 || largo == 18 || largo > 18 ) resul = resul + 5;

    return resul;
}

const diccionarioSinTildes = diccionario.map(eliminarDiacriticosEs);
const diccionarioSet = new Set(diccionarioSinTildes);
let puntos = 0;
let listaPalabras = [];
let tiempo = 10;
let letra = "";
letra = letraAleatoria();
document.getElementById('letra').innerHTML =  letra ;

