let employees = [
    { name: "Harjyot", age: 21, salary: 15000, dob: "2003-08-02" },
    { name: "Pravleen", age: 20, salary: 15000, dob: "2004-02-25" },
    { name: "Simran", age: 21, salary: 9000, dob: "2004-01-25" },
    { name: "ajay", age: 23, salary: 4000, dob: "2001-11-25" },
    { name: "Rahul", age: 24, salary: 850, dob: "2000-12-30" }
];

let highSalaryEmployees = [];
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 5000) {
        highSalaryEmployees.push(employees[i]);
    }
}
console.log("Employees with salary greater than 5000:", highSalaryEmployees);


let ageGroup = {};
for (let i = 0; i < employees.length; i++) {
    let age = employees[i].age;
    if (!ageGroup[age]) {
        ageGroup[age] = [];
    }
    ageGroup[age].push(employees[i]);
}
console.log("Employees grouped by age:", ageGroup);


for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary < 1000 && employees[i].age > 20) {
        employees[i].salary = employees[i].salary * 5; 
    }
}
console.log("Updated employees salary", employees);
