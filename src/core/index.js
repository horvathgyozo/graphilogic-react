// var abra = [
//   [0, 1, 1, 0, 0, 1, 0, 1],
//   [1, 1, 1, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1],
// ];

// var abra = [
//   [0, 1],
//   [1, 0],
// ];

export function abrabolMatrix(abra) {
  var m = [];
  for (var i = 0; i < abra.length; i++) {
    m[i] = [];
    for (var j = 0; j < abra[i].length; j++) {
      m[i][j] = 0;
    }
  }
  return m;
}

// console.log(abrabolMatrix(abra));

export function szigetkezdet(tomb, j) {
  return (j === 0 && tomb[j] === 1) ||
    (j > 0 && tomb[j] === 1 && tomb[j - 1] === 0);
}

export function szigetveg(tomb, j) {
  var n = tomb.length;
  return (j === n - 1 && tomb[j] === 1) ||
    (j < n - 1 && tomb[j] === 1 && tomb[j + 1] === 0);
}

export function balszamok(matrix) {
  var balszamtomb = [];
  var sorokdb = matrix.length;
  var oszlopdb = matrix[0].length;
  var kezdet;
  //sorok előtti számok		
  for (var i = 0; i < sorokdb; i++) {
    balszamtomb[i] = [];
    for (var j = 0; j < oszlopdb; j++) {
      if (szigetkezdet(matrix[i], j)) //j-edik oszlopban kezdődik egy sziget
      {
        kezdet = j;
      }
      if (szigetveg(matrix[i], j)) // j-edik helyen van vége egy szigetnek, akkor ebből, s kezdetből ki tudjuk számolni a hosszát, ez kerül baloldalra
      {
        balszamtomb[i].push(j - kezdet + 1);
      }
    }
  }
  return balszamtomb;
}

// console.log(balszamok(matrix));

export function fentszamok(matrix) {
  var fentszamtomb = [];
  var sorokdb = matrix.length;
  var oszlopdb = matrix[0].length;
  var kezdet;

  for (var j = 0; j < oszlopdb; j++) {
    fentszamtomb[j] = [];
    var tomb = matrix.map(function (sor) {
      return sor[j];
    });
    for (var i = 0; i < sorokdb; i++) {
      if (szigetkezdet(tomb, i)) //j-edik oszlopban kezdődik egy sziget
      {
        kezdet = i;
      }
      if (szigetveg(tomb, i)) // j-edik helyen van vége egy szigetnek, akkor ebből, s kezdetből ki tudjuk számolni a hosszát, ez kerül fentoldalra
      {
        fentszamtomb[j].push(i - kezdet + 1);
      }
    }
  }
  return fentszamtomb;
}

// console.log(fentszamok(matrix));



export function _matrixOsszehasonlitas(m1, m2) {
  var i = 0;
  var sordb = m1.length;
  var oszlopdb = m1[0].length;
  
  var jo = true;
  while (jo && i < sordb) {
    var j = 0;
    while ((j < oszlopdb) && (m1[i][j] === m2[i][j])) {
      j++;
    }
    jo = j >= oszlopdb;
    i++;
  }
  return jo;
}

export function matrixOsszehasonlitas(m1, m2) {
  for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[i].length; j++) {
      if ((m1[i][j] === 1 && m2[i][j] !== 1) || (m1[i][j] !== 1 && m2[i][j] === 1)) {
        return false;
      }
    }
  } 
  return true;
}

// console.log(matrixOsszehasonlitas(abra, [
//   [0, 1, 1, 0, 0, 1, 0, 1],
//   [1, 1, 1, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1],
// ]));

export function valtoztat(matrix, i, j) {
  matrix[i][j] = (matrix[i][j] + 1) % 3;
  return matrix;
}



// var matrix = abrabolMatrix(abra);
// matrix = valtoztat(matrix, 0, 0);
// matrix = valtoztat(matrix, 0, 0);
// matrix = valtoztat(matrix, 0, 1);
// matrix = valtoztat(matrix, 1, 0);
// matrix = valtoztat(matrix, 1, 1);
// matrix = valtoztat(matrix, 1, 1);
// console.log(matrixOsszehasonlitas(abra, matrix));

