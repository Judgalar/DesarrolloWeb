import { posts } from "./array.js"

const lista = document.getElementById('container')
const fragment = document.createDocumentFragment();

for ( const element of posts ){

    const item = document.createElement('LI');
    const titulo = document.createElement('H1');
    const cuerpo = document.createElement('P');

    titulo.textContent = element.title;
    cuerpo.textContent = element.body;

    item.appendChild(titulo);
    item.appendChild(cuerpo);

    fragment.appendChild(item);
};

lista.appendChild(fragment)