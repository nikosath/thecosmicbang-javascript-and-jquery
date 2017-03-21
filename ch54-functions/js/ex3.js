function ex3() {
  'use strict';

  var n1 = 0;
  var n2 = 4;

  function getFactorialRecursively(n) {
    if (n >= 0) {
      return n <= 1 ? 1 : n * getFactorialRecursively(n - 1);
    }
  }

  // Output for index.html
  var ex3 = {};
  ex3.getHtmlOutput = function () {
    return '<p>Ex3' +
      '<br>n1: ' + n1 +
      '<br>getFactorialRecursively(n1): ' + getFactorialRecursively(n1) +
      '<br>n2: ' + n2 +
      '<br>getFactorialRecursively(n2): ' + getFactorialRecursively(n2);
  };

  return ex3;
}
