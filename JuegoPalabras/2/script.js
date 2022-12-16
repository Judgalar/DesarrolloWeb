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

let acertadas = 0;
let letra = "";
let listaPalabras = [];


//CRONOMETRO
let totalTime = 10;
function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    
    if(totalTime === 0){
        document.getElementById('formulario').innerHTML = "<h1 id='derrota'>Se acabó</h1>";
        document.getElementById('puntos').innerHTML = "Puntuación: " + acertadas;
        document.getElementById('listaPalabras').innerHTML = "Lista de palabras: " + listaPalabras;
    }
    
    if(totalTime>0){
        totalTime-=1;
        setTimeout(updateClock,1000);
    }
}
window.onload = updateClock();


function letraAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    letra =  caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return letra;
}

letra = letraAleatoria();

document.getElementById('letra').innerHTML = "<h3>Escribe una letra que empiece por: " + letra +"</h3>";

function comprobarPalabras(palabraBusqueda) {

    if ( palabraBusqueda[0] === letra || palabraBusqueda[0] === letra.toLowerCase() ) //si la primera letra de la palabra es igual a la letra aleatoria
    {
        if( listaPalabras.includes(palabraBusqueda) ) alert('Palabra introducida anteriormente');
        else if( diccionarioSet.has(palabraBusqueda)  ){
            alert('ok');
            acertadas++;
            listaPalabras.push(palabraBusqueda);
            letra = letraAleatoria();
            document.getElementById('letra').innerHTML = "<h3>Escribe una letra que empiece por: " + letra +"</h3>";
            totalTime = 10;
        }
        else alert("No está en el diccionario")

        
    }
    else alert('No válida')
}


document.getElementById("formulario").addEventListener("submit", (evento) =>//esto se ejcuta cada vez que se envia la informacion
 {
   evento.preventDefault();
    console.log(evento);
    let palabraBusqueda = document.getElementById("mensaje").value;//metemos la palabra en una variable
    comprobarPalabras(palabraBusqueda);
    document.getElementById("mensaje").value="";//borramos la palabra
});