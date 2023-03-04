const tablaUsuarios = document.getElementById('contenidoUsuarios');
const tablaPosts = document.getElementById('contenidoPosts');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let html = '';
        data.forEach(usuario => {
            let id = usuario.id;
            html += `
                <tr>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.website}</td>
                    <td><button class="btn btn-primary posts" onclick="verPosts(${usuario.id})" >Ver posts</button></td>
                </tr>
            `;
            tablaUsuarios.innerHTML = html;
        })
    });

function verPosts(idUsuario){
    fetch('https://jsonplaceholder.typicode.com/users/'+idUsuario+'/posts')
     .then(res => res.json())
     .then(data => {
         let html = '';
         data.forEach(post => {
            html += `
                <tr>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `;
            tablaPosts.innerHTML = html;

        })
     });
 }

