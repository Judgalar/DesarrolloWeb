'use strict'

const tabla = document.getElementById('gridDatos');
const buscar = document.createElement('input');
buscar.setAttribute('placeholder','Introduce tu búsqueda');
buscar.setAttribute('type','text');
tabla.parentElement.prepend(buscar);

buscar.addEventListener('input', evento=>{
    //Pon aquí tu código
    
    let filas = document.querySelectorAll('#gridDatos tr');

    for(let i=0;i<filas.length;i++){
        let celdas = filas[i].querySelectorAll('td');
        let coincidencias = 0;

        for(let j=0;j<celdas.length;j++){
            if(  celdas[j].textContent.toLowerCase().includes( buscar.value.toLowerCase() )  )    coincidencias++;
        }

        if(coincidencias > 0) filas[i].style.display = '';
        else filas[i].style.display = 'none';
            
    }
});

