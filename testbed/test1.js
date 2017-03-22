function Employee(name, salary, numberOfYears) {
    return {
        name: name,
        salary: salary,
        numberOfYears: numberOfYears,
        bonus: function() {
            if (numberOfYears < 0.5) {
                return 0;
            }
            else if (numberOfYears <= 5) {
                return salary / 2;
            }
            else if (numberOfYears <= 10) {
                return salary;
            }
            else if (numberOfYears > 10) {
                return salary * 2;
            }
        }};
}

emp1 = Employee('Petros', 5000, 15);
emp2 = Object.create(Employee('Mary', 5000, 15));
emp3 = new Employee('Petros', 5000, 15);
console.log(emp1);
console.log(emp2);
console.log(emp3);
