function ex3() {
  'use strict';

  var array = [5, 8, 2, 15, 32, 3, 46];
  // var sum = 0;

  function getSum(total, elem) {
    return total + sum;
  }

  function getConvertedSum1(array) {
    array = array.map(function (elem) {
      return elem * 2 + 15;
    });

    array.reduce(function (total, elem) {
      return total + elem;
    }, 0);

  }

  var ex3 = {};
  ex3.getOutput = function () {
    return '<p>Ex3' +
    '<br>array:' + array +
    '<br>getConvertedSum1:' + array +
    '<br>getConvertedSum2:' + array;
  };

}
