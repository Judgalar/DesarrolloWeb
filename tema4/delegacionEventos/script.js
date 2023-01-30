// mueve todo el texto dentro de <span>
    // esto ocupa exactamente lo necesario para el texto,
    for (let li of tree.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); // mueve el nodo texto dentro de span
      }
  
      // atrapa clics en el árbol entero
      tree.onclick = function(event) {
  
        if (event.target.tagName != 'SPAN') {
          return;
        }
  
        let childrenContainer = event.target.parentNode.querySelector('ul');
        if (!childrenContainer) return; // sin hijos
  
        childrenContainer.hidden = !childrenContainer.hidden;
      }