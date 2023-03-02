const dniInput = document.getElementById('dni');
const nombreInput = document.getElementById('nombre');
const fechaNacimientoInput = document.getElementById('fecha_nacimiento');
const emailInput = document.getElementById('email');
const webInput = document.getElementById('web');
const passwordInput = document.getElementById('password');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!dniInput.checkValidity()) {
    dniInput.setCustomValidity('Introduzca un DNI válido.');
    dniInput.reportValidity();
    return;
  } else {
    dniInput.setCustomValidity('');
  }
  
  if (!nombreInput.checkValidity()) {
    nombreInput.setCustomValidity('Introduzca un nombre válido.');
    nombreInput.reportValidity();
    return;
  } else {
    nombreInput.setCustomValidity('');
  }
  
  if (!fechaNacimientoInput.checkValidity()) {
    fechaNacimientoInput.setCustomValidity('Introduzca una fecha de nacimiento válida.');
    fechaNacimientoInput.reportValidity();
    return;
    } else {
        fechaNacimientoInput.setCustomValidity('');
    }
    
    let hoy = new Date();
    let fechaNacimiento = new Date(fechaNacimientoInput.value);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (meses < 0 || (meses == 0 && (hoy.getDate() < fechaNacimiento.getDate()))) {
      edad--;
    }
    
    if (edad < 18 || edad > 120) {
        fechaNacimientoInput.setCustomValidity('Introduzca una fecha de nacimiento válida (debe tener al menos 18 años y no puede tener más de 120 años).');
        fechaNacimientoInput.reportValidity();
        return;
    } else {
        fechaNacimientoInput.setCustomValidity('');
    }
    
    if (!emailInput.checkValidity()) {
        emailInput.setCustomValidity('Introduzca un email válido.');
        emailInput.reportValidity();
        return;
    } else {
        emailInput.setCustomValidity('');
    }
    
    if (!webInput.checkValidity()) {
        webInput.setCustomValidity('Introduzca una dirección web válida.');
        webInput.reportValidity();
        return;
    } else {
        webInput.setCustomValidity('');
    }
    
    if (!passwordInput.checkValidity()) {
        passwordInput.setCustomValidity('Introduzca una contraseña válida (debe tener entre 8 y 10 caracteres, al menos una letra minúscula, una letra mayúscula y un número).');
        passwordInput.reportValidity();
        return;
    } else {
        passwordInput.setCustomValidity('');
    }
    
    });
