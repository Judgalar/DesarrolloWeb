const coordenadas = document.getElementById('coordenadas');
const historial = document.getElementById('historial');
const iniciarBtn = document.getElementById('iniciarBtn');
const detenerBtn = document.getElementById('detenerBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
let watchId = null;

function mostrarPosicion(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const timestamp = new Date(position.timestamp).toLocaleString();

    const itemhistorial = document.createElement('div');
    
    coordenadas.innerHTML = `Latitud: ${latitud}, Longitud: ${longitud}, Hora: ${timestamp}`;
    itemhistorial.innerText = `${latitud}, ${longitud}, ${timestamp}`;
    historial.appendChild(itemhistorial);
    localStorage.setItem('historialGeolocalizacion', historial.innerHTML);
}

function iniciarGeolocalizacion() {
    watchId = navigator.geolocation.watchPosition(mostrarPosicion);
    iniciarBtn.disabled = true;
    detenerBtn.disabled = false;
}

function detenerGeolocalizacion() {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    iniciarBtn.disabled = false;
    detenerBtn.disabled = true;
}

function limpiarHistorial() {
    historial.innerHTML = '';
    localStorage.removeItem('historialGeolocalizacion');
}

iniciarBtn.addEventListener('click', iniciarGeolocalizacion);
detenerBtn.addEventListener('click', detenerGeolocalizacion);
limpiarBtn.addEventListener('click', limpiarHistorial);

// Cargar historial desde localStorage
if (localStorage.getItem('historialGeolocalizacion')) {
    historial.innerHTML = localStorage.getItem('historialGeolocalizacion');
}