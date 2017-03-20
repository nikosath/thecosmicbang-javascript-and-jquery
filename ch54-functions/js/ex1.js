function ex1() {
  'use strict';

  // Output for index.html
  var ex1 = {};
  ex1.getOutput = function () {
    var output = '<p>Ex1' +
      '<br>array1: ' + array1 +
      '<br>array1 sorted: ' + array1.sort(compareAlphabetically) +
      '<br>array2: ' + array2 +
      '<br>array2 sorted: ' + array2.sort(compareAlphabetically);

    return output;
  };

  return ex1;
}
