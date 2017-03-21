function ex6() {
  'use strict';

  var str = 'the roles';
  var str2 = 'we play';
  var str3 = '';

  function concatenateAndUppercase() {

    return arguments;

    // if (str === undefined || str === '') {
    //   return '';
    // } else {
    //   return str[0].toUpperCase() + str.slice(1);
    // }
  }

  // Output for index.html
  var ex6 = {};
  ex6.getHtmlOutput = function () {
    return '<p>Ex6' +
      '<br>str: ' + str +
      '<br>concatenateAndUppercase(str): ' + concatenateAndUppercase(str) +
      '<br>str2: ' + str2 +
      '<br>concatenateAndUppercase(str2): ' + concatenateAndUppercase(str2) +
      '<br>str3: ' + str3 +
      '<br>concatenateAndUppercase(str3): ' + concatenateAndUppercase(str3);
  };

  return ex6;
}
