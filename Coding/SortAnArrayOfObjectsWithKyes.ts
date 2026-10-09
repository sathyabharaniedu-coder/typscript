export{}

const employees = [
    { id: 1, name: "John", department: "IT", salary: 50000 },
    { id: 2, name: "Alice", department: "HR", salary: 60000 },
    { id: 3, name: "Bob", department: "IT", salary: 45000 },
    { id: 4, name: "David", department: "Finance", salary: 70000 },
    { id: 5, name: "Emma", department: "HR", salary: 55000 },
    { id: 6, name: "Chris", department: "IT", salary: 50000 }
];

const sort = employees.sort((a,b) => {
    if(a.name < b.name){
        return 1
    }else{
        return -1
    }
})


console.log(sort)

console.log(employees[0].name > employees[1].name)