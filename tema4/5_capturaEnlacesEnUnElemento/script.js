'use strict'


function manejarEnlace(href) {
    let saliendo = confirm(`¿Irse a ${href}?`);
    return saliendo;
}

contents.onclick = function(event) {
    let target = event.target.closest('a');

    if (target && contents.contains(target)) {
        if(!manejarEnlace(target.getAttribute('href'))) return false;
    }
};


// contents.onclick = function(event) {

//     function handleLink(href) {
//       let isLeaving = confirm(`¿Irse a ${href}?`);
//       if (!isLeaving) return false;
//     }

//     let target = event.target.closest('a');

//     if (target && contents.contains(target)) {
//       return handleLink(target.getAttribute('href'));
//     }
//   };
