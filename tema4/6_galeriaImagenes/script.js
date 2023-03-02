const miniaturas = document.getElementById('thumbs');

miniaturas.addEventListener('click', (event) => {
  let miniatura = event.target.closest('a');

  if (!miniatura) return false;
  mostrarImagen(miniatura.href, miniatura.title);
  event.preventDefault();
})

function mostrarImagen(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
