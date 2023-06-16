document.body.addEventListener('click', function (event) {
    // Verificar si el elemento es un submit o un button
    if (event.target.matches('[type="submit"], [type="button"]')) {
        event.preventDefault();

        // Obtener los campos del formulario
        let campos = Array.from(document.querySelectorAll('input, textarea, select, datalist'));

        let datosUsuario = campos.map(function (element) {
            campoNombre = element.getAttribute('name');
            if (campoNombre == null) campoNombre = element.getAttribute('id');
            if (campoNombre == null) campoNombre = element.getAttribute('type');
            campoValor = element.value;
            return campoNombre + ": " + campoValor;
        }).join("<br>");

        // Mostrar la cadena en el div con id="valores"
        document.getElementById("valores").innerHTML = datosUsuario;
    }
});


