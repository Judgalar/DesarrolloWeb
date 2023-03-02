
const botones = document.querySelectorAll(' [type="Submit"],[type="button"]');

botones.forEach( boton =>
    boton.addEventListener('click', function(event){
        event.preventDefault();
    
        // Obtener los campos del formulario
        let campos = Array.from(document.querySelectorAll('input, textarea, select,datalist'));
    
        // Crear una cadena con los nombres y valores
        let datosUsuario = "";
    
        campos.forEach(function (element){
            campoNombre = element.getAttribute('name');
            if(campoNombre == null) campoNombre = element.getAttribute('id');
            if(campoNombre == null) campoNombre = element.getAttribute('type');
            campoValor = element.value;
            datosUsuario += campoNombre + ": " + campoValor + "<br>";
        });
    
        // Mostrar la cadena en el div con id="valores"
        document.getElementById("valores").innerHTML = datosUsuario;
    })
);




