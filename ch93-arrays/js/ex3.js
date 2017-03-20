function ex3() {
  'use strict';

  var array = [5, 8, 2, 15, 32, 3, 46];

  function getConvertedSum1(array) {
    return array.map(function (elem) {
      return elem * 2 + 15;
    }).reduce(function (total, elem) {
      return total + elem;
    }, 0);
  }

  function getConvertedSum2(array) {
    var sum = 0;
    array.forEach(function (elem) {
      sum += elem * 2 + 15;
    });
    return sum;
  }

  // Output for index.html
  var ex3 = {};
  ex3.getOutput = function () {
    return '<p>Ex3' +
      '<br>array: ' + array +
      '<br>getConvertedSum1: ' + getConvertedSum1(array) +
      '<br>getConvertedSum2: ' + getConvertedSum2(array);
  };

  return ex3;
}
