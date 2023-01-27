'use strict'

grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // si TH, entonces ordena
  // cellIndex es el número de th:
  //   0 para la primera columna
  //   1 para la segunda columna, etc.
  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) compara dos filas, necesario para ordenar
  let compare;

  switch (type) {
    case 'number':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  // sort
  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}