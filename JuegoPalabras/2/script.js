import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";


// Elimina los diacríticos de un texto excepto si es una "ñ" (ES6)
//
function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}

const diccionarioSinTildes = diccionario.map(eliminarDiacriticosEs);

const diccionarioSet = new Set(diccionarioSinTildes);

diccionarioSet.has('palabra'); // Devolverá true si 'palabra' está en el diccionarioSet, eficiencia O(1)

let puntos = 0;
let letra = "";
let listaPalabras = [];


//CRONOMETRO
let totalTime = 10;
function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    
    if(totalTime === 0){
        document.getElementById('formulario').innerHTML = "<h1 id='derrota'>Se acabó</h1>";
        document.getElementById('puntos').innerHTML = "Puntuación: " + puntos;
        document.getElementById('listaPalabras').innerHTML = "Lista de palabras: " + listaPalabras;
        document.getElementById('reiniciar').innerHTML = "<btn type='button' class='btn btn-warning' onclick=location.reload() >Reiniciar</btn>"
    }
    
    if(totalTime>0){
        totalTime-=1;
        setTimeout(updateClock,1000);
    }
}
window.onload = updateClock();


function letraAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz'; 
    letra =  caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return letra;
}

letra = letraAleatoria();

document.getElementById('letra').innerHTML = "<h3>Escribe una letra que empiece por: " + letra +"</h3>";

function comprobarPalabras(palabraBusqueda) {

    if ( palabraBusqueda[0] === letra ) //si la primera letra de la palabra es igual a la letra aleatoria
    {
        if( listaPalabras.includes(palabraBusqueda) ) alert('Palabra introducida anteriormente');
        else if( diccionarioSet.has(palabraBusqueda)  ){
            alert('ok');
            puntos = puntos + sumarPuntos(palabraBusqueda);
            listaPalabras.push(palabraBusqueda);
            letra = letraAleatoria();
            document.getElementById('letra').innerHTML = "<h3>Escribe una letra que empiece por: " + letra +"</h3>";
            totalTime = 10;
        }
        else alert("No está en el diccionario");

        
    }
    else alert('No válida');
}


document.getElementById("formulario").addEventListener("submit", (evento) =>//Se ejcuta cada vez que se envia el input
 {
   evento.preventDefault();
    console.log(evento);
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