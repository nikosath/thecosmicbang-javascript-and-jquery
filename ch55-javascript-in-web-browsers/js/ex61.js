function ex6() {
  'use strict';

  var str = 'the roles';
  var str2 = 'we play';
  var str3 = '';

  // Make capitalise() from ex5 available to ex6.
  var capitalise = ex5().capitalise;

  function concatAndUppCase() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
      result[i] = capitalise(arguments[i]);
    }
    // [].join(' ') returns ''
    return result.join(' ');
  }

  // Output for index.html
  var ex6 = {};
  ex6.getHtmlOutput = function () {
    return '<p>Ex6' +
      '<br>str: ' + str +
      '<br>str2: ' + str2 +
      '<br>str3: ' + str3 +
      '<br>concatAndUppCase(str, str2): ' + concatAndUppCase(str, str2) +
      '<br>concatAndUppCase(str2, str): ' + concatAndUppCase(str2, str) +
      '<br>concatAndUppCase(str3): ' + concatAndUppCase(str3);
  };

  return ex6;
}
