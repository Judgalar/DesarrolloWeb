const tabla = document.getElementById('tabla');

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
                contenido += `
                <tr>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.website}</td>
                    <td><button class="btn btn-secondary" onclick="verPosts(${usuario.id},'${usuario.username}')" >Ver posts</button></td>
                </tr>
            `;
            cuerpo.innerHTML = contenido;
        })
    });
}

function verPosts(idUsuario,username){
    fetch('https://jsonplaceholder.typicode.com/users/'+idUsuario+'/posts')
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
                    <td><button class="btn btn-secondary" onclick="verPost(${post.id},'${username}')" >Ver post</button></td>
                </tr>
            `;
            cuerpo.innerHTML = contenido;
        })
    });
}

function verPost(idPost,username){
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => res.json())
    .then(post => {
        let html = `
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">PostTitle</th>
                    <th scope="col">PostBody</th>
                    <th scope="col"><button class="btn btn-primary" onclick="verUsuarios()" >Volver</button></th>
                </tr>
            </thead>
            <tbody id="cuerpo"></tbody>
        `;
        tabla.innerHTML = html;
        let contenido = `
                <tr>
                    <td>${username}</td>
                    <td><h5>${post.title}</h5></td>
                    <td>${post.body}</td>
                </tr>
            `;
        cuerpo.innerHTML = contenido;

        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
        .then(res => res.json())
        .then(comentarios => {
            let html = '<br><h1 style="color:green">Comentarios</h1><br><br>';
            comentarios.forEach( comentario => {
                html += `<h3>${comentario.name}</h3><br><p>${comentario.body}</p>`
            })
            cuerpo.innerHTML += html;
        })
    });

}

verUsuarios();