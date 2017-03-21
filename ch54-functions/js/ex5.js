function ex5() {
  'use strict';

  var str = 'the roles';
  var str2 = 'we play';
  
  function capitalise(str) {
    // str = str | '';
    return str[0].toUpperCase() + str.slice(1);
  }

  // Output for index.html
  var ex5 = {};
  ex5.getHtmlOutput = function () {
    return '<p>Ex5' +
      '<br>str: ' + str +
      '<br>capitalise(str): ' + capitalise(str) +
      '<br>str2: ' + str2 +
      '<br>capitalise(str2): ' + capitalise(str2);
  };

  return ex5;
}
