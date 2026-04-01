function countEmployeeByAgeRange(employee) {
    let result = {
        "Under 25": 0,
        "25-30": 0,
        "Above 30": 0
    };
    // Looping untuk menghitung jumlah karyawan di tiap katergori unur
    employee.forEach(employee => {
        if (employee.age < 25) {
            result["Under 25"]++
        } else if (employee.age >= 25 && employee.age <= 30) {
            result["25-30"]++
        } else if (employee.age > 30) { 
            result["Above 30"]++ 
            console.log(employee)
        }
        
            
    
        // Cek kategori umur dan tingkatkan jumlah di kategori yang sesuai
    });
    return result;
}
// Contoh penggunaan
const employee = [
    { name: "Alice", age: 23 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 35 },
    { name: "Eve", age: 24 },
]    
console.log(countEmployeeByAgeRange(employee));
// Expected Output: {"Under 25":2,"25-30": 2, "Above 30":1}