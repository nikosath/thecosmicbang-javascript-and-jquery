function ex6() {
  'use strict';

  var str = 'the roles';
  var str2 = 'we play';
  var str3 = '';

  // TODO: Delete it if I won't use it
  function isValidString(str) {
    return str !== undefined && str !== '';
  }

  // Make capitalise() from ex5 available to ex6.
  var capitalise = ex5().capitalise;

  function concatAndUppCase() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i]) {
      // if (isValidString(arguments[i])) {
        result.push(capitalise(arguments[i]));
      }
    }
    // [].join(' ') returns ''
    return result.join(' ');
  }

  function concatAndUppCase2() {
    var result = capitalise(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i]) {
        result += ' ' + capitalise(arguments[i]);
      }
    }
    return result;
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
      '<br>concatAndUppCase(str3): ' + concatAndUppCase(str3) +
      '<br>concatAndUppCase2(str3): ' + concatAndUppCase2(str3) +
      '<br>concatAndUppCase(test case 4): ' +
      concatAndUppCase("foo", "bar", "mary", "", "woo", "", "", "", "ball") +
      '<br>concatAndUppCase2(test case 4): ' +
      concatAndUppCase2("foo", "bar", "mary", "", "woo", "", "", "", "ball");
  };

  return ex6;
}
