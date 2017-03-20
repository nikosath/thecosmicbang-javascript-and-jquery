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
      return 'Incompatible matrices';
    }

    var sum = [];
    m1.forEach(function (column, x) {
      sum[x] = [];
      column.forEach(function (item, y) {
        sum[x][y] = m1[x][y] + m2[x][y];
      });
    });
    return sum;
  }

  // Output for index.html
  var ex2 = {};

  ex2.getOutput = function () {
    var output = '<p>Ex2' +
      '<br>matrix1: ' + matrix1 +
      '<br>matrix2: ' + matrix2 +
      '<br>matrix3: ' + matrix3 +
      '<br>matrix1 + matrix2: ' + addMatrices(matrix1, matrix2) +
      '<br>matrix1 + matrix3: ' + addMatrices(matrix1, matrix3);

    return output;
  };

  return ex2;
}
