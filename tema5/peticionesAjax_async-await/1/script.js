const contenedor = document.getElementById('contenedor');

async function verUsuarios(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    
    let contenido = '';
    usuarios.forEach(usuario => {
            contenido += `
            <div class="elemento">
                <ul>
                    <li><b>Nombre:</b> ${usuario.name}</li>
                    <li><b>Usuario:</b> ${usuario.username}</li>
                    <li><b>Website:</b> ${usuario.website}</li>
                </ul>
                <button class="btn btn-secondary" onclick="verPosts(${usuario.id},'${usuario.username}')" >Ver posts</button>
            </div>
        `;
    })
    botonera.innerHTML = '';
    postCont.innerHTML = '';
    contenedor.innerHTML = contenido;
    
}

async function verPosts(idUsuario,username){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/'+idUsuario+'/posts')
    const posts = await respuesta.json();
    
    let contenido = '';
    posts.forEach(post => {
        contenido += `
            <div class="elemento">
                <h3>${post.title}</h3>
                <button class="btn btn-secondary" onclick="verPost(${post.id},'${username}')" >Ver post</button>
            </div>
        `;
    })
    botonera.innerHTML += '<button style="padding: 30px" onclick="verUsuarios()">Ver Usuarios</button>'
    contenedor.innerHTML = contenido;
}

async function verPost(idPost,username){
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    const post = await respuesta.json();

    let contenido = `
        <ul style="background-color: white; padding: 20px">
            <li><h2>${username}</h2></li>
            <li><h3>${post.title}</h3></li>
            <br>
            <li>${post.body}</li>
        </ul>
    `;
    contenedor.innerHTML='';
    postCont.innerHTML = contenido;

    const rComentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
    const comentarios = await rComentarios.json();

    let html = '';
    comentarios.forEach( comentario => {
        html += `
        <div class="elemento">
            <h3>
                ${comentario.name}
            </h3>
            <br>
            <p>
                ${comentario.body}
            </p>
        </div>`
        
    })
    contenedor.innerHTML = html;
 }

verUsuarios();