import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";


// Elimina los diacríticos de un texto excepto si es una "ñ" (ES6)
//
function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}

const diccionarioSinTildes = diccionario.map(eliminarDiacriticosEs);

const diccionarioSet = new Set(diccionarioSinTildes);

diccionarioSet.has('palabra'); // Devolverá true si 'palabra' está en el diccionarioSet, eficiencia O(1)