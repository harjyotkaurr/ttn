const employees = [ { name: "Alice", department: "IT", salary: 60000 }, 
    { name: "Bob", department: "HR", salary: 50000 }, 
    { name: "Charlie", department: "IT", salary: 75000 }, 
    { name: "David", department: "Finance", salary: 80000 } ];

    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
      totalSalary += employees[i].salary;
    }
    
   
    let itEmployees = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].department === "IT") {
        itEmployees.push(employees[i].name);
      }
    }
    let highestSalaryEmployee = employees[0];
    for (let i = 1; i < employees.length; i++) {
      if (employees[i].salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employees[i];
      }
    }
    
    console.log("Total Salary of all employees: $" + totalSalary);
    console.log("Employees in IT department: " + itEmployees.join(", "));
    console.log("Employee with the highest salary: " + highestSalaryEmployee.name);
    