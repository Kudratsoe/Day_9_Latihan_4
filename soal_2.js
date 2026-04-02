
function groupByDepartment(employees) {
    let hasil = {}
    // hasil["HR"] = []
    // console.log(hasil["HR"], "<--")
    employees.forEach(function (employee) {
        // console.log(employee["department"])   // "HR" , "Engineering", "Marketing"
        // employee ["department"]
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


