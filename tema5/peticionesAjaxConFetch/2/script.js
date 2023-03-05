const tabla = document.getElementById('tabla');
let usuarios = [];
function verUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let html = `
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody id="cuerpo"></tbody>
        `;
        tabla.innerHTML = html;
        let contenido = '';
        data.forEach(usuario => {
                usuarios.push(usuario);
                contenido += `
                <tr>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.website}</td>
                    <td><button class="btn btn-secondary" onclick="verTareas(${usuario.id})" >Ver tareas</button></td>
                </tr>
            `;
            cuerpo.innerHTML = contenido;
        })
    });
}

function verTareas(idUsuario){
    fetch('https://jsonplaceholder.typicode.com/users/'+idUsuario+'/todos')
    .then(res => res.json())
    .then(data => {
        let html = `
            <thead>
                <tr>
                <th scope="col">PostTitle</th>
                <th scope="col"><button class="btn btn-primary" onclick="verUsuarios()" >Volver</button></th>
                </tr>
            </thead>
            <tbody id="cuerpo"></tbody>
        `;
        tabla.innerHTML = html;
        let contenido = '';
        data.forEach(post => {
            contenido += `
                <tr>
                    <td>${post.title}</td>
                    <td><button class="btn btn-secondary" onclick="verPost(${post.id})" >Ver post</button></td>
                </tr>
            `;
            cuerpo.innerHTML = contenido;
        })
    });
}


verUsuarios();