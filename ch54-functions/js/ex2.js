function ex2() {
  'use strict';

  var n1 = 0;
  var n2 = 4;

  function getFactorial(n) {
    if (n >= 0) {
      var f = 1;
      for (var i = 2; i <= n; i++) {
        f *= i;
      }
      return f;
    }
  }

  // Output for index.html
  var ex2 = {};
  ex2.getHtmlOutput = function () {
    return '<p>Ex2' +
      '<br>n1: ' + n1 +
      '<br>getFactorial(n1): ' + getFactorial(n1) +
      '<br>n2: ' + n2 +
      '<br>getFactorial(n2): ' + getFactorial(n2);
  };

  return ex2;
}
