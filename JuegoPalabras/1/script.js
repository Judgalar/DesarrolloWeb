'use strict'

const tiempoRestante = setInterval(()=>{
    document.getElementById('tiempo').innerHTML = tiempo;
    if(tiempo <= 0){
        document.getElementById('formulario').innerHTML = "<h1 id='derrota'>Se acabó</h1>";
        document.getElementById('puntos').innerHTML = "Puntuación: " + acertadas;
        document.getElementById('listaPalabras').style = 'display: flex';
        listaPalabras.forEach(element=>{
            document.getElementById('listaPalabras').innerHTML += '<li>'+element+'</li>';
        })
        clearTimeout(tiempoRestante);
    }
    if(tiempo <= 5) document.getElementById('tiempo').style = 'color: goldenrod;'
    if(tiempo <= 2) document.getElementById('tiempo').style = 'color: red;'
    if(tiempo>0) tiempo--;
},1000);

function letraAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    letra =  caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return letra;
}

function comprobarPalabras(palabraBusqueda) {
    if ( palabraBusqueda[0] === letra || palabraBusqueda[0] === letra.toLowerCase() ){
        acertadas++;
        mensaje.style = 'border-color: green';
        listaPalabras.push(palabraBusqueda);
        letra = letraAleatoria();
        document.getElementById('letra').innerHTML = "<h3>Escribe una palabra que empiece por: " + letra +"</h3>";
        tiempo = 10;
    }
    else    mensaje.style = 'border-color: red';
}

let tiempo = 10;
let acertadas = 0;
let listaPalabras = [];
let letra = '';
letra = letraAleatoria();

document.getElementById('letra').innerHTML = "<h3>Escribe una letra que empiece por: " + letra +"</h3>";

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    let palabraBusqueda = document.getElementById("mensaje").value;
    comprobarPalabras(palabraBusqueda);
    document.getElementById("mensaje").value="";
});

tiempoRestante();