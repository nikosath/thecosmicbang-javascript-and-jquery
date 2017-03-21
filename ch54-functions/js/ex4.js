function ex4() {
  'use strict';

  // function Employee(name, salary, numberOfYears) {
  //   var e = {};
  //   e.name = name;
  //   e.salary = salary;
  //   e.numberOfYears = numberOfYears;
  //
  //   e.getBonus = function () {
  //     switch (true) {
  //     case (e.numberOfYears < 0.5):
  //       return 0;
  //     case (e.numberOfYears <= 5):
  //       return e.salary / 2;
  //     case (e.numberOfYears <= 10):
  //       return e.salary;
  //     case (e.numberOfYears > 10):
  //       return 2 * e.salary;
  //     }
  //   };
  //
  //   return e;
  // }
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

  function Employee(name, salary, numberOfYears) {
    this.name = name;
    this.salary = salary;
    this.numberOfYears = numberOfYears;

    this.getBonus = function () {
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
  }

  var emp1 = Object.create(employee);
  emp1.name = 'James';
  emp1.salary = 1000;
  emp1.numberOfYears = 0.5;

  var emp2 = new Employee('Katerina', 1000, 5);
  var emp3 = new Employee('Kostas', 1000, 10);

  console.log(emp1);
  console.log(emp2);
  console.log(emp3);

  // Output for index.html
  var ex4 = {};
  ex4.getHtmlOutput = function () {
    return '<p>Ex4' +
      '<br>(James, 1000, 0.5) bonus: ' + emp1.getBonus() +
      '<br>(Katerina, 1000, 5) bonus: ' + emp2.getBonus() +
      '<br>(Kostas, 1000, 0.5) bonus: ' + emp3.getBonus();
  };

  return ex4;
}
