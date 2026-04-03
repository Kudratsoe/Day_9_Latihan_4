unction groupByDepartment(employees) {
    let hasil = {}
    employees.forEach(function (employee) {
        if (hasil[employee.department] === undefined) {
            hasil[employee.department] = []
        }
        hasil[employee.department].push(employee.name)
    })
    return hasil

}
const employees = [
    { name: "Alice", age: 28, department: "HR" },
    { name: "Bob", age: 34, department: "Engineering" },
    { name: "Charlie", age: 25, department: "Engineering" },
    { name: "David", age: 42, department: "HR" },
    { name: "Eve", age: 28, department: "Marketing" },
];
const groupedEmployees = groupByDepartment(employees);

console.log(groupedEmployees)