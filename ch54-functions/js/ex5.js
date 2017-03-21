function ex5() {
  'use strict';

  var str = 'the roles';
  var str2 = 'we play';
  var str3 = '';

  function capitalise(str) {
    if (str === undefined || str === '') {
      return '';
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  }

  // Output for index.html
  var ex5 = {};
  // Make capitalise() available to the next exercise, ex6.
  ex5.capitalise = capitalise;
  ex5.getHtmlOutput = function () {
    return '<p>Ex5' +
      '<br>str: ' + str +
      '<br>capitalise(str): ' + capitalise(str) +
      '<br>str2: ' + str2 +
      '<br>capitalise(str2): ' + capitalise(str2) +
      '<br>str3: ' + str3 +
      '<br>capitalise(str3): ' + capitalise(str3);
  };

  return ex5;
}
