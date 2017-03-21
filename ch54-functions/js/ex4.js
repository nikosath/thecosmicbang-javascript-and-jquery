function ex4() {
  'use strict';

  // Prototypal inheritance
  var employee = {
    name: '',
    salary: 0,
    numberOfYears: 0,
    getBonus: function () {
      switch (true) {
      case (this.numberOfYears < 0.5):
        return 0;
      case (this.numberOfYears <= 5):
        return this.salary / 2;
      case (this.numberOfYears <= 10):
        return this.salary;
      case (this.numberOfYears > 10):
        return 2 * this.salary;
      }
    }
  };

  var emp1 = Object.create(employee);
  emp1.name = 'James';
  emp1.salary = 1000;
  emp1.numberOfYears = 0.5;

  var emp2 = Object.create(employee);
  emp2.name = 'Katerina';
  emp2.salary = 1000;
  emp2.numberOfYears = 5;

  // ES5 constructor function version of inheritance
  function Employee(name, salary, numberOfYears) {
    this.name = name | '';
    this.salary = salary | 0;
    this.numberOfYears = numberOfYears | 0;
  }

  Employee.prototype.getBonus = function () {
    switch (true) {
    case (this.numberOfYears < 0.5):
      return 0;
    case (this.numberOfYears <= 5):
      return this.salary / 2;
    case (this.numberOfYears <= 10):
      return this.salary;
    case (this.numberOfYears > 10):
      return 2 * this.salary;
    }
  };

  var emp3 = new Employee('Kostas', 1000, 10);
  var emp4 = new Employee();

  console.log(emp1);
  console.log(emp2);
  console.log(emp3);
  console.log(emp4);

  // Output for index.html
  var ex4 = {};
  ex4.getHtmlOutput = function () {
    return '<p>Ex4' +
      '<br>(James, 1000, 0.5) bonus: ' + emp1.getBonus() +
      '<br>(Katerina, 1000, 5) bonus: ' + emp2.getBonus() +
      '<br>(Kostas, 1000, 10) bonus: ' + emp3.getBonus() +
      '<br>() bonus: ' + emp4.getBonus();
  };

  return ex4;
}
