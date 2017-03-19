function ex1() {
  'use strict';
  var array1 = ['a', 'B', 'a', 'c', 'C', 'B', 'f'];
  var array2 = ['asd', 'AsD', 'asd', 'aSD'];

  var compareAlphabetically = function (a, b) {
    var aLow = a.toLowerCase();
    var bLow = b.toLowerCase();

    // Case1: Two different letters, e.g. (a,b) or (a,B)
    // Case2: Two same letters, e.g. (a,A) or (b,b)
    // In both cases, put the lower case first
    if (aLow < bLow || (aLow === bLow && a > b)) {
      return -1;
    } else if (aLow > bLow || (aLow === bLow && a < b)) {
      return 1;
    } else {
      return 0;
    }

  };

  // Output for index.html
  var ex1 = {};
  ex1.output = function () {
    return '<br>array1: ' + array1 +
      '<br>array1 sorted: ' + array1.sort(compareAlphabetically) +
      '<br>array2: ' + array2 +
      '<br>array2 sorted: ' + array2.sort(compareAlphabetically);
  };

  return ex1;
}
