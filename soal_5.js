function validateStudentsData(students) {
    for (let student of students) {
        if (typeof student.name !== "string" || student.name === "") {
            return false
        } 
        if (student.age <= 0) {
            return false
        }
        if (student.score < 0 || student.score > 100) {
            return false
        }
    }
    return true
}
const students = [
    { name: "Andi", age: 20, score: 85 },
    { name: "Budi", age: 5, score: 90 },
    { name: "Anna", age: 22, score: 75 },
    { name: "Citra", age: 19, score: 95 },
]
console.log(validateStudentsData(students));