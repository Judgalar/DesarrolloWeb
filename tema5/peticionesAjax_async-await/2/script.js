// Función para obtener la lista de usuarios
async function getUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await respuesta.json()

    let salida = '<h2>Lista de usuarios</h2>';
    usuarios.forEach(user => {
        salida += `
        <ul>
            <li>Nombre: ${user.name}</li>
            <li>Usuario: ${user.username}</li>
            <li>Sitio web: ${user.website}</li>
            <button onclick="getTareas(${user.id})">Ver tareas</button>
        </ul>
        `;
    });
    document.getElementById('App').innerHTML = salida;

}

// Función para obtener las tareas de un usuario
async function getTareas(userId) {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    const tareas = await respuesta.json();

    let salida = '<h2>Lista de tareas</h2>';
    let pendientes = [];
    let completadas = [];

    tareas.forEach(tarea => {
        if (tarea.completed) {
        completadas.push(tarea);
        } else {
        pendientes.push(tarea);
        }
    });

    salida += '<h3>Tareas pendientes</h3>';
    pendientes.forEach(tarea => {
        salida += `
        <ul>
            <li>${tarea.title}</li>
        </ul>
        `;
    });

    salida += '<h3>Tareas completadas</h3>';
    completadas.forEach(tarea => {
        salida += `
        <ul>
            <li>${tarea.title}</li>
        </ul>
        `;
    });

    salida += '<button onclick="getUsuarios()">Volver a la lista de usuarios</button>';
    document.getElementById('App').innerHTML = salida;
 
}

window.onload = getUsuarios;