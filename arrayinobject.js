let students = [
    {
        name: "Siva",
        age: 22,
        department: "CSE"
    },
    {
        name: "Arun",
        age: 21,
        department: "ECE"
    },
    {
        name: "Kumar",
        age: 22,
        department: "IT"
    }
];

console.log(students);


for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
    console.log(students[i].age);
    console.log(students[i].department);
}



let employees = [
    { id: 101, name: "Siva", salary: 30000 },
    { id: 102, name: "Arun", salary: 35000 },
    { id: 103, name: "Kumar", salary: 40000 }
];

employees.forEach(function(employee) {
    console.log(employee.name + " - " + employee.salary);
});