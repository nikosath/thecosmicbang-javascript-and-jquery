function ex1() {
  'use strict';

  var fahrenheit = 0;
  function getCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  // Output for index.html
  var ex1 = {};
  ex1.getHtmlOutput = function () {
    return '<p>Ex1' +
      '<br>fahrenheit: ' + fahrenheit +
      '<br>celsius: ' + getCelsius(fahrenheit);
  };

  return ex1;
}
