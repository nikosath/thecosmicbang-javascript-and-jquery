function ex2() {
  'use strict';

  var matrix1 = [
    [1, 8],
    [3, 5]
  ];

  var matrix2 = [
    [2, 2],
    [4, 5]
  ];

  var matrix3 = [
    [2, 2],
    [4, 5],
    [4, 2]
  ];

  function addMatrices(m1, m2) {
    // Check for incompatible matrices
    if (m1.length !== m2.length ||
      m1[0].length !== m2[0].length) {
      return false;
    }

    var result = [];
    m1.forEach(function (column, x) {
      result[x] = [];
      column.forEach(function (item, y) {
        result[x][y] = m1[x][y] + m2[x][y];
      });
    });
    return result;
  }

  // Output for index.html
  var ex2 = {};
  ex2.output = function () {
    console.log('demo2');
    console.log(addMatrices(matrix1, matrix2));
    console.log(addMatrices(matrix1, matrix3));

    return '<br>matrix1: ' + matrix1 +
      '<br>matrix2: ' + matrix2 +
      '<br>matrix3: ' + matrix3 +
      '<br>matrix1 + matrix2: ' + addMatrices(matrix1, matrix2) +
      '<br>matrix1 + matrix3: ' + addMatrices(matrix1, matrix3);

  };
  return ex2;
}
