'use strict';

function generarRandom() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    let result = "";
      
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
      
  
    return result;
  }
  let letra="";
  let respuesta="";
  letra=generarRandom();

  alert(letra);
  respuesta=prompt('Ingrese palabra');



  letra = letra.charCodeAt(0);
  respuesta = respuesta.charCodeAt(0);
  
  if( respuesta == letra  || respuesta == letra+32   ) alert('Has ganado');
  else alert('Has perdido');
  